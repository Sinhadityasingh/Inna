function showLove() {
  document.getElementById("page1").classList.add("hidden");
  document.getElementById("page2").classList.remove("hidden");
}

/* NO button runs away */
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("click", () => {
  // If she somehow clicks it, still make her valentine 😌
  showLove();
});

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);

function moveNo() {
  const x = Math.floor(Math.random() * 220) - 110;
  const y = Math.floor(Math.random() * 220) - 110;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

/* Hearts Generator */
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("span");
  heart.innerHTML = "💘";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
  heart.style.fontSize = (Math.random() * 18 + 14) + "px";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 250);
