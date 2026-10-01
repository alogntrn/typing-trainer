# Type & Dictate

A small website for practising typing and dictation. Plain HTML, CSS and JavaScript:
no frameworks, no build tools. Everything you do is saved in your own browser.

## What it does
- **Typing**: five texts a day (chosen by the date), or a random text. Live WPM, accuracy
  and mistakes. After a text, "Practise my mistakes" builds a 50-word drill from the words
  you got wrong and from words with your weakest letters and letter pairs.
- **Dictation**: a voice (the browser's built-in speech) reads a text sentence by sentence;
  you type what you hear and your sentence is compared word by word. Three levels.
- **Look**: light and dark mode. The Theme button switches between Auto (follows your
  device), Light and Dark.
- **Stats**: typing time, average WPM and accuracy per day or week (chart), streak, best WPM,
  weakest letters, dictation results. Export and import your data as a JSON file.

## Use it
- Online: https://alogntrn.github.io/typing-trainer/
- On your computer: open `index.html` in Chrome. No server needed.
- On an iPad or iPhone: open the website in Safari, tap the Share button and choose
  "Add to Home Screen". It then opens like an app and also works offline.

## Files
| File | What it does |
|---|---|
| `index.html` | The page itself (all screens) |
| `style.css` | How it looks (light and dark mode) |
| `app.js` | Starts everything (tabs, first screen, offline support) |
| `common.js` | Small helpers used everywhere |
| `typing.js` | The typing trainer |
| `drill.js` | "Practise my mistakes" |
| `dictation.js` | The dictation trainer |
| `stats.js` | The Stats screen, chart, export and import |
| `analysis.js` | Works out streaks, best WPM, weakest letters from your runs |
| `storage.js` | Saving and loading your data in the browser |
| `texts.js` | The typing texts. Add your own here! |
| `words.js` | About 1000 common words used for the drills |
| `dictation-texts.js` | The dictation texts (easy, medium, hard). Add your own here! |
| `chart.umd.js` | Chart.js 4.5.1, saved locally so it works offline (MIT licence, chartjs.org) |
| `manifest.webmanifest`, `sw.js`, `icons/` | Make the site installable and usable offline |
| `.nojekyll` | Tells GitHub Pages to publish the files as they are |

## Adding your own texts
Open `texts.js` (typing) or `dictation-texts.js` (dictation), copy one of the blocks, and
change it. Every title must be unique. If you add a new file to the project, also add it
to the `FILES` list in `sw.js`, so it works offline.
