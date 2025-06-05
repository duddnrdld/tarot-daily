
function getTodayCardIndex() {
  const today = new Date();
  const dateStr = today.toISOString().slice(0, 10);
  let sum = 0;
  for (let i = 0; i < dateStr.length; i++) sum += dateStr.charCodeAt(i);
  return sum % cards.length;
}

function displayTodayFortune() {
  const idx = getTodayCardIndex();
  const card = cards[idx];

  document.getElementById("card-name").innerText = card.name;
  document.getElementById("finance-text").innerText = card.finance;
  document.getElementById("love-text").innerText = card.love;
  document.getElementById("study-text").innerText = card.study;
  document.getElementById("advice-text").innerText = card.advice;

  const imageElement = document.getElementById("card-image");
  imageElement.src = card.image;
  imageElement.style.display = "block";

  const btn = document.getElementById("show-btn");
  btn.style.transition = "opacity 0.6s ease";
  btn.style.opacity = 0;
  setTimeout(() => {
    btn.style.display = "none";
  }, 600);

  const result = document.getElementById("card-result");
  result.style.display = "block";
  result.style.opacity = 0;
  result.style.transition = "opacity 1s ease";
  setTimeout(() => {
    result.style.opacity = 1;
  }, 100);
}

document.addEventListener("DOMContentLoaded", () => {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const title = document.getElementById("title-heading");
  title.innerText = `🔮 ${yyyy}년 ${mm}월 ${dd}일 오늘의 타로 운세`;

  document.getElementById("show-btn").addEventListener("click", displayTodayFortune);
});
