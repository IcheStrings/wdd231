document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("navList");
hamburger.addEventListener("click", () => navList.classList.toggle("show"));

// Visit Message
const sidebar = document.getElementById("visitMessage");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();
let message = "Welcome! Let us know if you have any questions.";

if (lastVisit) {
  const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
  if (days < 1) message = "Back so soon! Awesome!";
  else message = `You last visited ${days} day${days > 1 ? "s" : ""} ago.`;
}

sidebar.textContent = message;
localStorage.setItem("lastVisit", now);

// Load Discover Cards
fetch("chamber/data/discover.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("cardContainer");
    data.forEach(item => {
      const card = document.createElement("article");
      card.className = "discover-card";
      card.innerHTML = `
        <h2>${item.title}</h2>
        <figure>
          <img src="chamber/${item.image}" alt="${item.title}" width="300" height="200" loading="lazy" />
        </figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button onclick="location.href='${item.link || '#'}'">Learn More</button>
      `;
      container.appendChild(card);
    });
  });
