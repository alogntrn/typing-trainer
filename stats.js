// stats.js - the Stats screen.
//
// Parts:
//   1. Small helpers (tables, dates)
//   2. The numbers (today, streak, best WPM, weakest letters)
//   3. The chart (Chart.js)
//   4. Dictation results and recent runs
//   5. Export and import
//   6. Showing the screen and connecting the buttons

// ===== 1. Small helpers =====

// Fill a <table> with a header row and body rows.
// Each cell is plain text, or an element (when we want a badge inside the cell).
function fillTable(table, headers, rows) {
  table.innerHTML = "";
  const head = el("tr");
  for (const header of headers) head.appendChild(el("th", "", header));
  table.appendChild(el("thead")).appendChild(head);

  const body = el("tbody");
  for (const row of rows) {
    const tr = el("tr");
    for (const cell of row) {
      const td = el("td");
      if (typeof cell === "string" || typeof cell === "number") td.textContent = cell;
      else td.appendChild(cell);
      tr.appendChild(td);
    }
    body.appendChild(tr);
  }
  table.appendChild(body);
}

// "1 Oct"
function shortDate(date) {
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
}

// "1 Oct, 20:41"
function dateAndTime(isoText) {
  const date = new Date(isoText);
  return shortDate(date) + ", " +
    date.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
}

// The Monday (at midnight) of the week a date is in.
function weekStart(date) {
  const daysSinceMonday = (date.getDay() + 6) % 7; // Sunday is 0 in JavaScript
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - daysSinceMonday);
}

// ===== 2. The numbers =====

function showNumbers(runs) {
  const today = dateKey(new Date());
  $("st-today").textContent = formatCompact(secondsTypedOn(today, runs));
  $("st-streak").textContent = currentStreak(runs);

  const best = bestWpmRun(runs);
  $("st-best").textContent = best ? best.wpm : "-";
  $("st-best-note").textContent = best
    ? "Best run: " + best.wpm + " WPM in \"" + best.title + "\" on " + shortDate(new Date(best.date)) + "."
    : "Finish a text to see your best run.";

  // weakest letters
  const box = $("st-weak");
  box.innerHTML = "";
  const weak = weakestLetters(runs, 5);
  if (weak.length === 0) {
    box.appendChild(el("p", "muted",
      "Not enough data yet. After a few texts, the letters you lose most often show up here."));
  }
  for (const item of weak) {
    const chip = el("span", "chip");
    chip.appendChild(el("span", "chip-letter", item.letter));
    const percent = Math.round(item.rate * 100);
    chip.appendChild(document.createTextNode(
      percent + "% lost (" + item.mistakes + " of " + item.attempts + ")"));
    box.appendChild(chip);
  }
}

// ===== 3. The chart =====

let chart = null;                                   // the Chart.js chart that is on screen
const chartChoice = { metric: "time", period: "day" }; // what the two switches say

const METRIC_NAMES = {
  time: "Typing time (minutes)",
  wpm: "Average WPM",
  accuracy: "Accuracy (%)"
};

// The list of "buckets" on the horizontal axis: the last 30 days or the last 12 weeks.
function bucketList(period) {
  const now = new Date();
  const buckets = [];
  if (period === "day") {
    for (let i = 29; i >= 0; i--) {
      const date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - i);
      buckets.push({ key: dateKey(date), label: shortDate(date), title: shortDate(date) });
    }
  } else {
    const thisMonday = weekStart(now);
    for (let i = 11; i >= 0; i--) {
      const date = new Date(thisMonday.getFullYear(), thisMonday.getMonth(), thisMonday.getDate() - 7 * i);
      buckets.push({ key: dateKey(date), label: shortDate(date), title: "Week of " + shortDate(date) });
    }
  }
  return buckets;
}

// Which bucket does a date belong to? (A day is its own bucket; for weeks it is its Monday.)
function bucketKey(date, period) {
  return period === "day" ? dateKey(date) : dateKey(weekStart(date));
}

// Group a list of runs/dictations by bucket: { "2026-10-01": [run, run], ... }
function groupByBucket(items, period) {
  const groups = {};
  for (const item of items) {
    const key = bucketKey(new Date(item.date), period);
    (groups[key] = groups[key] || []).push(item);
  }
  return groups;
}

// One number per bucket for the chosen metric (null = nothing to show for that bucket).
function metricValues(runs, metric, buckets, period) {
  const groups = groupByBucket(runs, period);
  return buckets.map((bucket) => {
    const list = groups[bucket.key] || [];
    if (metric === "time") {
      const seconds = list.reduce((sum, run) => sum + run.durationSec, 0);
      return Math.round((seconds / 60) * 10) / 10; // minutes, one decimal
    }
    if (list.length === 0) return null;
    const field = metric === "wpm" ? "wpm" : "accuracy";
    return Math.round(average(list.map((run) => run[field])) * 10) / 10;
  });
}

