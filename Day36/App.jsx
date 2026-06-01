import { useState } from "react";
import "./App.css";
import Header from "./Header";

function App() {

  const apiKey = "3d14c430c199800c64af18d7f08c4dc7";

  const [city, setCity] = useState("");

  const [weather, setWeather] = useState(null);

  async function searchWeather() {

    if (city.trim() === "") {
      return;
    }

    const url =
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

      const response = await fetch(url);

      const data = await response.json();

      setWeather(data);

    } catch (error) {

      console.log(error);

    }
  }

  return (
    <div>

      <Header />

      <h1>🌤️ React Weather App</h1>

      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={searchWeather}>
        Search
      </button>

      {weather && weather.main && (

        <div className="weather-box">

          <h2>{weather.name}</h2>

          <p>
            🌡️ Temperature: {weather.main.temp}°C
          </p>

          <p>
            ☁️ Condition: {weather.weather[0].main}
          </p>

          <p>
            💧 Humidity: {weather.main.humidity}%
          </p>

          <p>
            🌬️ Wind Speed: {weather.wind.speed} m/s
          </p>

        </div>

      )}

    </div>
  );
}

export default App;