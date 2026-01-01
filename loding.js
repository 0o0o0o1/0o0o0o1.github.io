window.addEventListener("load", () => {
  const loading = document.getElementById("loading-screen");
  const main = document.querySelector(".container");

  // 안전장치
  if (!loading || !main) return;

  // 메인은 일단 안 보이게
  main.style.visibility = "hidden";

  // 로딩 유지 시간
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