// The colours come from style.css, so the chart follows light and dark mode.
function cssColor(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

// A thin vertical line under the pointer on line charts, so you can aim at a date.
const crosshairPlugin = {
  id: "crosshair",
  afterDatasetsDraw(chartInstance) {
    const active = chartInstance.tooltip && chartInstance.tooltip.getActiveElements();
    if (!active || active.length === 0 || chartInstance.config.type !== "line") return;
    const x = active[0].element.x;
    const area = chartInstance.chartArea;
    const ctx = chartInstance.ctx;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x, area.top);
    ctx.lineTo(x, area.bottom);
    ctx.lineWidth = 1;
    ctx.strokeStyle = cssColor("--axis");
    ctx.stroke();
    ctx.restore();
  }
};

function drawChart() {
  const { metric, period } = chartChoice;
  const data = loadData();
  const buckets = bucketList(period);
  const typingValues = metricValues(data.runs, metric, buckets, period);

  // For accuracy we also draw your dictation accuracy as a second line.
  let dictationValues = null;
  if (metric === "accuracy") {
    const groups = groupByBucket(data.dictations, period);
    dictationValues = buckets.map((bucket) => {
      const list = groups[bucket.key] || [];
      return list.length === 0 ? null : Math.round(average(list.map((d) => d.accuracy)) * 10) / 10;
    });
  }

  $("chart-title").textContent =
    METRIC_NAMES[metric] + " per " + (period === "day" ? "day, last 30 days" : "week, last 12 weeks");

  const hasData = typingValues.some((v) => v) || (dictationValues && dictationValues.some((v) => v));
  $("stats-chart").parentElement.hidden = !hasData;
  $("chart-empty").hidden = hasData;
  $("chart-empty").textContent = data.runs.length === 0
    ? "Nothing to show yet. Finish a text and your progress will appear here."
    : "No typing in this period.";
  document.querySelector(".table-view").hidden = !hasData;

  if (chart) chart.destroy();
  chart = null;
  if (!hasData) return;

  // the table version of the chart (for screen readers and for exact numbers)
  const headers = [period === "day" ? "Day" : "Week starting", METRIC_NAMES[metric]];
  if (dictationValues) headers.push("Dictation accuracy (%)");
  const dash = (v) => (v === null ? "-" : v);
  fillTable($("chart-table"), headers, buckets.map((bucket, i) =>
    dictationValues ? [bucket.title, dash(typingValues[i]), dash(dictationValues[i])]
                    : [bucket.title, dash(typingValues[i])]));
  $("stats-chart").setAttribute("aria-label", $("chart-title").textContent + ". The numbers are in the table below.");

  // colours (blue first, orange second)
  const blue = cssColor("--series-1");
  const orange = cssColor("--series-2");
  const surface = cssColor("--card");
  const ink = cssColor("--text");
  const inkMuted = cssColor("--muted");
  const grid = cssColor("--gridline");

  const isBar = metric === "time";
  const lineLook = (colour) => ({
    borderColor: colour,
    backgroundColor: colour,
    borderWidth: 2,
    tension: 0,
    spanGaps: true,              // join the dots across days without typing
    pointRadius: 4,
    pointHoverRadius: 6,
    pointBackgroundColor: colour,
    pointBorderColor: surface,   // a ring in the surface colour keeps dots readable
    pointBorderWidth: 2
  });

  const datasets = [];
  if (isBar) {
    datasets.push({
      label: "Typing time (min)",
      data: typingValues,
      backgroundColor: blue,
      borderRadius: { topLeft: 4, topRight: 4 },   // rounded top, flat on the baseline
      borderSkipped: false,
      maxBarThickness: 24
    });
  } else {
    datasets.push({ label: metric === "wpm" ? "Average WPM" : "Typing accuracy", data: typingValues, ...lineLook(blue) });
    if (dictationValues) datasets.push({ label: "Dictation accuracy", data: dictationValues, ...lineLook(orange) });
  }

  // Accuracy never goes above 100; start the axis a little below your lowest value.
  const yScale = { beginAtZero: true, grace: "5%", grid: { color: grid }, border: { display: false },
                   ticks: { color: inkMuted, precision: 0 },
                   title: { display: true, text: METRIC_NAMES[metric], color: inkMuted } };
  if (metric === "accuracy") {
    const all = typingValues.concat(dictationValues || []).filter((v) => v !== null);
    yScale.beginAtZero = false;
    yScale.max = 100;
    yScale.min = Math.max(0, Math.floor((Math.min(...all) - 5) / 10) * 10);
    delete yScale.grace;
  }

  // the chart uses the same typewriter font as the rest of the page
  Chart.defaults.font.family = getComputedStyle(document.body).fontFamily;

  chart = new Chart($("stats-chart"), {
    type: isBar ? "bar" : "line",
    data: { labels: buckets.map((b) => b.label), datasets: datasets },
    plugins: [crosshairPlugin],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: false,
      interaction: { mode: "index", intersect: false },
      scales: {
        x: { grid: { display: false }, border: { color: cssColor("--axis") },
             ticks: { color: inkMuted, maxRotation: 0, autoSkip: true, maxTicksLimit: 8 } },
        y: yScale
      },
      plugins: {
        legend: {
          display: datasets.length > 1,          // one series needs no legend
          // a round dot in the series colour, like the dots on the lines
          labels: { color: ink, usePointStyle: true, pointStyle: "circle", boxWidth: 10, boxHeight: 10 }
        },
        tooltip: {
          backgroundColor: surface,
          titleColor: inkMuted,
          bodyColor: ink,
          borderColor: grid,
          borderWidth: 1,
          padding: 10,
          boxPadding: 4,
          usePointStyle: true,
          callbacks: {
            title: (items) => buckets[items[0].dataIndex].title,
            label: (item) => item.dataset.label + ": " + item.formattedValue
          }
        }
      }
    }
  });
}

