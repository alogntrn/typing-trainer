// sound.js - the typewriter sound for every key you type, and the volume control.
//
// The clicks are not recordings: the browser builds them itself when you start typing
// (with the "Web Audio" feature), so there are no sound files to download and it also
// works offline. Each click mixes a sharp hit, a short metallic ring, a soft thump of
// the machine's body and a second, softer tick when the key comes back up.
//
// Parts:
//   1. Volume (remembered on this device)
//   2. Making the click sounds
//   3. Playing them
//   4. The speaker button and its slider

// ===== 1. Volume =====

const VOLUME_KEY = "typeAndDictateVolume"; // saved on this device only, like the theme
let volume = 0.5;          // 0 = off, 1 = loudest
let volumeBeforeMute = 0.5; // so that "unmute" goes back to where you were

try {
  const saved = parseFloat(localStorage.getItem(VOLUME_KEY));
  if (!isNaN(saved) && saved >= 0 && saved <= 1) volume = saved;
} catch (error) {}

function setVolume(newVolume) {
  volume = Math.min(1, Math.max(0, newVolume));
  if (volume > 0) volumeBeforeMute = volume;
  try { localStorage.setItem(VOLUME_KEY, String(volume)); } catch (error) {}
  applyVolume();
  showVolume();
}

// Our ears hear loudness on a curve, so the slider uses volume x volume:
// halfway on the slider then also sounds about half as loud.
function applyVolume() {
  if (masterGain) masterGain.gain.value = volume * volume;
}

// ===== 2. Making the click sounds =====

let audio = null;       // the browser's sound engine (an "AudioContext")
let masterGain = null;  // one volume knob that every click goes through
let keySounds = [];     // a few slightly different clicks for letters
let spaceSound = null;  // a deeper thud for the space bar

// Build one click as a list of numbers (the shape of the sound wave).
function makeKeySound(kind) {
  const rate = audio.sampleRate;               // numbers per second, usually 44100 or 48000
  const length = Math.floor(rate * 0.09);      // 90 milliseconds
  const buffer = audio.createBuffer(1, length, rate);
  const wave = buffer.getChannelData(0);

  const isSpace = kind === "space";
  const vary = () => 0.9 + Math.random() * 0.2; // up to 10% higher or lower, for variety
  const ring1 = (isSpace ? 900 : 1800) * vary(); // metallic ring, in hertz
  const ring2 = (isSpace ? 1700 : 3100) * vary();
  const thump = isSpace ? 95 : 150;               // the body of the machine
  const secondTick = (isSpace ? 0.03 : 0.016) + Math.random() * 0.008; // the key coming back

  let smoothNoise = 0;
  let peak = 0;
  for (let i = 0; i < length; i++) {
    const t = i / rate; // time in seconds
    // softened random noise sounds like a hit, rather than a hiss
    smoothNoise += 0.45 * ((Math.random() * 2 - 1) - smoothNoise);
    let sample = 1.6 * smoothNoise * Math.exp(-t / 0.0025);                     // sharp hit
    sample += 0.35 * Math.sin(2 * Math.PI * ring1 * t) * Math.exp(-t / 0.012);   // metal ring
    sample += 0.2 * Math.sin(2 * Math.PI * ring2 * t) * Math.exp(-t / 0.007);
    sample += (isSpace ? 0.8 : 0.5) * Math.sin(2 * Math.PI * thump * t) * Math.exp(-t / 0.025);
    if (t > secondTick) sample += 0.5 * smoothNoise * Math.exp(-(t - secondTick) / 0.002);
    wave[i] = sample;
    peak = Math.max(peak, Math.abs(sample));
  }
  // every click equally loud, whatever the random parts did, and a gentle fade over the
  // last 10 milliseconds, so the sound never stops abruptly (that would crackle)
  const fadeLength = Math.floor(rate * 0.01);
  for (let i = 0; i < length; i++) {
    const fade = Math.min(1, (length - 1 - i) / fadeLength);
    wave[i] = (wave[i] / peak) * 0.9 * fade;
  }
  return buffer;
}

// Browsers only allow sound after you have clicked, tapped or pressed a key, so the
// sound engine is started the first time you do one of those (see typing.js).
function unlockAudio() {
  const AudioEngine = window.AudioContext || window.webkitAudioContext;
  if (!AudioEngine) return; // a very old browser: no sound, everything else still works
  if (!audio) {
    audio = new AudioEngine();
    masterGain = audio.createGain();
    masterGain.connect(audio.destination);
    applyVolume();
    keySounds = [makeKeySound("key"), makeKeySound("key"), makeKeySound("key"), makeKeySound("key")];
    spaceSound = makeKeySound("space");
    // Older iPads only switch sound on after something has played: play a silent moment.
    const silence = audio.createBufferSource();
    silence.buffer = audio.createBuffer(1, 1, 22050);
    silence.connect(audio.destination);
    silence.start(0);
  }
  if (audio.state === "suspended") audio.resume();
}

// ===== 3. Playing them =====

// One click for one typed character.
function playKeySound(character) {
  if (!audio || volume === 0) return;
  if (audio.state === "suspended") audio.resume();
  const source = audio.createBufferSource();
  source.buffer = character === " "
    ? spaceSound
    : keySounds[Math.floor(Math.random() * keySounds.length)];
  source.playbackRate.value = 0.94 + Math.random() * 0.12; // never exactly the same twice
  source.connect(masterGain);
  source.start();
}

// ===== 4. The speaker button and its slider =====
// With a mouse: hover over the speaker to see the slider, click the speaker to mute.
// On a touch screen (no hover): tap the speaker to open or close the slider.

const volumeBox = $("volume");
const volumeButton = $("volume-btn");
const volumeRange = $("volume-range");
const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

function showVolume() {
  const percent = Math.round(volume * 100);
  volumeRange.value = percent;
  $("volume-value").textContent = volume === 0 ? "off" : percent + "%";
  // the icon: crossed out when off, one sound wave when quiet, two when louder
  volumeBox.dataset.level = volume === 0 ? "0" : volume < 0.5 ? "1" : "2";
  volumeButton.setAttribute("aria-label", volume === 0
    ? "Typing sound is off. Click to turn it on."
    : "Typing sound at " + percent + " percent. Click to mute.");
}

let lastPreview = 0;
volumeRange.addEventListener("input", () => {
  unlockAudio();
  setVolume(volumeRange.value / 100);
  // let you hear the new volume, but not a whole burst of clicks while you drag
  if (Date.now() - lastPreview > 120) {
    playKeySound("a");
    lastPreview = Date.now();
  }
});

volumeButton.addEventListener("click", () => {
  if (canHover) {
    unlockAudio();
    if (volume === 0) {
      setVolume(volumeBeforeMute || 0.5);
      playKeySound("a");
    } else {
      setVolume(0);
    }
  } else {
    volumeBox.classList.toggle("open");
  }
});

// A tap anywhere else closes the slider again (touch screens).
document.addEventListener("click", (event) => {
  if (!volumeBox.contains(event.target)) volumeBox.classList.remove("open");
});

showVolume();
