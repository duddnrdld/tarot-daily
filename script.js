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

  document.getElementById("card-result").style.display = "block";
  document.getElementById("show-btn").style.display = "none";  // 버튼 숨기기
}

document.addEventListener("DOMContentLoaded", () => {
  const now = new Date();
  document.getElementById("today-date").innerText =
    `📅 오늘 날짜: ${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

  document.getElementById("show-btn").addEventListener("click", displayTodayFortune);
});
