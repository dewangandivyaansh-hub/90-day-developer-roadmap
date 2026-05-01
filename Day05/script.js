const apiKey = "3d14c430c199800c64af18d7f08c4dc7"; // Replace with your OpenWeatherMap API key

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
            if (data.cod === "404") {
                result.innerHTML = "<p>City not found ❌</p>";
                return;
            }

            result.innerHTML = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Condition: ${data.weather[0].main}</p>
            `;
        })
        .catch(error => {
            result.innerHTML = "<p>Error fetching data ⚠️</p>";
        });
}