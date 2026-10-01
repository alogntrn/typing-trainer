// dictation.js - the dictation trainer (English only).
// A voice reads one sentence at a time. You type what you hear and press Enter;
// then your sentence is compared with the original, word by word.
//
// Parts:
//   1. The list of texts (by level)
//   2. Voices and speech
//   3. Comparing what you typed with the original
//   4. Doing a dictation, sentence by sentence
//   5. The summary
//   6. Connecting the buttons

// ===== 1. The list of texts =====

let dictLevel = "easy";   // the level the list is showing

function wordsInText(text) {
  return text.sentences.reduce((sum, sentence) => sum + sentence.split(" ").length, 0);
}

function showDictationHome() {
  markSwitch("level-switch", dictLevel);

  // best accuracy so far for each text: { "My Morning": 92.5, ... }
  const best = {};
  for (const result of loadData().dictations) {
    best[result.title] = Math.max(best[result.title] || 0, result.accuracy);
  }

  const list = $("dictation-list");
  list.innerHTML = "";
  for (const text of DICTATION_TEXTS.filter((t) => t.level === dictLevel)) {
    const card = el("button", best[text.title] !== undefined ? "text-item done" : "text-item");
    card.appendChild(el("span", "item-title", text.title));
    card.appendChild(el("span", "item-meta", text.sentences.length + " sentences - " + wordsInText(text) + " words"));
    if (best[text.title] !== undefined) card.appendChild(el("span", "item-done", "Best: " + best[text.title] + "%"));
    card.addEventListener("click", () => startDictation(text));
    list.appendChild(card);
  }
  showView("dictation-home");
}

// ===== 2. Voices and speech =====
// Speech uses the browser's built-in "Web Speech API". Browsers only allow it to
// start after you tapped or clicked something, so nothing is ever read aloud by itself:
// every sentence starts from a button press (or the Enter key).

let englishVoices = [];   // the English voices installed on this device
let speaking = false;     // is the voice talking right now?
let speechId = 0;         // counts the sentences we have started (see speakSentence)

function isEnglish(voice) {
  return voice.lang.toLowerCase().replace("_", "-").startsWith("en");
}

// Silly or robotic voices (a Mac has a whole collection of them). Never the default.
const NOVELTY_VOICES = ["albert", "bad news", "bahh", "bells", "boing", "bubbles", "cellos",
  "deranged", "fred", "good news", "hysterical", "jester", "junior", "kathy", "organ",
  "princess", "ralph", "superstar", "trinoids", "whisper", "wobble", "zarvox"];

// Everyday voices that sound good on Mac, iPad and Windows.
const GOOD_VOICES = ["samantha", "daniel", "karen", "moira", "tessa", "serena", "fiona", "ava",
  "allison", "susan", "zoe", "evan", "nathan", "tom", "alex", "aaron", "nicky",
  "google uk", "google us", "microsoft"];

// Higher = sounds more natural. Apple's "Premium" and "Enhanced" voices are the best ones.
function voiceScore(voice) {
  const name = voice.name.toLowerCase();
  let score = 0;
  if (name.includes("premium")) score += 100;
  if (name.includes("enhanced")) score += 90;
  if (name.includes("natural") || name.includes("neural")) score += 80;
  if (name.includes("siri")) score += 70;
  if (GOOD_VOICES.some((good) => name.startsWith(good))) score += 20;
  if (name.includes("google")) score += 10;
  if (voice.localService) score += 5;
  if (NOVELTY_VOICES.some((silly) => name.startsWith(silly))) score -= 200;
  return score;
}

// Fill the voice dropdown. Chrome loads voices a moment after the page starts, and
// tells us with a "voiceschanged" event, so this can run more than once.
function loadVoices() {
  const select = $("voice-select");
  const note = $("voice-note");

  if (!("speechSynthesis" in window)) {
    note.textContent = "This browser cannot read text aloud, so dictation will not work here.";
    note.hidden = false;
    $("play-btn").disabled = true;
    $("replay-btn").disabled = true;
    return;
  }

  englishVoices = speechSynthesis.getVoices()
    .filter(isEnglish)
    .sort((a, b) => voiceScore(b) - voiceScore(a) || a.name.localeCompare(b.name));

  // keep what is chosen now; otherwise use the voice you chose last time;
  // otherwise the most natural one (the first, because the list is sorted)
  const wanted = select.value || getSetting("voiceURI", "");
  select.innerHTML = "";
  for (const voice of englishVoices) {
    const option = el("option", "", voice.name + " (" + voice.lang + ")");
    option.value = voice.voiceURI;
    select.appendChild(option);
  }
  if (englishVoices.some((voice) => voice.voiceURI === wanted)) select.value = wanted;

  if (englishVoices.length === 0) {
    note.textContent = "No English voices found yet. If this stays empty, add one in your system settings " +
      "(Mac and iPad: Accessibility > Spoken Content > Voices).";
    note.hidden = false;
  } else {
    note.hidden = true;
  }
}

