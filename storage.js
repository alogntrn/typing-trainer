// storage.js - saving and loading data in the browser (localStorage).
//
// Everything the app remembers lives in ONE object, saved as one piece of
// JSON text under one key. That also makes the export/import buttons easy
// later: exporting is just "save this object as a file".

const STORAGE_KEY = "typeAndDictateData";

// What the data looks like on your very first visit.
function emptyData() {
  return {
    runs: [],        // every typing run (texts and drills)
    dictations: [],  // dictation results (step 5)
    settings: {}     // things like your chosen voice (step 5)
  };
}

function loadData() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && Array.isArray(saved.runs)) {
      return { ...emptyData(), ...saved }; // fill in anything that is missing
    }
  } catch (error) {
    // Storage is blocked or the saved text is broken: start fresh instead.
  }
  return emptyData();
}

function saveData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.warn("Could not save your data:", error);
  }
}

function addRun(run) {
  const data = loadData();
  data.runs.push(run);
  saveData(data);
}

// A date as text like "2026-10-01", using YOUR local time zone.
// (toISOString() would use UTC, which can be a different day late at night.)
function dateKey(date) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return date.getFullYear() + "-" + month + "-" + day;
}
