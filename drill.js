// drill.js - "Practise my mistakes".
//
// After a run, this builds a practice text of exactly 50 words (the brief says 40-60) from:
//   1. the words you typed wrong in this run (each one twice), and
//   2. common English words (words.js) that contain your weakest letters and
//      letter pairs, based on this run AND on your whole history.
// The practice text is typed like any other text, but is saved as a "drill".

const DRILL_LENGTH = 50;       // words in a drill
const MAX_WRONG_WORDS = 12;    // at most 12 of your wrong words, each used twice (so 24 of the 50)

// Step 1: work out WHAT to practise (without making the text yet).
// mistakes = the mistakes of the run that just finished.
function drillPlan(mistakes) {
  // --- the words you got wrong in this run ---
  const wrongCounts = {};   // "magazine" -> how many mistakes were in that word
  const spelling = {};      // "magazine" -> the word as written in the text
  for (const mistake of mistakes) {
    if (!/[a-z]/i.test(mistake.word)) continue; // skip numbers like 1494
    const key = mistake.word.toLowerCase();
    wrongCounts[key] = (wrongCounts[key] || 0) + 1;
    spelling[key] = mistake.word;
  }
  const wrongWords = shuffle(Object.keys(wrongCounts))          // random order among equals...
    .sort((a, b) => wrongCounts[b] - wrongCounts[a])            // ...but words with more mistakes first
    .slice(0, MAX_WRONG_WORDS)
    .map((key) => spelling[key]);

  // --- weakest letters: this run first, then your whole history ---
  const letters = [];
  const thisRunLetters = mostMissedLetters(mistakes).map(([letter]) => letter);
  const historyLetters = weakestLetters(loadData().runs, 3).map((item) => item.letter);
  for (const letter of thisRunLetters.slice(0, 3).concat(historyLetters)) {
    if (/^[a-z]$/.test(letter) && !letters.includes(letter)) letters.push(letter);
  }

  // --- weakest letter pairs: this run first, then your whole history ---
  const pairs = [];
  const thisRunPairs = weakestPairs([{ mistakeDetails: mistakes }], 3);
  const historyPairs = weakestPairs(loadData().runs, 3);
  for (const item of thisRunPairs.concat(historyPairs)) {
    if (!pairs.includes(item.pair)) pairs.push(item.pair);
  }

  return { wrongWords: wrongWords, letters: letters.slice(0, 5), pairs: pairs.slice(0, 5) };
}

// Is there anything to practise?
function drillPossible(plan) {
  return plan.wrongWords.length > 0 || plan.letters.length > 0 || plan.pairs.length > 0;
}

// How well does a word match your weak spots? Pairs count triple.
function weakScore(word, plan) {
  let score = 0;
  for (const pair of plan.pairs) if (word.includes(pair)) score += 3;
  for (const letter of plan.letters) if (word.includes(letter)) score += 1;
  return score;
}

// Step 2: make the text from the plan.
function buildDrillText(plan) {
  // the wrong words, twice each
  const tokens = [];
  for (const word of plan.wrongWords) tokens.push(word, word);

  // fill up to 50 words with words that contain your weak letters and pairs
  const needed = DRILL_LENGTH - tokens.length;
  const skip = new Set(plan.wrongWords.map((word) => word.toLowerCase()));
  const candidates = shuffle(WORDS.filter((word) => !skip.has(word) && weakScore(word, plan) > 0))
    .sort((a, b) => weakScore(b, plan) - weakScore(a, plan));
  // take from the best-matching words, but not always the very same ones
  const pool = shuffle(candidates.slice(0, Math.max(needed * 3, 30)));
  const filler = pool.slice(0, needed);
  // not enough matching words? top up with any common words
  if (filler.length < needed) {
    const others = shuffle(WORDS.filter((word) => !skip.has(word) && !filler.includes(word)));
    filler.push(...others.slice(0, needed - filler.length));
  }

  // mix it all up, and make sure the same word never stands twice in a row
  const mixed = shuffle(tokens.concat(filler));
  for (let i = 1; i < mixed.length; i++) {
    if (mixed[i].toLowerCase() !== mixed[i - 1].toLowerCase()) continue;
    const j = mixed.findIndex((word, k) => k > i && word.toLowerCase() !== mixed[i].toLowerCase());
    if (j !== -1) [mixed[i], mixed[j]] = [mixed[j], mixed[i]];
  }
  return mixed.join(" ");
}

// The practice text as an object that startText() understands.
function makeDrill(mistakes) {
  return {
    title: "Practice drill",
    topic: "Your mistakes",
    text: buildDrillText(drillPlan(mistakes)),
    type: "drill"
  };
}

// On the summary screen: switch the button on or off and say what the drill will contain.
function updatePractiseButton(mistakes) {
  const plan = drillPlan(mistakes);
  const button = $("practise-btn");
  const note = $("practise-note");
  button.disabled = !drillPossible(plan);

  if (button.disabled) {
    note.textContent = "Nothing to practise yet: no mistakes in this run and no weak spots in your history.";
    return;
  }
  const parts = [];
  if (plan.wrongWords.length > 0) {
    parts.push(plan.wrongWords.length + (plan.wrongWords.length === 1 ? " word" : " words") + " you got wrong");
  }
  const weak = plan.letters.concat(plan.pairs);
  if (weak.length > 0) parts.push("words with " + weak.join(", "));
  note.textContent = "The practice text (50 words) will have: " + parts.join(", plus ") + ".";
}

$("practise-btn").addEventListener("click", () => startText(makeDrill(run.mistakes)));
