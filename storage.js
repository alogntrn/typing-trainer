// storage.js - saving and loading data in the browser (localStorage).
//
// Everything the app remembers lives in ONE object, saved as one piece of
// JSON text under one key. That also makes the export/import buttons easy:
// exporting is just "save this object as a file".
//
//   {
//     runs:       [ every typing run: texts and drills ],
//     dictations: [ every finished dictation ],
//     settings:   { voice, speed, ... }
//   }

const STORAGE_KEY = "typeAndDictateData";

// What the data looks like on your very first visit.
function emptyData() {
  return {
    runs: [],        // every typing run (type "text" or "drill")
    dictations: [],  // dictation results: { date, title, level, accuracy, ... }
    settings: {}     // things like your chosen voice
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
    alert("Your data could not be saved. The browser storage may be full or switched off. " +
          "Please use Stats > Export data to keep a backup.");
  }
}

function addRun(run) {
  const data = loadData();
  data.runs.push(run);
  saveData(data);
}

function addDictation(result) {
  const data = loadData();
  data.dictations.push(result);
  saveData(data);
}

// One remembered setting, e.g. getSetting("speed", 0.9).
function getSetting(name, fallback) {
  const value = loadData().settings[name];
  return value === undefined ? fallback : value;
}

function setSetting(name, value) {
  const data = loadData();
  data.settings[name] = value;
  saveData(data);
}

// A date as text like "2026-10-01", using YOUR local time zone.
// (toISOString() would use UTC, which can be a different day late at night.)
function dateKey(date) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return date.getFullYear() + "-" + month + "-" + day;
}

// ----- Export and import -----

// How much space your data takes, e.g. "12 KB". (Browsers allow about 5000 KB.)
function dataSizeText() {
  const bytes = JSON.stringify(loadData()).length;
  return bytes < 1024 ? bytes + " bytes" : Math.round(bytes / 1024) + " KB";
}

// Merge a backup file's data into the data on this device. Nothing is deleted.
// A run or dictation counts as "already here" when it has the same start time,
// title and type. Returns how many new runs and dictations were added.
// Throws an Error with a readable message when the file is not a backup.
function mergeImportedData(imported) {
  if (!imported || typeof imported !== "object" || !Array.isArray(imported.runs)) {
    throw new Error("This file does not look like a Type & Dictate backup.");
  }
  const data = loadData();

  const runKey = (run) => run.date + "|" + run.title + "|" + (run.type || "text");
  const dictKey = (item) => item.date + "|" + item.title;

  const haveRuns = new Set(data.runs.map(runKey));
  let newRuns = 0;
  for (const run of imported.runs) {
    // skip anything that is clearly not a run
    if (!run || typeof run.date !== "string" || typeof run.title !== "string") continue;
    if (isNaN(new Date(run.date))) continue;
    if (haveRuns.has(runKey(run))) continue;
    data.runs.push(run);
    haveRuns.add(runKey(run));
    newRuns++;
  }

  const haveDicts = new Set(data.dictations.map(dictKey));
  let newDictations = 0;
  for (const item of Array.isArray(imported.dictations) ? imported.dictations : []) {
    if (!item || typeof item.date !== "string" || typeof item.title !== "string") continue;
    if (isNaN(new Date(item.date))) continue;
    if (haveDicts.has(dictKey(item))) continue;
    data.dictations.push(item);
    haveDicts.add(dictKey(item));
    newDictations++;
  }

  // Settings from the file only fill gaps; your current settings win.
  if (imported.settings && typeof imported.settings === "object") {
    data.settings = { ...imported.settings, ...data.settings };
  }

  data.runs.sort((a, b) => a.date.localeCompare(b.date));
  data.dictations.sort((a, b) => a.date.localeCompare(b.date));
  saveData(data);
  return { newRuns: newRuns, newDictations: newDictations };
}
