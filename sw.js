// sw.js - the "service worker". It is a small script that the browser runs in the
// background, separate from the page. Its job here: keep a copy of the app's files
// on the device, so the app also opens when you have no internet.
//
// How it works: whenever the page asks for a file, we try the internet first.
// If that works, we hand over the fresh file AND keep a copy. If it fails (offline),
// we hand over the copy we kept. So you always get the newest version when online.

const CACHE_NAME = "type-and-dictate-cache";

// Files saved right after installing, so the very first offline visit works.
// IMPORTANT: when you add a new file to the project (like a chart library in step 3
// or words.js in step 4), add it to this list too.
const FILES = [
  "./",
  "index.html",
  "style.css",
  "app.js",
  "common.js",
  "sound.js",
  "typing.js",
  "drill.js",
  "stats.js",
  "analysis.js",
  "dictation.js",
  "storage.js",
  "chart.umd.js",
  "texts.js",
  "texts-medium.js",
  "texts-long.js",
  "fonts/fonts.css",
  "words.js",
  "dictation-texts.js",
  "manifest.webmanifest",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/apple-touch-icon.png"
];

// 1. Install: save the files above.
self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES)));
  self.skipWaiting(); // start working straight away
});

// 2. Activate: take control of the open pages.
self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// 3. Fetch: runs for every file the page asks for.
self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  // "no-cache" means: ask the server if the file changed, instead of trusting the
  // browser's own copy (GitHub Pages lets browsers reuse files for 10 minutes).
  // We skip this for the page itself, because it rarely changes.
  const options = request.mode === "navigate" ? undefined : { cache: "no-cache" };

  event.respondWith(
    fetch(request, options)
      .then((response) => {
        if (response.ok && response.type === "basic") {
          const copy = response.clone(); // a response can only be used once, so save a clone
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        }
        return response;
      })
      .catch(() =>
        // No internet: use the saved copy.
        caches.match(request).then((saved) => {
          if (saved) return saved;
          // The page itself, opened under an address we did not save: use index.html.
          if (request.mode === "navigate") return caches.match("index.html");
          return Response.error();
        })
      )
  );
});
