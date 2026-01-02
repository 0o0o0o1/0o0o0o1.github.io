fetch("events.json")
  .then(res => res.json())
  .then(events => {
    const cal = document.getElementById("calendar");

    events.forEach(ev => {
      const div = document.createElement("div");
      div.className = `event ${ev.type}`;

      div.innerHTML = `
        <div class="date">${ev.date}</div>
        <div class="title">${ev.title}</div>
      `;

      div.onclick = () => {
        location.href = `event.html?id=${ev.id}`;
      };

      cal.appendChild(div);
    });
  });
