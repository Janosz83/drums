const bodyEl = document.querySelector("body");
const containerEl = bodyEl.querySelector(".container");
const clapEl = containerEl.querySelector("#clap");
const hihatEl = containerEl.querySelector("#hihat");
const kickEl = containerEl.querySelector("#kick");
const openhatEl = containerEl.querySelector("#openhat");
const boomEl = containerEl.querySelector("#boom");
const rideEl = containerEl.querySelector("#ride");
const snareEl = containerEl.querySelector("#snare");
const tomEl = containerEl.querySelector("#tom");
const tinkEl = containerEl.querySelector("#tink");

function playAudio(file) {
  const url = `audio/${file}.mp3`;
  const audio = new Audio(url);
  audio.play();
}

bodyEl.addEventListener("keypress", (ev) => {
  if (ev.key === "w") {
    playAudio("clap");
  }

  if (ev.key === "s") {
    playAudio("hihat");
  }

  if (ev.key === "d") {
    playAudio("kick");
  }

  if (ev.key === "f") {
    playAudio("openhat");
  }

  if (ev.key === "g") {
    playAudio("boom");
  }

  if (ev.key === "h") {
    playAudio("ride");
  }

  if (ev.key === "j") {
    playAudio("snare");
  }

  if (ev.key === "k") {
    playAudio("tom");
  }

  if (ev.key === "l") {
    playAudio("tink");
  }
});

clapEl.addEventListener("click", (ev) => {
  playAudio(ev.target.id);
});

hihatEl.addEventListener("click", (ev) => {
  playAudio(ev.target.id);
});

kickEl.addEventListener("click", (ev) => {
  playAudio(ev.target.id);
});

openhatEl.addEventListener("click", (ev) => {
  playAudio(ev.target.id);
});

boomEl.addEventListener("click", (ev) => {
  playAudio(ev.target.id);
});

rideEl.addEventListener("click", (ev) => {
  playAudio(ev.target.id);
});

snareEl.addEventListener("click", (ev) => {
  playAudio(ev.target.id);
});
tomEl.addEventListener("click", (ev) => {
  playAudio(ev.target.id);
});

tinkEl.addEventListener("click", (ev) => {
  playAudio(ev.target.id);
});