// ===== 4. Dictation results and recent runs =====

function showDictationStats(dictations) {
  $("st-dict-count").textContent = dictations.length;
  if (dictations.length === 0) {
    $("st-dict-avg").textContent = "-";
    $("st-dict-best").textContent = "-";
    $("dict-table").innerHTML = "";
    $("dict-table").appendChild(el("caption", "muted", "No dictations yet."));
    return;
  }
  const accuracies = dictations.map((d) => d.accuracy);
  $("st-dict-avg").textContent = Math.round(average(accuracies) * 10) / 10 + "%";
  $("st-dict-best").textContent = Math.max(...accuracies) + "%";

  const rows = dictations.slice(-10).reverse().map((d) => [
    dateAndTime(d.date), d.title, d.level, d.accuracy + "%"
  ]);
  fillTable($("dict-table"), ["Date", "Text", "Level", "Accuracy"], rows);
}

function showRecentRuns(runs) {
  const table = $("runs-table");
  if (runs.length === 0) {
    table.innerHTML = "";
    table.appendChild(el("caption", "muted", "No typing runs yet."));
    return;
  }
  const rows = runs.slice(-15).reverse().map((run) => {
    const title = el("span", "", run.title + " ");
    if (run.type === "drill") title.appendChild(el("span", "badge", "drill")); // drills are marked
    return [dateAndTime(run.date), title, run.wpm, run.accuracy + "%", run.mistakes, formatTime(run.durationSec)];
  });
  fillTable(table, ["Date", "Text", "WPM", "Accuracy", "Mistakes", "Time"], rows);
}

// ===== 5. Export and import =====

function showDataMessage(text) {
  $("data-message").textContent = text;
}

function storageNote() {
  return "Stored on this device: " + dataSizeText() + " (browsers allow about 5000 KB).";
}

// Save all data as a .json file. The browser puts it in your Downloads folder.
function exportData() {
  const json = JSON.stringify(loadData(), null, 2);
  const url = URL.createObjectURL(new Blob([json], { type: "application/json" }));
  const link = el("a");
  link.href = url;
  link.download = "type-and-dictate-backup-" + dateKey(new Date()) + ".json";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
  showDataMessage("Exported. Look for " + link.download + " in your downloads. " + storageNote());
}

// Read a backup file and merge it in (see mergeImportedData in storage.js).
async function importFile(file) {
  try {
    const imported = JSON.parse(await file.text());
    const result = mergeImportedData(imported);
    const skipped = imported.runs.length - result.newRuns;
    showStats();   // redraw everything with the new data
    showDataMessage("Imported " + plural(result.newRuns, "new typing run") + " and " +
      plural(result.newDictations, "new dictation") +
      (skipped > 0 ? " (" + plural(skipped, "run") + " skipped: already here, or not valid)" : "") +
      ". " + storageNote());
  } catch (error) {
    showDataMessage(error instanceof SyntaxError
      ? "This file could not be read. Is it a Type & Dictate backup (.json)?"
      : error.message);
  }
}

// ===== 6. Showing the screen and connecting the buttons =====

function showStats() {
  const data = loadData();
  showNumbers(data.runs);
  markSwitch("metric-switch", chartChoice.metric);
  markSwitch("period-switch", chartChoice.period);
  showView("stats");        // the chart can only measure itself when the screen is visible
  drawChart();
  showDictationStats(data.dictations);
  showRecentRuns(data.runs);
  showDataMessage(storageNote());
}

function connectSwitch(switchId, choiceName) {
  $(switchId).addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    chartChoice[choiceName] = button.dataset.value;
    markSwitch(switchId, button.dataset.value);
    drawChart();
  });
}
connectSwitch("metric-switch", "metric");
connectSwitch("period-switch", "period");

$("export-btn").addEventListener("click", exportData);
$("import-btn").addEventListener("click", () => $("import-file").click());
$("import-file").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) importFile(file);
  event.target.value = ""; // so you can pick the same file again later
});

// Redraw when the computer switches between light and dark mode.
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
  if (!$("view-stats").hidden) drawChart();
});
