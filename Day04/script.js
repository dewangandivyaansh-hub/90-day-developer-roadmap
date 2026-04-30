function searchWeather() {
    let city = document.getElementById("cityInput").value.trim();
    let result = document.getElementById("weatherResult");

    if (city === "") {
        result.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    result.innerHTML = `
        <h2>${city}</h2>
        <p>Temperature: 28°C</p>
        <p>Condition: Sunny ☀️</p>
    `;
}