
// ❤️ CHANGE THESE SETTINGS ❤️

const SECRET_PASSWORD = "1108";

const PHOTO_URL =
  "https://i.postimg.cc/sg15sVJs/photo-2026-10-11-01-48-53.jpg";

// Leave blank for an automatic spoken message.
// Insert a direct public MP3/M4A audio URL
// here if you have your own recording.
const VOICE_URL = "https://files.catbox.moe/qyxvg6.ogg";

const VOICE_TEXT =
  "Hi Toks! I just want to remind you " +
  "that you are very special to me. " +
  "Thank you for being part of my life. " +
  "I love you so much!";

// -----------------------------
// PAGE NAVIGATION
// -----------------------------

function go(id) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
  window.scrollTo(0, 0);

  if (id === "puzzle" && !puzzleStarted) {
    shufflePuzzle();
    puzzleStarted = true;
  }
}

// -----------------------------
// PASSWORD
// -----------------------------

function unlock() {
  const entered = document.getElementById("password")
    .value.trim().toLowerCase();

  if (entered === SECRET_PASSWORD.toLowerCase()) {
    document.getElementById("error").textContent = "";
    burstHearts(18);
    go("welcome");
  } else {
    document.getElementById("error").textContent =
      "Wrong password, Toks! Try again ❤️";
  }
}

document.getElementById("password")
  .addEventListener("keydown", event => {
    if (event.key === "Enter") unlock();
  });

// -----------------------------
// PHOTO PUZZLE
// -----------------------------

let tiles = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let selected = null;
let puzzleStarted = false;
let solved = false;

document.documentElement.style.setProperty(
  "--puzzle-image", `url("${PHOTO_URL}")`
);

function shufflePuzzle() {
  tiles = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  // Fisher-Yates shuffle
  for (let i = tiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
  }

  // Avoid an already completed puzzle
  if (tiles.every((n, i) => n === i)) {
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
      "aria-label", `Piece ${piece + 1}, position ${index + 1}`
    );

    const x = (piece % 3) * 50;
    const y = Math.floor(piece / 3) * 50;

    tile.style.backgroundPosition = `${x}% ${y}%`;

    if (selected === index) {
      tile.classList.add("selected");
    }

    tile.addEventListener("click", () => {
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
        "You did it, Toks! Iloveyou ❤️";

      document.getElementById("puzzleNext")
        .classList.remove("hidden");

      burstHearts(25);
    }
  }

  renderPuzzle();
}

// -----------------------------
// VOICE MESSAGE
// -----------------------------

function stopVoice() {
  const audio = document.getElementById("recording");
  audio.pause();
  audio.currentTime = 0;

  if ("speechSynthesis" in window) {
    speechSynthesis.cancel();
  }

  document.getElementById("voiceStatus")
    .textContent = "A message from my heart.";
}

function playVoice() {
  stopVoice();

  const status = document.getElementById("voiceStatus");
  const audio = document.getElementById("recording");

  if (VOICE_URL.trim() !== "") {
    audio.src = VOICE_URL;
    status.textContent = "Playing your recording...";

    audio.play().catch(() => {
      status.textContent =
        "Can't play the audio. Check your audio link.";
    });
    return;
  }

  if ("speechSynthesis" in window) {
    const speech = new SpeechSynthesisUtterance(VOICE_TEXT);

    speech.lang = "en-US";
    speech.rate = 0.88;
    speech.pitch = 1.1;

    speechSynthesis.speak(speech);
    status.textContent = "Playing your love message...";
  } else {
    status.textContent =
      "Voice playback isn't supported on this browser.";
  }
}

// -----------------------------
// LOVE LETTER
// -----------------------------

function openLetter() {
  const envelope = document.getElementById("envelope");
  envelope.classList.add("open");

  setTimeout(() => {
    document.getElementById("loveNote")
      .classList.remove("hidden");

    document.getElementById("loveNote")
      .scrollIntoView({ behavior: "smooth" });
  }, 600);
}

// -----------------------------
// FINAL GIFT
// -----------------------------

function revealGift() {
  const gift = document.getElementById("giftBox");

  if (gift.classList.contains("open")) return;

  gift.classList.add("open");

  setTimeout(() => {
    document.getElementById("finalMessage")
      .classList.remove("hidden");

    document.getElementById("finalMessage")
      .scrollIntoView({ behavior: "smooth" });

    burstHearts(55);
  }, 700);
}

// -----------------------------
// FLOATING HEARTS
// -----------------------------

function burstHearts(count) {
  const container = document.getElementById("hearts");

  for (let i = 0; i < count; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = ["♥", "❤", "💕"][i % 3];

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize =
      (14 + Math.random() * 24) + "px";
    heart.style.animationDelay =
      (Math.random() * 2) + "s";
    heart.style.animationDuration =
      (3 + Math.random() * 3) + "s";

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 6500);
  }
}

// -----------------------------
// RESTART
// -----------------------------

function restart() {
  stopVoice();

  document.getElementById("password").value = "";
  document.getElementById("envelope").classList.remove("open");
  document.getElementById("loveNote").classList.add("hidden");
  document.getElementById("giftBox").classList.remove("open");
  document.getElementById("finalMessage").classList.add("hidden");

  puzzleStarted = false;
  go("lock");
}

// Soft background hearts
setInterval(() => burstHearts(1), 2200);
