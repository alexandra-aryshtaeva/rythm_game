// Game start:
// Music start
// animation start

// function gameStart() {
//   // let key = document.querySelector(`div[data-key"${e.code}"]`);
//   // let key = document.getElementById("key");
//   // key.style.color = "blue";
//   //   document.querySelector("audio")
//   //   music.play()
// }

let button = document.querySelector("button");
button.addEventListener("click", myFunction);

function myFunction() {
  let key = document.getElementById("key");
}


Sound comnig out as the button is pressed
function pressKey(e) {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
// 
  if (!audio) return;
// 
  audio.currentTime = 0;
  audio.play();
  console.log(e.key);
}
window.addEventListener("keydown", pressKey);
// 