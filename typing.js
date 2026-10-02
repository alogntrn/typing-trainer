// typing.js - the typing trainer: daily texts, the typing engine, summary screen.
//
// Parts:
//   1. Choosing the texts (lengths, estimated time, daily set, random, next)
//   2. The screens (home, summary)
//   3. The typing engine (what happens when you press a key)
//   4. Connecting the buttons

const PAUSE_LIMIT_MS = 5000; // a pause longer than 5 seconds does not count as typing time

// ===== 1. Choosing the texts =====

// The three exercise lengths. Every text belongs to one of them, worked out from its
// number of words, so a text you add yourself lands in the right group automatically.
// perDay = how many texts of that length you get each day.
const LENGTHS = {
  short:  { name: "Short",  maxWords: 120,      perDay: 5 },
  medium: { name: "Medium", maxWords: 220,      perDay: 3 },
  long:   { name: "Long",   maxWords: Infinity, perDay: 2 }
};

function lengthOf(text) {
  const words = countWords(text.text);
  if (words <= LENGTHS.short.maxWords) return "short";
  if (words <= LENGTHS.medium.maxWords) return "medium";
  return "long";
}

// The texts sorted into their groups once, when the page loads:
// { short: [...], medium: [...], long: [...] }, each in the order of the text files.
const TEXT_GROUPS = { short: [], medium: [], long: [] };
for (const text of TEXTS) TEXT_GROUPS[lengthOf(text)].push(text);

// The length you chose on the home screen (remembered between visits).
function chosenLength() {
  const length = getSetting("textLength", "short");
  return TEXT_GROUPS[length] && TEXT_GROUPS[length].length > 0 ? length : "short";
}

// ----- Estimated duration -----

const DEFAULT_WPM = 30; // used until you have finished a few texts

// Your usual speed: the median WPM of your last 10 runs (the median, so that one
// unusual run, for example with pasted text, does not change the estimate much).
function typicalWpm() {
  const recent = loadData().runs.filter((run) => run.wpm > 0).slice(-10);
  return recent.length >= 3 ? Math.round(median(recent.map((run) => run.wpm))) : DEFAULT_WPM;
}

// Minutes a text should take you. WPM counts 5 characters (spaces included) as one
// "word", so the estimate uses the number of characters, not words.
function estimatedMinutes(text, wpm) {
  return text.text.length / 5 / wpm;
}

// 0.6 -> "~1 min", 7.4 -> "~7 min"
function formatMinutes(minutes) {
  return "~" + Math.max(1, Math.round(minutes)) + " min";
}

// ----- The daily set -----

// The number of whole days since 1 January 1970, by your local calendar.
// It goes up by exactly 1 at midnight, so it is a handy "date as a number".
function dayNumber(date) {
  return Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86400000);
}

// Today's texts for the chosen length: neighbours from that group's list, and every
// new day the window slides on. With enough texts nothing repeats for a month
// (150 short texts at 5 a day, 90 medium at 3, 60 long at 2).
function getTodaysTexts() {
  const group = TEXT_GROUPS[chosenLength()];
  const perDay = Math.min(LENGTHS[chosenLength()].perDay, group.length);
  const start = (dayNumber(new Date()) * perDay) % group.length;
  const todays = [];
  for (let i = 0; i < perDay; i++) {
    todays.push(group[(start + i) % group.length]);
  }
  return todays;
}

// Any text of the chosen length (but not the one we are excluding).
function getRandomText(excludeTitle) {
  const group = TEXT_GROUPS[chosenLength()];
  let pick;
  do {
    pick = group[Math.floor(Math.random() * group.length)];
  } while (pick.title === excludeTitle && group.length > 1);
  return pick;
}

// Titles of the texts you finished today (looked up in the saved runs).
function titlesDoneToday() {
  const today = dateKey(new Date());
  return loadData().runs
    .filter((run) => run.type === "text" && dateKey(new Date(run.date)) === today)
    .map((run) => run.title);
}

// "Next text": the first of today's texts you haven't done yet.
// When they are all done, pick a random one instead.
function pickNextText() {
  const done = titlesDoneToday();
  const notDone = getTodaysTexts().filter(
    (text) => !done.includes(text.title) && text.title !== currentText.title
  );
  return notDone.length > 0 ? notDone[0] : getRandomText(currentText.title);
}

// ===== 2. The screens =====

