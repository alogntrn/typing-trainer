// common.js - small helpers that every other file uses.

// Shortcut: $("some-id") finds the HTML element with that id.
function $(id) {
  return document.getElementById(id);
}

// Shortcut for making an element, e.g. el("p", "muted", "Hello").
// It uses textContent, so the text can never be mistaken for HTML.
function el(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function countWords(text) {
  return text.split(" ").length;
}

// 75.4 seconds -> "1:15"
function formatTime(seconds) {
  const whole = Math.floor(seconds);
  return Math.floor(whole / 60) + ":" + String(whole % 60).padStart(2, "0");
}

// plural(1, "run") -> "1 run", plural(3, "run") -> "3 runs"
function plural(count, word) {
  return count + " " + word + (count === 1 ? "" : "s");
}

// A short duration for small spaces: 40 -> "40s", 125 -> "2m 05s", 3900 -> "1h 05m"
function formatCompact(seconds) {
  const whole = Math.round(seconds);
  if (whole < 60) return whole + "s";
  const minutes = Math.floor(whole / 60);
  if (minutes < 60) return minutes + "m " + String(whole % 60).padStart(2, "0") + "s";
  return Math.floor(minutes / 60) + "h " + String(minutes % 60).padStart(2, "0") + "m";
}

// The average of a list of numbers.
function average(numbers) {
  return numbers.reduce((sum, n) => sum + n, 0) / numbers.length;
}

// The middle value of a list of numbers (half are bigger, half are smaller).
// Unlike the average, one strange value cannot pull it far away.
function median(numbers) {
  const sorted = numbers.slice().sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 1 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
}

// A list in random order (a new list; the original stays as it was).
function shuffle(list) {
  const mixed = list.slice();
  for (let i = mixed.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [mixed[i], mixed[j]] = [mixed[j], mixed[i]];
  }
  return mixed;
}

// Show one screen and hide the others. Every screen says which tab at the top it
// belongs to (data-tab="typing" in index.html), so we can highlight that tab.
// Moving to another screen also stops any speech that is still playing.
function showView(name) {
  let tabName = "";
  for (const view of document.querySelectorAll(".view")) {
    view.hidden = view.id !== "view-" + name;
    if (!view.hidden) tabName = view.dataset.tab;
  }
  for (const tab of document.querySelectorAll(".tab")) {
    const isActive = tab.dataset.tab === tabName;
    tab.classList.toggle("active", isActive);
    if (isActive) tab.setAttribute("aria-current", "page");   // screen readers say "current page"
    else tab.removeAttribute("aria-current");
  }
  if ("speechSynthesis" in window) speechSynthesis.cancel();
  window.scrollTo(0, 0);
}

// Mark which button of a switch is selected (the look comes from style.css).
function markSwitch(switchId, value) {
  for (const button of $(switchId).querySelectorAll("button")) {
    const selected = button.dataset.value === value;
    button.classList.toggle("selected", selected);
    button.setAttribute("aria-pressed", selected ? "true" : "false");
  }
}
