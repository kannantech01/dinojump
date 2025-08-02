const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const scoreEl = document.getElementById("score");

let score = 0;

function jump() {
  if (!dino.classList.contains("jump")) {
    dino.classList.add("jump");
    setTimeout(() => {
      dino.classList.remove("jump");
    }, 300);
  }
}

// 👉 Keyboard support
document.addEventListener("keydown", jump);

// 👉 Mobile tap/click support
document.addEventListener("click", jump);
document.addEventListener("touchstart", jump);

let isAlive = setInterval(() => {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

  if (cactusLeft < 90 && cactusLeft > 50 && dinoTop >= 140) {
    alert("Game Over! Your score: " + score);
    score = 0;
    scoreEl.textContent = "Score: 0";
    cactus.style.left = "600px";
  }
}, 10);

function moveCactus() {
  let cactusLeft = 600;

  function frame() {
    if (cactusLeft <= -20) {
      cactusLeft = 600;
      score++;
      scoreEl.textContent = "Score: " + score;
    } else {
      cactusLeft -= 5;
    }
    cactus.style.left = cactusLeft + "px";
  }

  setInterval(frame, 50);
}

moveCactus();
