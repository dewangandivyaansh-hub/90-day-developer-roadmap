const apiKey = "3d14c430c199800c64af18d7f08c4dc7";

function searchWeather() {
    let city = document.getElementById("cityInput").value.trim();
    let result = document.getElementById("weatherResult");

    if (city === "") {
        result.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data); // DEBUG

            if (data.cod === 404) {
                result.innerHTML = "<p>City not found ❌</p>";
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
            console.log(error); // DEBUG
            result.innerHTML = "<p>Error fetching data ⚠️</p>";
        });
}