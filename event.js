const params = new URLSearchParams(location.search);
const id = Number(params.get("id"));

fetch("events.json")
  .then(res => res.json())
  .then(events => {
    const ev = events.find(e => e.id === id);
    if (!ev) return;

    document.getElementById("title").textContent = ev.title;
    document.getElementById("date").textContent = ev.date;
    document.getElementById("time").textContent = ev.time || "-";
    document.getElementById("uniform").textContent = ev.uniform || "-";
    document.getElementById("place").textContent = ev.place || "-";
    document.getElementById("memo").textContent = ev.memo || "";
  });
