const buttons = document.querySelectorAll(".tab-btn");
const sections = document.querySelectorAll(".rule-section");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // 버튼 active 처리
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // 내용 전환
    sections.forEach(sec => sec.classList.remove("active"));
    document.getElementById(btn.dataset.target).classList.add("active");
  });
});
