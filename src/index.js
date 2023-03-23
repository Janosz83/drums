document.querySelector("body").addEventListener("keypress", (ev) => {
  console.log(ev.key);

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

function playAudio(file) {
  const url = `audio/${file}.mp3`;
  var audio = new Audio(url);
  audio.play();
}

/* let els = document.querySelectorAll(".instrument");
els.forEach(function (el) {
  console.log(el);
  el.addEventListener("click", function (ev) {
    // odtwarzamy audio takie jak id
    console.log("x", el.id);
  });
});
 */

let containerEl = document.querySelector(".container");
containerEl.addEventListener("click", function (ev) {
  playAudio(ev.target.id);
});