function selectedVoice() {
  return englishVoices.find((voice) => voice.voiceURI === $("voice-select").value) || null;
}

function setSpeaking(isSpeaking) {
  speaking = isSpeaking;
  $("play-btn").textContent = isSpeaking ? "Stop" : "Play";
}

function stopSpeaking() {
  speechId++;               // so that the old sentence's "ended" signal is ignored
  if ("speechSynthesis" in window) speechSynthesis.cancel();
  setSpeaking(false);
}

function speakSentence(sentence) {
  if (!("speechSynthesis" in window)) return;
  stopSpeaking();
  const thisSentence = speechId;
  const utterance = new SpeechSynthesisUtterance(sentence);
  const voice = selectedVoice();
  if (voice) {
    utterance.voice = voice;
    utterance.lang = voice.lang;
  } else {
    utterance.lang = "en-GB";
  }
  utterance.rate = Number($("speed-range").value);
  utterance.onstart = () => { if (thisSentence === speechId) setSpeaking(true); };
  const done = () => { if (thisSentence === speechId) setSpeaking(false); };
  utterance.onend = done;
  utterance.onerror = done;
  speechSynthesis.speak(utterance);
}

// ===== 3. Comparing what you typed with the original =====

// "The  cat, sat." -> ["The", "cat,", "sat."]
function splitWords(text) {
  const clean = text.split("").map(normaliseChar).join("").trim(); // curly quotes -> straight
  return clean === "" ? [] : clean.split(/\s+/);
}

// Used when we ignore capitalisation and punctuation: "Don't!" -> "dont"
function normaliseWord(word) {
  return word.toLowerCase().replace(/[^a-z0-9]/g, "");
}

// Compare two sentences word by word. The result says, for every word, what happened:
//   ok      the word is right
//   wrong   you typed another word instead
//   missing you left the word out
//   extra   you typed a word that is not in the sentence
// It finds the longest run of words the two sentences have in common (the classic
// "longest common subsequence" idea) and treats the rest as mistakes.
function compareSentences(original, typed, ignore) {
  const same = ignore ? (a, b) => normaliseWord(a) === normaliseWord(b) : (a, b) => a === b;
  let orig = splitWords(original);
  let mine = splitWords(typed);
  if (ignore) { // loose punctuation on its own (like "-") is not a word
    orig = orig.filter((word) => normaliseWord(word) !== "");
    mine = mine.filter((word) => normaliseWord(word) !== "");
  }
  const n = orig.length;
  const m = mine.length;

  // table[i][j] = how many words the two sentences share from orig[i] and mine[j] onwards
  const table = [];
  for (let i = 0; i <= n; i++) table.push(new Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      table[i][j] = same(orig[i], mine[j])
        ? table[i + 1][j + 1] + 1
        : Math.max(table[i + 1][j], table[i][j + 1]);
    }
  }

  // Walk through both sentences. Between two matching words, the words that did not
  // match are paired up as "wrong"; leftovers are "missing" or "extra".
  const items = [];
  let gapOrig = [];
  let gapMine = [];
  const closeGap = () => {
    const pairs = Math.min(gapOrig.length, gapMine.length);
    for (let k = 0; k < pairs; k++) items.push({ kind: "wrong", orig: gapOrig[k], typed: gapMine[k] });
    for (let k = pairs; k < gapOrig.length; k++) items.push({ kind: "missing", orig: gapOrig[k] });
    for (let k = pairs; k < gapMine.length; k++) items.push({ kind: "extra", typed: gapMine[k] });
    gapOrig = [];
    gapMine = [];
  };
  let i = 0;
  let j = 0;
  while (i < n || j < m) {
    if (i < n && j < m && same(orig[i], mine[j])) {
      closeGap();
      items.push({ kind: "ok", orig: orig[i], typed: mine[j] });
      i++;
      j++;
    } else if (j >= m || (i < n && table[i + 1][j] >= table[i][j + 1])) {
      gapOrig.push(orig[i]);
      i++;
    } else {
      gapMine.push(mine[j]);
      j++;
    }
  }
  closeGap();

  const right = items.filter((item) => item.kind === "ok").length;
  // Missing words and extra words both count against you: the total is whichever
  // sentence is longer.
  return { items: items, right: right, total: Math.max(n, m), originalWords: n };
}

