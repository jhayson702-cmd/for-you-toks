
// ❤️ FOR YOU, TOKS — WORKING JAVASCRIPT ❤️

// PERSONAL SETTINGS
const SECRET_PASSWORD = "1108";

const PHOTO_URL =
  "https://i.postimg.cc/sg15sVJs/photo-2026-10-11-01-48-53.jpg";

const VOICE_URL =
  "https://files.catbox.moe/qyxvg6.ogg";

const VOICE_TEXT =
  "Hi Toks! I just want to remind you " +
  "that you are very special to me. " +
  "Thank you for being part of my life. " +
  "I love you so much!";

// PAGE NAVIGATION
let puzzleStarted = false;
let tiles = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let selected = null;
let solved = false;

function go(id) {
  const destination = document.getElementById(id);
  if (!destination) return;

  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  destination.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (id === "puzzle" && !puzzleStarted) {
    puzzleStarted = true;
    shufflePuzzle();
  }
}

// PASSWORD
function unlock() {
  const input = document.getElementById("password");
  const error = document.getElementById("error");

  const entered = input.value.trim();

  if (entered === SECRET_PASSWORD) {
    error.textContent = "";
    burstHearts(20);
    go("welcome");
  } else {
    error.textContent =
      "Wrong password, Toks! Try again ❤️";
  }
}

// PHOTO PUZZLE
document.documentElement.style.setProperty(
  "--puzzle-image",
  'url("' + PHOTO_URL + '")'
);

function shufflePuzzle() {
  tiles = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  for (let i = tiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
  }

  if (tiles.every((piece, i) => piece === i)) {
    [tiles[0], tiles[1]] = [tiles[1], tiles[0]];
  }

  selected = null;
  solved = false;

  document.getElementById("puzzleNext")
    .classList.add("hidden");

  document.getElementById("puzzleStatus")
    .textContent = "Select two picture pieces ❤️";

  renderPuzzle();
}

function renderPuzzle() {
  const board = document.getElementById("board");
  board.innerHTML = "";

  tiles.forEach((piece, index) => {
    const tile = document.createElement("button");

    tile.className = "tile";
    tile.type = "button";

    tile.setAttribute(
      "aria-label",
      "Puzzle piece " + (piece + 1)
    );

    const x = (piece % 3) * 50;
    const y = Math.floor(piece / 3) * 50;

    tile.style.backgroundPosition =
      x + "% " + y + "%";

    if (selected === index) {
      tile.classList.add("selected");
    }

    tile.addEventListener("click", function() {
      chooseTile(index);
    });

    board.appendChild(tile);
  });
}

function chooseTile(index) {
  if (solved) return;

  if (selected === null) {
    selected = index;
  } else if (selected === index) {
    selected = null;
  } else {
    [tiles[selected], tiles[index]] =
      [tiles[index], tiles[selected]];

    selected = null;

    if (tiles.every((piece, i) => piece === i)) {
      solved = true;

      document.getElementById("puzzleStatus")
        .textContent =
        "You did it, Toks! I love you ❤️";

      document.getElementById("puzzleNext")
        .classList.remove("hidden");

      burstHearts(25);
    }
  }

  renderPuzzle();
}

// VOICE MESSAGE
function stopVoice() {
  const audio = document.getElementById("recording");

  audio.pause();
  audio.currentTime = 0;

  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

  document.getElementById("voiceStatus")
    .textContent = "A message from my heart.";
}

function playVoice() {
  stopVoice();

  const audio = document.getElementById("recording");
  const status = document.getElementById("voiceStatus");

  if (VOICE_URL.trim() !== "") {
    audio.src = VOICE_URL;
    audio.load();

    status.textContent = "Loading your message...";

    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise.then(() => {
        status.textContent =
          "Playing your voice message ❤️";
      }).catch(() => {
        status.textContent =
          "Audio unavailable. Check the file format or link.";
      });
    }

    return;
  }

  if ("speechSynthesis" in window) {
    const speech =
      new SpeechSynthesisUtterance(VOICE_TEXT);

    speech.lang = "en-US";
    speech.rate = 0.9;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

    status.textContent =
      "Playing your love message ❤️";
  } else {
    status.textContent =
      "Speech playback isn't supported.";
  }
}

// LOVE LETTER
function openLetter() {
  const envelope = document.getElementById("envelope");
  const note = document.getElementById("loveNote");

  envelope.classList.add("open");

  setTimeout(() => {
    note.classList.remove("hidden");
    note.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    burstHearts(12);
  }, 650);
}

// FINAL GIFT
function revealGift() {
  const gift = document.getElementById("giftBox");
  const message = document.getElementById("finalMessage");

  if (gift.classList.contains("open")) return;

  gift.classList.add("open");

  setTimeout(() => {
    message.classList.remove("hidden");

    message.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    burstHearts(55);
  }, 800);
}

// FLOATING HEARTS
function burstHearts(count) {
  const container = document.getElementById("hearts");
  if (!container) return;

  for (let i = 0; i < count; i++) {
    const heart = document.createElement("span");

    heart.className = "floating-heart";
    heart.textContent = ["♥", "❤", "💕"][i % 3];

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize =
      (14 + Math.random() * 22) + "px";
    heart.style.animationDelay =
      Math.random() * 2 + "s";
    heart.style.animationDuration =
      (3 + Math.random() * 3) + "s";

    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6500);
  }
}

// REPLAY SURPRISE
function restart() {
  stopVoice();

  document.getElementById("password").value = "";
  document.getElementById("error").textContent = "";

  document.getElementById("envelope")
    .classList.remove("open");

  document.getElementById("loveNote")
    .classList.add("hidden");

  document.getElementById("giftBox")
    .classList.remove("open");

  document.getElementById("finalMessage")
    .classList.add("hidden");

  puzzleStarted = false;
  selected = null;
  solved = false;

  go("lock");
}

// INITIAL SETUP
function initialize() {
  const input = document.getElementById("password");

  if (input) {
    input.addEventListener("keydown", event => {
      if (event.key === "Enter") {
        unlock();
      }
    });
  }

  const audio = document.getElementById("recording");

  if (audio) {
    audio.addEventListener("ended", () => {
      document.getElementById("voiceStatus")
        .textContent =
        "Message finished. I love you, Toks! ❤️";
    });

    audio.addEventListener("error", () => {
      document.getElementById("voiceStatus")
        .textContent =
        "Cannot play this audio. Try an MP3 or M4A file.";
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded", initialize
  );
} else {
  initialize();
}

// BACKGROUND HEARTS
setInterval(() => {
  if (!document.hidden) {
    burstHearts(1);
  }
}, 2200);
