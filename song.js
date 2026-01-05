const tabs = document.querySelectorAll(".tab");
const songs = document.querySelectorAll(".song");
const player = document.getElementById("player");

const audioMap = {
  song1: "/audio/song1.m4a",
  song2: "/audio/song2.m4a",
  song3: "/audio/song3.m4a"
};

tabs.forEach(tab => {
  tab.onclick = () => {
    tabs.forEach(t => t.classList.remove("active"));
    songs.forEach(s => s.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.song).classList.add("active");

    player.src = audioMap[tab.dataset.song];
    player.currentTime = 0;
    player.load();
    player.play(); // ← 탭 누르면 바로 재생 (원하면 제거 가능)
  };
});

// 가사 클릭 → 해당 시간 재생
document.querySelectorAll(".song p").forEach(line => {
  line.onclick = () => {
    const time = Number(line.dataset.time);
    player.currentTime = time;
    player.play();
  };
});

// ✅ 페이지 처음 들어왔을 때 song1 준비
window.addEventListener("DOMContentLoaded", () => {
  player.src = audioMap["song1"];
  player.load();
});


player.ontimeupdate = () => {
  const current = player.currentTime;

  document.querySelectorAll(".song.active p").forEach(p => {
    const time = Number(p.dataset.time);

    if (current >= time && current < time + 4) {
      p.classList.add("active");
    } else {
      p.classList.remove("active");
    }
  });
};

