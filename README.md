# Type & Dictate

A small website for practising typing and dictation. Plain HTML, CSS and JavaScript:
no frameworks, no build tools. Everything you do is saved in your own browser.

## Use it
- Online: see the link under "About" on the right of this GitHub page (added after publishing).
- On your computer: open `index.html` in Chrome. No server needed.
- On an iPad or iPhone: open the website in Safari, tap the Share button and choose
  "Add to Home Screen". It then opens like an app and also works offline.

## Files
| File | What it does |
|---|---|
| `index.html` | The page itself |
| `style.css` | How it looks (light and dark mode) |
| `app.js` | The typing trainer |
| `storage.js` | Saving and loading your data in the browser |
| `texts.js` | The typing texts. Add your own here! |
| `manifest.webmanifest`, `sw.js`, `icons/` | Make the site installable and usable offline |
| `.nojekyll` | Tells GitHub Pages to publish the files as they are |

## Adding your own texts
Open `texts.js`, copy one of the blocks, and change the `title`, `topic` and `text`.
Every title must be unique.
