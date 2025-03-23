document.addEventListener("DOMContentLoaded", () => {
    async function fetchMembers() {
        try {
            const response = await fetch("data/members.json");
            const members = await response.json();
            displayMembers(members);
        } catch (error) {
            console.error("Error loading members:", error);
        }
    }

    function displayMembers(members) {
        const container = document.getElementById("membersContainer");
        container.innerHTML = "";
        members.forEach(member => {
            const div = document.createElement("div");
            div.classList.add("member");
            div.innerHTML = `
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                <img src="images/${member.image}" alt="${member.name}" loading="lazy">
            `;
            container.appendChild(div);
        });
    }

    document.getElementById("toggleView").addEventListener("click", () => {
        document.getElementById("membersContainer").classList.toggle("list-view");
    });

    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;

    fetchMembers();
});

document.addEventListener("DOMContentLoaded", () => {
    // OpenWeatherMap API Fetch
    const apiKey = "b2f018a8f3deb43497e12122f4af7cd4"; 
    const city = "Timbuktu";
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    async function fetchWeather() {
        try {
            const response = await fetch(weatherUrl);
            const data = await response.json();
            document.getElementById("current-temp").textContent = `${data.main.temp}°C`;
            document.getElementById("weather-desc").textContent = data.weather[0].description;

            // Fetch 3-day forecast
            const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
            const forecastResponse = await fetch(forecastUrl);
            const forecastData = await forecastResponse.json();
            displayForecast(forecastData);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    }

    function displayForecast(forecastData) {
        const forecastContainer = document.getElementById("forecast");
        forecastContainer.innerHTML = "";
        
        for (let i = 0; i < 3; i++) {
            const forecast = forecastData.list[i * 8]; // Every 24 hours (8 intervals of 3 hours)
            const dayDiv = document.createElement("div");
            dayDiv.innerHTML = `
                <p><strong>Day ${i + 1}</strong></p>
                <p>${forecast.main.temp}°C</p>
                <p>${forecast.weather[0].description}</p>
            `;
            forecastContainer.appendChild(dayDiv);
        }
    }

    fetchWeather();

    // Fetch Members & Display Spotlight Members
    async function fetchMembers() {
        try {
            const response = await fetch("data/members.json");
            const members = await response.json();
            displaySpotlights(members);
        } catch (error) {
            console.error("Error loading members:", error);
        }
    }

    function displaySpotlights(members) {
        const spotlights = document.getElementById("spotlight-container");
        spotlights.innerHTML = "";

        // Filter only gold (3) and silver (2) members
        const premiumMembers = members.filter(member => member.membership >= 2);

        // Shuffle & pick 2-3 members randomly
        const shuffled = premiumMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

        shuffled.forEach(member => {
            const div = document.createElement("div");
            div.classList.add("member");
            div.innerHTML = `
                <h3>${member.name}</h3>
                <img src="images/${member.image}" alt="${member.name}">
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                <p><strong>Membership Level:</strong> ${member.membership === 3 ? "Gold" : "Silver"}</p>
            `;
            spotlights.appendChild(div);
        });
    }

    fetchMembers();

    // Update Footer Date
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
});
