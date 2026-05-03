const apiKey = "3d14c430c199800c64af18d7f08c4dc7"; // replace with your real key

// 🔍 Search by city
function searchWeather() {
    let city = document.getElementById("cityInput").value.trim();

    if (city === "") {
        document.getElementById("weatherResult").innerHTML =
            "<p class='error'>Please enter a city name ❌</p>";
        return;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetchWeather(url);
}

// 📍 Get weather using location
function getLocationWeather() {
    let result = document.getElementById("weatherResult");

    if (!navigator.geolocation) {
        result.innerHTML = "<p class='error'>Geolocation not supported ❌</p>";
        return;
    }

    result.innerHTML = "<p class='loading'>Getting your location...</p>";

    navigator.geolocation.getCurrentPosition(position => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        fetchWeather(url);
    }, () => {
        result.innerHTML = "<p class='error'>Location access denied ❌</p>";
    });
}

// 🌐 Fetch weather (common function)
function fetchWeather(url) {
    let result = document.getElementById("weatherResult");

    result.innerHTML = "<p class='loading'>Loading weather...</p>";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            if (data.cod !== 200) {
                result.innerHTML = `<p class='error'>${data.message} ❌</p>`;
                return;
            }

            let icon = data.weather[0].icon;

            result.innerHTML = `
                <div class="weather-box">
                    <h2>${data.name}</h2>
                    <img src="https://openweathermap.org/img/wn/${icon}@2x.png">
                    <p><b>${data.weather[0].main}</b></p>
                    <p>🌡️ Temp: ${data.main.temp}°C</p>
                    <p>💧 Humidity: ${data.main.humidity}%</p>
                    <p>🌬️ Wind: ${data.wind.speed} m/s</p>
                </div>
            `;
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "<p class='error'>Error fetching data ⚠️</p>";
        });
}