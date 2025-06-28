// Обновлённая дата начала отношений
const startDate = new Date("2025-01-23T20:52:00");

document.getElementById("startButton").addEventListener("click", () => {
  document.getElementById("startButton").style.display = "none";
  document.getElementById("timer").classList.remove("hidden");
  startTimer();
  createHearts();
});

function startTimer() {
  setInterval(() => {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("timer").textContent = 
      `Мы вместе: ${days} дней, ${hours} ч, ${minutes} мин, ${seconds} сек 💖`;
  }, 1000);
}

// Дата для входа в секретный раздел: 03.07.2024
function checkSecret() {
  const input = document.getElementById("secret-input").value.trim();
  const correctDate = "03.07.2024";

  if (input === correctDate) {
    document.getElementById("secret-section").classList.remove("hidden");
    document.getElementById("error-msg").textContent = "";
  } else {
    document.getElementById("error-msg").textContent = "Неверная дата 😔 Попробуй ещё раз!";
  }
}

function createHearts() {
  const heartsContainer = document.getElementById("hearts");

  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "60%";
    heart.textContent = "💖";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 2000);
  }
}
