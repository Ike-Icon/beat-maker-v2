function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("playing");
  }
  
  function playSound(audio) {
    const key = document.querySelector(`div[data-key="${audio.getAttribute('data-key')}"]`);
  
    if (!audio) return;
  
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
  }
  
  const keys = Array.from(document.querySelectorAll(".key"));
  keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
  
  const sounds = document.querySelectorAll("audio");
  const pads = document.querySelectorAll("#pads div");
  const visuals = document.querySelector(".visual");
  const colors = [
    "#3cd863",
    "#FF5C33",
    "gold",
    "aqua",
    "#21003D",
    "#D7098F",
    "wheat",
    "brown",
  ];
  
  // add jumping balls to the pad when it is clicked on 
  pads.forEach((pad, index) => {
    pad.addEventListener("click", () => {
      playSound(sounds[index]);
      jumpingBalls(index);
    });
  });
  
 

  // add color balls to pad when key is pressed
  window.addEventListener('keydown', (event) => {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const index = Array.from(pads).findIndex(pad => pad.getAttribute('data-key') == event.keyCode);
    if (audio) {
      playSound(audio);
      jumpingBalls(index);
    }
  });
  
  
  function jumpingBalls(index) {
    const balls = document.createElement("div");
    visuals.appendChild(balls);
    balls.style.backgroundColor = colors[index];
    balls.style.animation = `jump 2s ease`;
    balls.addEventListener("animationend", function () {
      visuals.removeChild(this);
    });
  }
  