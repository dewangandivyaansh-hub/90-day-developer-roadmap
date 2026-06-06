import { useState } from "react";
import "./App.css";
import Header from "./Header";
import WeatherCard from "./WeatherCard";

function App() {

  const apiKey = "3d14c430c199800c64af18d7f08c4dc7";

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchWeather(url) {

    try {

      setLoading(true);
      setError("");

      const response = await fetch(url);

      const data = await response.json();

      if (data.cod !== 200) {

        setError("City not found ❌");
        setWeather(null);

      } else {

        setWeather(data);

      }

    } catch (err) {

      setError("Error fetching weather ⚠️");

    } finally {

      setLoading(false);

    }
  }

  function searchWeather() {

    if (city.trim() === "") return;

    const url =
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetchWeather(url);
  }

  function getLocationWeather() {

    if (!navigator.geolocation) {

      setError("Geolocation not supported");
      return;

    }

    navigator.geolocation.getCurrentPosition((position) => {

      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const url =
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

      fetchWeather(url);

    });
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

      <button onClick={getLocationWeather}>
        📍 My Location
      </button>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {weather && (
        <WeatherCard weather={weather} />
      )}

    </div>

  );
}

export default App;