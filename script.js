
function getRandomCardIndex() {
  return Math.floor(Math.random() * cards.length);
}

function displayCardByIndex(idx) {
  const card = cards[idx];

  document.getElementById("card-name").innerText = card.name;
  document.getElementById("finance-text").innerText = card.finance;
  document.getElementById("love-text").innerText = card.love;
  document.getElementById("study-text").innerText = card.study;
  document.getElementById("advice-text").innerText = card.advice;

  const imageElement = document.getElementById("card-image");
  imageElement.src = card.image;
  imageElement.style.display = "block";

  const result = document.getElementById("card-result");
  result.style.display = "block";
  result.style.opacity = 0;
  result.style.transition = "opacity 1s ease";
  setTimeout(() => {
    result.style.opacity = 1;
  }, 100);
}

function displayTodayFortune() {
  const idx = getTodayCardIndex();

  const btn = document.getElementById("show-btn");
  btn.style.transition = "opacity 0.6s ease";
  btn.style.opacity = 0;
  setTimeout(() => {
    btn.style.display = "none";
    document.getElementById("re-draw-btn").style.display = "block";
  }, 600);

  displayCardByIndex(idx);
}

function getTodayCardIndex() {
  const today = new Date();
  const dateStr = today.toISOString().slice(0, 10);
  let sum = 0;
  for (let i = 0; i < dateStr.length; i++) sum += dateStr.charCodeAt(i);
  return sum % cards.length;
}

document.addEventListener("DOMContentLoaded", () => {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const title = document.getElementById("title-heading");
  title.innerText = `🔮 ${yyyy}년 ${mm}월 ${dd}일 오늘의 타로 운세`;

  document.getElementById("show-btn").addEventListener("click", displayTodayFortune);
  document.getElementById("re-draw-btn").addEventListener("click", () => {
    const newIndex = getRandomCardIndex();
    displayCardByIndex(newIndex);
  });
});
