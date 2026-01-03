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
