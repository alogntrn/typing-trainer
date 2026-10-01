// typing.js - the typing trainer: daily texts, the typing engine, summary screen.
//
// Parts:
//   1. Choosing the texts (daily set, random text, next text)
//   2. The screens (home, summary)
//   3. The typing engine (what happens when you press a key)
//   4. Connecting the buttons

const TEXTS_PER_DAY = 5;
const PAUSE_LIMIT_MS = 5000; // a pause longer than 5 seconds does not count as typing time

// ===== 1. Choosing the texts =====

// The number of whole days since 1 January 1970, by your local calendar.
// It goes up by exactly 1 at midnight, so it is a handy "date as a number".
function dayNumber(date) {
  return Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86400000);
}

// Today's 5 texts: 5 neighbours from the list, and every new day the window
// slides on by 5. With 150 texts nothing repeats for 30 days; with the 20
// texts we have for now, the set repeats every 4 days.
function getTodaysTexts() {
  const start = (dayNumber(new Date()) * TEXTS_PER_DAY) % TEXTS.length;
  const todays = [];
  for (let i = 0; i < TEXTS_PER_DAY; i++) {
    todays.push(TEXTS[(start + i) % TEXTS.length]);
  }
  return todays;
}

// Any text from the whole collection (but not the one we are excluding).
function getRandomText(excludeTitle) {
  let pick;
  do {
    pick = TEXTS[Math.floor(Math.random() * TEXTS.length)];
  } while (pick.title === excludeTitle && TEXTS.length > 1);
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

  $("today-date").textContent = new Date().toLocaleDateString("en-GB", {
    weekday: "long", day: "numeric", month: "long", year: "numeric"
  });
  $("today-progress").textContent = doneCount + " of " + todays.length + " done today";

  const list = $("today-list");
  list.innerHTML = "";
  for (const text of todays) {
    const isDone = done.includes(text.title);
    const card = el("button", isDone ? "text-item done" : "text-item");
    card.appendChild(el("span", "item-title", text.title));
    card.appendChild(el("span", "item-meta", text.topic + " - " + countWords(text.text) + " words"));
    if (isDone) card.appendChild(el("span", "item-done", "✓ Done today"));
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
    text: textObj.text,
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
  buildTextDisplay();
  updateLiveStats();
  showView("typing");

  // Focus the hidden input so you can type straight away. This is called from a
  // tap/click handler, which is what lets the iPad show its on-screen keyboard.
  hiddenInput.value = "";
  hiddenInput.focus();
  updateHint();
}

// Put the text on the screen: one <span> per character, grouped into words.
function buildTextDisplay() {
  const box = $("text-box");
  box.innerHTML = "";
  box.scrollTop = 0;
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

$("random-btn").addEventListener("click", () => startText(getRandomText()));
$("back-btn").addEventListener("click", showHome);
$("restart-btn").addEventListener("click", () => startText(currentText));
$("again-btn").addEventListener("click", () => startText(currentText));
$("next-btn").addEventListener("click", () => startText(pickNextText()));
$("home-btn").addEventListener("click", showHome);
