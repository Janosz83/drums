document.querySelector("body").addEventListener("keypress", (ev) => {
  console.log(ev.key);

  if (ev.key === "w") {
    console.log("clap");
  }

  if (ev.key === "s") {
    console.log("hihat");
  }

  if (ev.key === "d") {
    console.log("kick");
  }

  if (ev.key === "f") {
    console.log("openhat");
  }

  if (ev.key === "g") {
    console.log("boom");
  }

  if (ev.key === "h") {
    console.log("ride");
  }

  if (ev.key === "j") {
    console.log("snare");
  }

  if (ev.key === "k") {
    console.log("tom");
  }

  if (ev.key === "l") {
    console.log("tink");
  }
});

/* let els = document.querySelectorAll(".instrument");
els.forEach(function (el) {
  console.log(el);
  el.addEventListener("click", function (ev) {
    // odtwarzamy audio takie jak id
    console.log("x", el.id);
  });
});
 */

let container = document.querySelector(".container");
container.addEventListener("click", function (ev) {
  console.log(ev.target.id);
  const url = `audio/${ev.target.id}.mp3`;
  var audio = new Audio(url);
  audio.play();
});
