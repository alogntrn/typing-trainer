// app.js - starts everything. It is loaded last, after all the other files.
//
// The other files:
//   common.js     small helpers
//   typing.js     the typing trainer
//   drill.js      "Practise my mistakes"
//   dictation.js  the dictation trainer
//   stats.js      the Stats screen (with the chart)
//   analysis.js   works out streaks, weakest letters, ... from your saved runs
//   storage.js    saving and loading
//   texts.js, words.js, dictation-texts.js    the texts and words themselves

// The three tabs at the top.
$("tab-typing").addEventListener("click", showHome);
$("tab-dictation").addEventListener("click", showDictationHome);
$("tab-stats").addEventListener("click", showStats);

// First screen.
showHome();

// Offline support: register the service worker (sw.js). This only works on a real
// website (http/https), not when you open index.html straight from your disk, so we
// skip it there. The app works the same either way.
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  navigator.serviceWorker.register("sw.js").catch((error) => {
    console.warn("Offline mode is not available:", error); // the app still works online
  });
}
