document.addEventListener("DOMContentLoaded", () => {
  const loading = document.getElementById("loading-screen");
  const main = document.querySelector(".container");

  if (!loading || !main) {
    console.error("로딩 요소 못 찾음");
    return;
  }

  // 메인 숨기기
  main.style.visibility = "hidden";

  const LOADING_TIME = 2500;

  setTimeout(() => {
    loading.style.opacity = "0";
    loading.style.transition = "opacity 0.8s ease";

    setTimeout(() => {
      loading.style.display = "none";
      main.style.visibility = "visible";
    }, 800);
  }, LOADING_TIME);
});