function showHome() {
  const done = titlesDoneToday();
  const todays = getTodaysTexts();
  const doneCount = todays.filter((text) => done.includes(text.title)).length;
  const wpm = typicalWpm();

  $("today-date").textContent = new Date().toLocaleDateString("en-GB", {
    weekday: "long", day: "numeric", month: "long", year: "numeric"
  });
  $("today-progress").textContent = doneCount + " of " + todays.length + " done";

  // the length switch, with an estimated time for a typical text of each length
  for (const button of $("length-switch").querySelectorAll("button")) {
    const group = TEXT_GROUPS[button.dataset.value];
    button.innerHTML = "";
    button.appendChild(el("span", "seg-name", LENGTHS[button.dataset.value].name));
    button.disabled = group.length === 0;   // no texts of this length (yet)
    const minutes = group.length > 0 ? average(group.map((text) => estimatedMinutes(text, wpm))) : 0;
    button.appendChild(el("span", "seg-sub", group.length > 0 ? formatMinutes(minutes) : "no texts"));
  }
  markSwitch("length-switch", chosenLength());
  $("length-note").textContent = loadData().runs.filter((run) => run.wpm > 0).length >= 3
    ? "Times are estimates, based on your usual speed of " + wpm + " WPM (last 10 runs)."
    : "Times are estimates, based on " + wpm + " WPM until you have finished a few texts.";

  const list = $("today-list");
  list.innerHTML = "";
  for (const text of todays) {
    const isDone = done.includes(text.title);
    const card = el("button", isDone ? "text-item done" : "text-item");
    card.appendChild(el("span", "item-title", text.title));
    card.appendChild(el("span", "item-meta",
      text.topic + " \u00b7 " + countWords(text.text) + " words \u00b7 " + formatMinutes(estimatedMinutes(text, wpm))));
    if (isDone) card.appendChild(el("span", "item-done", "\u2713 Done today"));
    card.addEventListener("click", () => startText(text));
    list.appendChild(card);
  }
  showView("home");
}

// The five letters you got wrong most often: [["e", 3], ["t", 2], ...]
function mostMissedLetters(mistakes) {
  const counts = {};
  for (const mistake of mistakes) {
    const letter = mistake.expected.toLowerCase();
    counts[letter] = (counts[letter] || 0) + 1;
  }
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
}

function showSummary(stats) {
  $("summary-title").textContent = currentText.title;
  $("sum-wpm").textContent = stats.wpm;
  $("sum-accuracy").textContent = stats.accuracy + "%";
  $("sum-time").textContent = formatTime(stats.seconds);
  $("sum-mistakes").textContent = stats.mistakes;

  const box = $("summary-letters");
  box.innerHTML = "";
  const missed = mostMissedLetters(run.mistakes);
  if (missed.length === 0) {
    box.appendChild(el("p", "muted", "No mistakes - a perfect run!"));
  }
  for (const [letter, count] of missed) {
    const chip = el("span", "chip");
    chip.appendChild(el("span", "chip-letter", letter === " " ? "space" : letter));
    chip.appendChild(document.createTextNode(count === 1 ? "1 time" : count + " times"));
    box.appendChild(chip);
  }
  updatePractiseButton(run.mistakes); // (drill.js) switch the practise button on or off
  showView("summary");
}

// ===== 3. The typing engine =====

let currentText = null; // the text being typed: { title, topic, text }
let run = null;         // everything about the run in progress (see startText)
let charEls = [];       // one <span> on the screen for every character of the text
let charWords = [];     // for every character: the word it belongs to

const hiddenInput = $("hidden-input"); // the invisible text field that receives your typing

// Begin typing a text (also used for "try again" and "restart").
function startText(textObj) {
  currentText = textObj;
  run = {
    text: cleanText(textObj.text),
    pos: 0,            // which character you are on (0 = the first)
    correct: 0,        // how many letters you typed right
    stuck: false,      // true right after a skipped letter: the cursor must NOT move on until you type this letter right
    mistakes: [],      // one entry per lost letter: what was expected, what you typed, which word
    charCounts: {},    // how often each character came up (for per-letter statistics later)
    startedAt: null,   // time of the first key
    lastKeyAt: null,   // time of the most recent key
    activeMs: 0,       // typing time so far, without long pauses
    finished: false
  };

  $("typing-title").textContent = textObj.title;
  $("typing-topic").textContent = textObj.topic;
  // Show the typing screen FIRST, then put the text in. A hidden screen cannot be
  // scrolled: browsers ignore the "back to the top" and later bring back the scroll
  // position of the previous text.
  showView("typing");
  buildTextDisplay();
  updateLiveStats();

  // Focus the hidden input so you can type straight away. This is called from a
  // tap/click handler, which is what lets the iPad show its on-screen keyboard.
  hiddenInput.value = "";
  hiddenInput.focus();
  unlockAudio(); // (sound.js) browsers only allow sound after a click or tap, like this one
  updateHint();
}