function percentOf(right, total) {
  return total === 0 ? 0 : Math.round((right / total) * 1000) / 10;
}

// ===== 4. Doing a dictation =====

let dictation = null;
// dictation = {
//   text:     the text being dictated,
//   index:    which sentence we are on (0 = the first),
//   state:    "idle" (nothing read yet), "answering" (you are typing) or "checked" (result shown),
//   results:  one comparison per sentence done so far,
//   startedAt, resultShownAt
// }

function startDictation(text) {
  stopSpeaking();   // also sets the button back to "Play"
  dictation = { text: text, index: 0, state: "idle", results: [], startedAt: Date.now(), resultShownAt: 0 };
  $("dict-title").textContent = text.title;
  $("dict-level").textContent = text.level.charAt(0).toUpperCase() + text.level.slice(1);

  // your remembered settings
  $("speed-range").value = getSetting("speed", 0.9);
  $("speed-label").textContent = Number($("speed-range").value).toFixed(1) + "x";
  $("ignore-check").checked = getSetting("ignoreCaseAndPunctuation", true);

  loadVoices();
  updateDictationScreen();
  showView("dictation");
}

// Make the screen match the current state.
function updateDictationScreen() {
  const input = $("dict-input");
  const sentenceCount = dictation.text.sentences.length;
  $("dict-progress").textContent = "Sentence " + (dictation.index + 1) + " of " + sentenceCount;

  if (dictation.state === "idle") {
    input.value = "";
    input.disabled = true;
    input.readOnly = false;
    $("dict-hint").textContent = "Press Play. The voice reads one sentence. Type it, then press Enter.";
    $("dict-result").hidden = true;
  } else if (dictation.state === "answering") {
    input.value = "";
    input.disabled = false;
    input.readOnly = false;
    $("dict-hint").textContent = "Type what you hear, then press Enter. You can replay the sentence as often as you like.";
    $("dict-result").hidden = true;
  } else { // checked
    input.disabled = false;
    input.readOnly = true;
    $("dict-hint").textContent = "";
    $("dict-result").hidden = false;
  }
}

// Read the current sentence aloud (the first press of Play also starts the typing).
function readCurrentSentence() {
  if (dictation.state === "idle") {
    dictation.state = "answering";
    updateDictationScreen();
  }
  speakSentence(dictation.text.sentences[dictation.index]);
  if (dictation.state === "answering") $("dict-input").focus();
}

// Add one word to a line of the result, with a space after it.
function addWord(line, text, className) {
  line.appendChild(el("span", className, text));
  line.appendChild(document.createTextNode(" "));
}

// Show the comparison: your sentence with the words marked, and the correct sentence.
function showComparison(comparison) {
  const typedLine = $("dict-typed");
  const correctLine = $("dict-correct");
  typedLine.innerHTML = "";
  correctLine.innerHTML = "";

  for (const item of comparison.items) {
    // your sentence
    if (item.kind === "ok") addWord(typedLine, item.typed, "word-ok");
    else if (item.kind === "wrong") addWord(typedLine, item.typed, "word-wrong");
    else if (item.kind === "extra") addWord(typedLine, item.typed, "word-extra");
    else addWord(typedLine, "___", "word-missing"); // a word you left out
    // the correct sentence (extra words are not part of it)
    if (item.kind === "ok") addWord(correctLine, item.orig, "word-ok");
    else if (item.kind !== "extra") addWord(correctLine, item.orig, "word-fix");
  }
  if (comparison.items.length === 0) typedLine.appendChild(el("span", "word-missing", "(nothing typed)"));

  $("dict-score").textContent = comparison.right + " of " + comparison.total + " words right (" +
    percentOf(comparison.right, comparison.total) + "%)";
}

