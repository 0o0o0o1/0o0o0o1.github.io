const now = new Date().toLocaleString();

let count = Number(localStorage.getItem("visitCount") || 0);
count++;
localStorage.setItem("visitCount", count);

const logs = JSON.parse(localStorage.getItem("logs") || "[]");
logs.unshift(`접속: ${now}`);
logs.splice(5); // 최근 5개만 유지
localStorage.setItem("logs", JSON.stringify(logs));

localStorage.setItem("lastTime", now);

document.getElementById("visitCount").textContent = count;
document.getElementById("lastTime").textContent =
  localStorage.getItem("lastTime");

const logList = document.getElementById("logList");
logs.forEach(log => {
  const li = document.createElement("li");
  li.textContent = log;
  logList.appendChild(li);
});
