// analysis.js - works out facts from your saved runs.
// Used by the stats page and by "Practise my mistakes".
//
// A saved run (see finishRun in typing.js) looks like this:
//   { date, type, title, durationSec, wpm, accuracy, mistakes,
//     mistakeDetails: [{ expected, typed, word, before }],
//     charCounts: { a: 31, b: 4, ... } }      <- how often each character came up

// The day a run happened, as "2026-10-01" (local time).
function runDay(run) {
  return dateKey(new Date(run.date));
}

// Total seconds of typing on one day ("2026-10-01").
function secondsTypedOn(day, runs) {
  let total = 0;
  for (const run of runs) {
    if (runDay(run) === day) total += run.durationSec;
  }
  return total;
}

// Days in a row (up to today) with at least one typing run. If you have not
// typed yet today, the streak is not broken: it counts up to yesterday.
function currentStreak(runs) {
  const days = new Set(runs.map(runDay));
  const day = new Date();
  if (!days.has(dateKey(day))) day.setDate(day.getDate() - 1);
  let streak = 0;
  while (days.has(dateKey(day))) {
    streak++;
    day.setDate(day.getDate() - 1);
  }
  return streak;
}

// The run with the highest WPM (or null when there are no runs).
function bestWpmRun(runs) {
  let best = null;
  for (const run of runs) {
    if (!best || run.wpm > best.wpm) best = run;
  }
  return best;
}

// ----- Weak spots -----

// A letter needs at least this many tries before we judge it, otherwise one
// slip on a rare letter like "q" would make it your "weakest" letter.
const MIN_LETTER_ATTEMPTS = 10;

// The letters a-z with the highest share of lost letters, e.g.
// [{ letter: "k", attempts: 40, mistakes: 6, rate: 0.15 }, ...]
function weakestLetters(runs, count) {
  const stats = {};
  const entry = (letter) => (stats[letter] = stats[letter] || { letter: letter, attempts: 0, mistakes: 0 });

  for (const run of runs) {
    for (const [char, times] of Object.entries(run.charCounts || {})) {
      if (/^[a-z]$/.test(char)) entry(char).attempts += times;
    }
    for (const mistake of run.mistakeDetails || []) {
      const letter = mistake.expected.toLowerCase();
      if (/^[a-z]$/.test(letter)) entry(letter).mistakes++;
    }
  }

  return Object.values(stats)
    .filter((s) => s.attempts >= MIN_LETTER_ATTEMPTS && s.mistakes > 0)
    .map((s) => ({ ...s, rate: s.mistakes / s.attempts }))
    .sort((a, b) => b.rate - a.rate || b.mistakes - a.mistakes)
    .slice(0, count);
}

// The letter pairs where you lose the second letter most often, e.g.
// [{ pair: "th", mistakes: 5 }, ...]. The pair is "the character before" plus
// "the character you lost", so it only counts two letters next to each other.
function weakestPairs(runs, count) {
  const counts = {};
  for (const run of runs) {
    for (const mistake of run.mistakeDetails || []) {
      const pair = ((mistake.before || "") + mistake.expected).toLowerCase();
      if (/^[a-z]{2}$/.test(pair)) counts[pair] = (counts[pair] || 0) + 1;
    }
  }
  return Object.entries(counts)
    .map(([pair, mistakes]) => ({ pair: pair, mistakes: mistakes }))
    .sort((a, b) => b.mistakes - a.mistakes)
    .slice(0, count);
}