// You pressed Enter: check the sentence.
function checkAnswer() {
  if (!dictation || dictation.state !== "answering") return;
  stopSpeaking();
  const sentence = dictation.text.sentences[dictation.index];
  const comparison = compareSentences(sentence, $("dict-input").value, $("ignore-check").checked);
  comparison.sentence = sentence;
  comparison.typedText = $("dict-input").value.trim();
  dictation.results[dictation.index] = comparison;
  dictation.state = "checked";
  dictation.resultShownAt = Date.now();

  showComparison(comparison);
  const isLast = dictation.index === dictation.text.sentences.length - 1;
  $("dict-next").textContent = isLast ? "Finish" : "Next sentence";
  updateDictationScreen();
  $("dict-next").focus();   // so that pressing Enter again goes to the next sentence
}

function nextSentence() {
  if (!dictation || dictation.state !== "checked") return;
  // If Enter is held down, the key repeats and would skip straight through: ignore that.
  if (Date.now() - dictation.resultShownAt < 400) return;

  if (dictation.index >= dictation.text.sentences.length - 1) {
    finishDictation();
    return;
  }
  dictation.index++;
  dictation.state = "answering";
  updateDictationScreen();
  readCurrentSentence();   // this runs because you pressed a button, so the browser allows speech
}

// ===== 5. The summary =====

function finishDictation() {
  stopSpeaking();
  const results = dictation.results;
  const right = results.reduce((sum, r) => sum + r.right, 0);
  const total = results.reduce((sum, r) => sum + r.total, 0);
  const accuracy = percentOf(right, total);

  addDictation({
    date: new Date(dictation.startedAt).toISOString(),
    title: dictation.text.title,
    level: dictation.text.level,
    accuracy: accuracy,
    wordsRight: right,
    words: total,
    sentences: results.length,
    strict: !$("ignore-check").checked   // true when capitalisation and punctuation counted
  });

  $("dsum-title").textContent = dictation.text.title + " (" + dictation.text.level + ")";
  $("dsum-accuracy").textContent = accuracy + "%";
  $("dsum-words").textContent = right + " / " + total;
  $("dsum-sentences").textContent = results.length;

  const list = $("dsum-list");
  list.innerHTML = "";
  results.forEach((result) => {
    const percent = percentOf(result.right, result.total);
    const item = el("li", "sentence-result");
    item.appendChild(el("span", percent === 100 ? "badge good" : "badge", percent + "%"));
    item.appendChild(el("span", "sentence-text", " " + result.sentence));
    if (percent < 100) {
      item.appendChild(el("span", "sentence-typed muted", "You typed: " + (result.typedText || "(nothing)")));
    }
    list.appendChild(item);
  });
  showView("dictation-summary");
}

// ===== 6. Connecting the buttons =====

$("level-switch").addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  dictLevel = button.dataset.value;
  showDictationHome();
});

$("play-btn").addEventListener("click", () => {
  if (speaking) stopSpeaking();
  else readCurrentSentence();
});
$("replay-btn").addEventListener("click", readCurrentSentence);

$("dict-input").addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey && !event.isComposing) {
    event.preventDefault();   // no new line: Enter means "check my sentence"
    checkAnswer();
  }
});
$("dict-next").addEventListener("click", nextSentence);
$("dict-back-btn").addEventListener("click", showDictationHome);

$("voice-select").addEventListener("change", () => setSetting("voiceURI", $("voice-select").value));

$("speed-range").addEventListener("input", () => {
  const speed = Number($("speed-range").value);
  $("speed-label").textContent = speed.toFixed(1) + "x";
  setSetting("speed", speed);
});

// Changing the option after a sentence was checked re-marks that sentence.
$("ignore-check").addEventListener("change", () => {
  setSetting("ignoreCaseAndPunctuation", $("ignore-check").checked);
  if (dictation && dictation.state === "checked") {
    const old = dictation.results[dictation.index];
    const comparison = compareSentences(old.sentence, old.typedText, $("ignore-check").checked);
    comparison.sentence = old.sentence;
    comparison.typedText = old.typedText;
    dictation.results[dictation.index] = comparison;
    showComparison(comparison);
  }
});

$("dsum-again").addEventListener("click", () => startDictation(dictation.text));
$("dsum-other").addEventListener("click", () => {
  const others = DICTATION_TEXTS.filter((t) => t.level === dictation.text.level && t !== dictation.text);
  startDictation(others.length > 0 ? others[Math.floor(Math.random() * others.length)] : dictation.text);
});
$("dsum-home").addEventListener("click", showDictationHome);

if ("speechSynthesis" in window) {
  speechSynthesis.onvoiceschanged = loadVoices;   // Chrome fills the voice list a little later
}
loadVoices();
