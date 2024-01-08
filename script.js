// Game start:
// Music start
// animation start
const button = document.querySelector("buton");

function gameStart() {
  const key = document.querySelector(`div[data-key"${e.code}"]`);
  key.style.color = "rotate()20deg";
  //   document.querySelector("audio")
  //   music.play()
}

button.addEventListener("click", gameStart());

function pressKey(e) {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
  console.log(e.key);
}
window.addEventListener("keydown", pressKey);
