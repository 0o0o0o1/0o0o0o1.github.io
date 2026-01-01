document.addEventListener("DOMContentLoaded", () => {
  const loading = document.getElementById("loading-screen");
  const main = document.querySelector(".container");

  console.log("loading.js 실행됨");

  // 안전 체크
  if (!loading || !main) {
    console.error("로딩 또는 메인 요소 없음");
    return;
  }

  // 메인 완전히 숨기기
  main.style.display = "none";

  const LOADING_TIME = 2000; // 2초

  setTimeout(() => {
    // 로딩 페이드아웃
    loading.style.opacity = "0";
    loading.style.transition = "opacity 0.8s ease";

    setTimeout(() => {
      // 로딩 제거
      loading.remove();

      // 메인 표시
      main.style.display = "block";
    }, 800);
  }, LOADING_TIME);
});