// Put the text on the screen: one <span> per character, grouped into words.
function buildTextDisplay() {
  // Swap the text window for a brand-new, empty copy. Browsers remember where a box
  // was scrolled to, even while its screen is hidden, and some bring that position back
  // later, so a new text could open at the bottom. A new box has nothing to remember,
  // so every text starts on its first line.
  const oldBox = $("text-box");
  const box = oldBox.cloneNode(false); // same id and look, but no text and no scroll position
  oldBox.replaceWith(box);
  charEls = [];
  charWords = [];

  const words = run.text.split(" ");
  words.forEach((word, index) => {
    const wordEl = el("span", "word");
    // the word without punctuation at its edges: "Lydia," -> "Lydia"
    const cleanWord = word.replace(/^[^A-Za-z0-9]+|[^A-Za-z0-9]+$/g, "");
    // every word except the last one is followed by a space you also have to type
    const letters = index < words.length - 1 ? word + " " : word;
    for (const letter of letters.split("")) {
      const charEl = el("span", "char", letter);
      wordEl.appendChild(charEl);
      charEls.push(charEl);
      charWords.push(cleanWord);
    }
    box.appendChild(wordEl);
  });
  charEls[0].classList.add("current");
  $("progress-fill").style.width = "0%";
}

// Make a text safe to type: curly quotes become straight ones, and line breaks or
// double spaces become one space. (Handy when you paste your own texts into texts.js:
// a line break or a curly quote could otherwise never be typed.)
function cleanText(text) {
  return text.split("").map(normaliseChar).join("").replace(/\s+/g, " ").trim();
}

// Some keyboards swap straight quotes and hyphens for "smart" ones. Swap them back.
// (\u2018 and \u2019 are curly single quotes, \u201C and \u201D curly double quotes,
// \u2013 and \u2014 long dashes, \u00A0 is a "non-breaking" space.)
function normaliseChar(ch) {
  if (ch === "\u2018" || ch === "\u2019") return "'";
  if (ch === "\u201C" || ch === "\u201D") return '"';
  if (ch === "\u2013" || ch === "\u2014") return "-";
  if (ch === "\u00A0") return " ";
  return ch;
}

// Handle ONE typed character. This is the heart of the trainer.
function typeCharacter(typed) {
  const now = Date.now();

  // Timekeeping: add the time since the previous key, unless it was a long pause.
  if (run.startedAt === null) {
    run.startedAt = now;
  } else if (now - run.lastKeyAt <= PAUSE_LIMIT_MS) {
    run.activeMs += now - run.lastKeyAt;
  }
  run.lastKeyAt = now;

  const expected = run.text[run.pos];
  const charEl = charEls[run.pos];

  // A wrong key on the letter that is already waiting is NOT a new mistake.
  // The cursor just stays here (red cursor) until you type the right key.
  if (run.stuck && typed !== expected) {
    charEl.classList.add("bad-key");
    updateHint();
    return;
  }

  const key = expected.toLowerCase();
  run.charCounts[key] = (run.charCounts[key] || 0) + 1; // this letter has now been attempted

  if (typed === expected) {
    // Right key: the letter turns green, and the cursor moves on freely.
    run.correct++;
    run.stuck = false;
    charEl.classList.add("correct");
    charEl.classList.remove("current", "bad-key");
    run.pos++;
  } else {
    // Wrong key on a fresh letter: write the mistake down.
    run.mistakes.push({
      expected: expected,                                 // what you should have typed
      typed: typed,                                       // what you typed instead
      word: charWords[run.pos],                           // the word it was in
      before: run.pos > 0 ? run.text[run.pos - 1] : ""    // the character before (for letter pairs later)
    });
    // This letter is "lost": it turns red and the cursor skips past it.
    // The NEXT letter is now stuck until you type it right.
    charEl.classList.add("wrong");
    charEl.classList.remove("current");
    run.pos++;
    run.stuck = true;
  }

  if (run.pos < run.text.length) {
    charEls[run.pos].classList.add("current");
    scrollToCursor();
  }
  updateLiveStats();
  updateHint();

  if (run.pos >= run.text.length) finishRun();
}

