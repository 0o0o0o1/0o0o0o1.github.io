setTimeout(() => {
  const loading = document.getElementById("loading-screen");
  loading.style.opacity = "0";
  loading.style.transition = "opacity 0.8s ease";

  setTimeout(() => {
    loading.style.display = "none";
    // 여기서 메인 페이지 표시
  }, 800);
}, 3000); // 3초 로딩
