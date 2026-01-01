alert("1️⃣ loading.js 실행됨");

document.addEventListener("DOMContentLoaded", () => {
  alert("2️⃣ DOM 로드됨");

  const loading = document.getElementById("loading-screen");

  setTimeout(() => {
    alert("3️⃣ 로딩 제거");
    if (loading) loading.remove();
  }, 1000);
});