// Keep the line you are typing on near the top of the 4-line window.
function scrollToCursor() {
  const box = $("text-box");
  const style = getComputedStyle(box);
  const lineHeight = parseFloat(style.lineHeight) || parseFloat(style.fontSize) * 1.8;
  const line = Math.floor(charEls[run.pos].offsetTop / lineHeight); // 0 = first line of the text
  box.scrollTop = Math.max(0, (line - 1) * lineHeight);
}

// The numbers shown live and in the summary.
function currentStats() {
  const minutes = run.activeMs / 60000;
  // Standard rule: 5 characters count as one "word". Only right keys count.
  // Under 1 second of typing the number would jump wildly, so show 0.
  const wpm = run.activeMs >= 1000 ? Math.round(run.correct / 5 / minutes) : 0;
  // Accuracy = the share of letters you got right (the others were "lost").
  const lettersDone = run.correct + run.mistakes.length;
  const accuracy = lettersDone > 0 ? Math.round((run.correct / lettersDone) * 1000) / 10 : 100;
  return {
    wpm: wpm,
    accuracy: accuracy,
    mistakes: run.mistakes.length,
    seconds: run.activeMs / 1000
  };
}

function updateLiveStats() {
  const stats = currentStats();
  $("live-wpm").textContent = stats.wpm;
  $("live-accuracy").textContent = stats.accuracy + "%";
  $("live-mistakes").textContent = stats.mistakes;
  $("live-time").textContent = formatTime(stats.seconds);
  $("progress-fill").style.width = (run.pos / run.text.length) * 100 + "%";
}

// The small message under the text (and dimming the text when typing is not possible).
function updateHint() {
  let message = "";
  let focused = true;
  if (run && !run.finished) {
    focused = document.activeElement === hiddenInput;
    if (!focused) {
      message = "Click or tap the text to continue typing.";
    } else if (run.startedAt === null) {
      message = "Start typing - the timer starts with your first key. A wrong key skips that letter, and the next letter waits until you type it right.";
    } else if (Date.now() - run.lastKeyAt > PAUSE_LIMIT_MS) {
      message = "Paused - this pause is not counted. Type to carry on.";
    }
  }
  $("typing-hint").textContent = message;
  $("text-card").classList.toggle("unfocused", !focused);
}

function finishRun() {
  run.finished = true;
  hiddenInput.blur(); // also hides the iPad keyboard so you can see the summary

  const stats = currentStats();
  addRun({
    date: new Date(run.startedAt).toISOString(), // date AND time the run started
    type: currentText.type || "text",            // "text", or "drill" for practice texts
    title: currentText.title,
    durationSec: Math.round(stats.seconds * 10) / 10,
    wpm: stats.wpm,
    accuracy: stats.accuracy,
    mistakes: stats.mistakes,
    mistakeDetails: run.mistakes,
    charCounts: run.charCounts
  });
  showSummary(stats);
}

// ===== 4. Connecting the buttons =====

// Every typed character arrives here. We read what is in the input, clear the
// input again, and handle each character. (This works with the iPad on-screen
// keyboard AND with a hardware keyboard.)
hiddenInput.addEventListener("input", () => {
  const typedText = hiddenInput.value;
  hiddenInput.value = "";
  if (!run || run.finished) return;
  // (sound.js) one typewriter click per key press. If several characters arrive at once,
  // for example a word from the iPad's suggestions, it is still just one click.
  if (typedText) {
    unlockAudio();
    playKeySound(typedText.slice(-1));
  }
  for (const ch of typedText.split("")) {
    if (!run.finished) typeCharacter(normaliseChar(ch));
  }
});

// Backspace and Delete are switched off. (Two listeners, because different
// keyboards report the key in different ways.)
hiddenInput.addEventListener("keydown", (event) => {
  if (event.key === "Backspace" || event.key === "Delete") event.preventDefault();
});
hiddenInput.addEventListener("beforeinput", (event) => {
  if (event.inputType && event.inputType.startsWith("delete")) event.preventDefault();
});

hiddenInput.addEventListener("focus", updateHint);
hiddenInput.addEventListener("blur", updateHint);
setInterval(updateHint, 500); // notices when you have paused for more than 5 seconds

// Changing the exercise length shows today's texts for that length.
$("length-switch").addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  setSetting("textLength", button.dataset.value);
  showHome();
});

$("random-btn").addEventListener("click", () => startText(getRandomText()));
$("back-btn").addEventListener("click", showHome);
$("restart-btn").addEventListener("click", () => startText(currentText));
$("again-btn").addEventListener("click", () => startText(currentText));
$("next-btn").addEventListener("click", () => startText(pickNextText()));
$("home-btn").addEventListener("click", showHome);
