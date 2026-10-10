
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');

* { box-sizing: border-box; }

body {
  margin: 0;
  min-height: 100vh;
  background: radial-gradient(
    ellipse at top, #35101f, #0b080e 75%
  );
  color: #fff0f3;
  font-family: 'DM Sans', sans-serif;
  overflow-x: hidden;
}

.app {
  max-width: 440px;
  margin: auto;
  min-height: 100dvh;
  padding: 26px 22px 35px;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
}

.top-heart {
  text-align: center;
  font-size: 26px;
  color: #ff4b76;
  animation: heartbeat 1.6s infinite;
}

.page {
  display: none;
  text-align: center;
  flex: 1;
  padding-top: 24px;
  animation: fadeIn .6s ease;
}

.page.active { display: block; }
.hidden { display: none !important; }

h1, h2 {
  font-family: 'Playfair Display', serif;
}

h1 {
  color: #ff6689;
  font-size: clamp(29px, 8vw, 43px);
  line-height: 1.2;
  margin: 15px 0;
}

h2 { font-size: 25px; }

p {
  line-height: 1.8;
  color: #e6bfc9;
  font-size: 15px;
}

.emoji {
  font-size: 54px;
  margin: 20px 0;
  animation: float 3s ease-in-out infinite;
}

.panel, .love-note {
  background: rgba(77, 23, 43, .38);
  border: 1px solid #713046;
  border-radius: 22px;
  padding: 25px 19px;
  margin: 30px 0;
  box-shadow: 0 12px 45px #0004;
}

input {
  width: 100%;
  background: #140b13;
  border: 1px solid #86425a;
  outline: none;
  color: white;
  padding: 16px;
  border-radius: 13px;
  text-align: center;
  font-size: 16px;
  margin: 12px 0;
}

input:focus { border-color: #ff648d; }

button {
  display: block;
  width: 100%;
  margin: 16px 0;
  padding: 15px 12px;
  border: 0;
  border-radius: 40px;
  background: linear-gradient(135deg, #d92f60, #97203f);
  color: white;
  font: 700 15px 'DM Sans', sans-serif;
  cursor: pointer;
  box-shadow: 0 7px 22px #bf285244;
}

button:active { transform: scale(.97); }

button.secondary {
  background: transparent;
  border: 1px solid #89425b;
  box-shadow: none;
  color: #ffb6c8;
}

#error, .status {
  display: block;
  color: #ffa2b9;
  min-height: 23px;
}

.hint {
  font-size: 13px;
  color: #bf95a3;
}

footer {
  text-align: center;
  margin-top: 28px;
  font-size: 11px;
  color: #946d7b;
}

/* PHOTO PUZZLE */
.board {
  width: min(100%, 315px);
  aspect-ratio: 1;
  margin: 25px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  background: #5b243c;
  border: 5px solid #5b243c;
  border-radius: 15px;
  overflow: hidden;
}

.tile {
  border: 0;
  border-radius: 3px;
  margin: 0;
  width: 100%;
  height: 100%;
  background-image: var(--puzzle-image);
  background-size: 300% 300%;
  box-shadow: none;
  position: relative;
}

.tile.selected {
  outline: 4px solid #fff;
  outline-offset: -4px;
  filter: brightness(1.25);
}

.tile:focus-visible {
  outline: 3px solid white;
}

/* AUDIO */
.sound {
  font-size: 38px;
  color: #ff7e9f;
  letter-spacing: 9px;
  margin-bottom: 25px;
  animation: heartbeat 1.5s infinite;
}

/* ENVELOPE */
.envelope {
  width: 230px;
  height: 155px;
  margin: 55px auto 35px;
  position: relative;
  background: #a92b4d;
  border-radius: 4px 4px 12px 12px;
  box-shadow: 0 20px 45px #0007;
  cursor: pointer;
  transition: transform .6s;
}

.envelope:before {
  content: "";
  position: absolute;
  inset: 0;
  background: #d24569;
  clip-path: polygon(0 0, 50% 58%, 100% 0);
  z-index: 2;
}

.envelope .flap {
  position: absolute;
  inset: 0;
  background: #eb5b7b;
  clip-path: polygon(0 0, 100% 0, 50% 58%);
  z-index: 3;
  transform-origin: top;
  transition: transform .7s;
}

.envelope .seal {
  position: absolute;
  left: 50%;
  top: 53%;
  transform: translate(-50%, -50%);
  font-size: 32px;
  z-index: 4;
  color: #fff1f4;
}

.envelope.open .flap {
  transform: rotateX(180deg);
}

.envelope.open .seal { opacity: 0; }

.love-note {
  text-align: left;
  animation: fadeIn 1s;
}

.love-note h2 { color: #ff8ca8; }

.love-note p {
  color: #ffe0e7;
  font-size: 15px;
}

.signature {
  text-align: right;
  font-style: italic;
}

/* GIFT BOX */
.gift-box {
  width: 155px;
  height: 160px;
  margin: 60px auto 45px;
  position: relative;
  cursor: pointer;
  animation: float 2.5s infinite;
}

.gift-body {
  position: absolute;
  bottom: 0;
  left: 8px;
  width: 140px;
  height: 125px;
  display: grid;
  place-items: center;
  background: linear-gradient(120deg, #991e41, #ef4c78);
  border-radius: 5px;
  font-size: 48px;
  color: #ffcfda;
}

.gift-body:before {
  content: "";
  position: absolute;
  height: 100%;
  width: 24px;
  background: #ffd1aa;
  opacity: .9;
}

.gift-lid {
  position: absolute;
  top: 23px;
  left: 0;
  width: 155px;
  height: 35px;
  background: #ff6b95;
  border-radius: 5px;
  z-index: 2;
  transition: transform .8s;
}

.gift-box.open .gift-lid {
  transform: translateY(-65px) rotate(-18deg);
}

.big-love {
  font-size: 42px;
  animation: heartbeat 1.3s infinite;
}

/* FLOATING HEARTS */
.hearts {
  position: fixed;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.floating-heart {
  position: absolute;
  bottom: -40px;
  color: #fd6287;
  animation: rise 5s linear forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.12); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

@keyframes rise {
  to { transform: translateY(-110vh) rotate(25deg); opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  *, *:before, *:after {
    animation-duration: .01ms !important;
    transition-duration: .01ms !important;
  }
}
