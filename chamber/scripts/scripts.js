// Toggle mobile nav
const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("navList");
hamburger.addEventListener("click", () => {
  navList.classList.toggle("show");
});

// Footer dates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Weather API
const apiKey = "b2f018a8f3deb43497e12122f4af7cd4";
const city = "Timbuktu";

async function fetchWeather() {
  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await res.json();
    document.getElementById("current-temp").textContent = `${data.main.temp}°C`;
    document.getElementById("weather-desc").textContent = data.weather[0].description;

    const forecastRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
    const forecastData = await forecastRes.json();
    displayForecast(forecastData);
  } catch (e) {
    console.error("Weather fetch failed:", e);
  }
}

function displayForecast(data) {
  const container = document.getElementById("forecast");
  for (let i = 0; i < 3; i++) {
    const item = data.list[i * 8];
    const div = document.createElement("div");
    const date = new Date(item.dt_txt).toLocaleDateString(undefined, { weekday: 'short' });
    div.innerHTML = `
      <strong>${date}</strong>
      <p>${item.main.temp}°C</p>
      <p>${item.weather[0].description}</p>
    `;
    container.appendChild(div);
  }
}

// Spotlight Members
async function fetchSpotlights() {
  try {
    const res = await fetch("data/members.json");
    const members = await res.json();
    const premium = members.filter(m => m.membership >= 2);
    const random = premium.sort(() => 0.5 - Math.random()).slice(0, 3);
    const container = document.getElementById("spotlightContainer");

    random.forEach(member => {
      const div = document.createElement("div");
      div.className = "member";
      div.innerHTML = `
        <h3>${member.name}</h3>
        <img src="images/${member.image}" alt="${member.name}" loading="lazy" />
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">${member.website}</a>
      `;
      container.appendChild(div);
    });
  } catch (e) {
    console.error("Spotlight fetch failed:", e);
  }
}

fetchWeather();
fetchSpotlights();