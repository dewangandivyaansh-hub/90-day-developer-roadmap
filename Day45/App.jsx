import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import WeatherCard from "./WeatherCard";

function App() {

  const apiKey = "3d14c430c199800c64af18d7f08c4dc7";

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [unit, setUnit] = useState("metric");

  const [history, setHistory] = useState(() => {

    const savedHistory =
      localStorage.getItem("weatherHistory");

    return savedHistory
      ? JSON.parse(savedHistory)
      : [];

  });

  useEffect(() => {

    localStorage.setItem(
      "weatherHistory",
      JSON.stringify(history)
    );

  }, [history]);

  useEffect(() => {

    if (weather) {

      searchCity(weather.name);

    }

  }, [unit]);

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

        if (!history.includes(data.name)) {

          setHistory([
            ...history,
            data.name
          ]);

        }

      }

    } catch (err) {

      setError("Error fetching weather ⚠️");

    } finally {

      setLoading(false);

    }
  }

  function searchCity(cityName) {

    const url =
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${unit}`;

    fetchWeather(url);

  }

  function searchWeather() {

    if (city.trim() === "") return;

    searchCity(city);

  }

  function getLocationWeather() {

    if (!navigator.geolocation) {

      setError("Geolocation not supported ❌");

      return;

    }

    navigator.geolocation.getCurrentPosition((position) => {

      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const url =
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;

      fetchWeather(url);

    });
  }

  function clearHistory() {

    setHistory([]);

    localStorage.removeItem(
      "weatherHistory"
    );

  }

  let backgroundClass = "default-bg";

  if (weather) {

    const condition =
      weather.weather[0].main;

    if (condition === "Clear") {

      backgroundClass = "clear-bg";

    }

    else if (condition === "Clouds") {

      backgroundClass = "cloud-bg";

    }

    else if (condition === "Rain") {

      backgroundClass = "rain-bg";

    }

  }

  return (

    <div className={backgroundClass}>

      <Header />

      <h1>🌤️ React Weather App</h1>

      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) =>
          setCity(e.target.value)
        }
      />

      <button onClick={searchWeather}>
        Search
      </button>

      <button
        onClick={() =>
          setUnit(
            unit === "metric"
              ? "imperial"
              : "metric"
          )
        }
      >
        {unit === "metric"
          ? "°F"
          : "°C"}
      </button>

      <button onClick={getLocationWeather}>
        📍 My Location
      </button>

      {loading && (
        <p className="loading">
          Fetching weather...
        </p>
      )}

      {error && (
        <p className="error">
          {error}
        </p>
      )}

      {weather && (
        <WeatherCard weather={weather} />
      )}

      {history.length > 0 && (

        <div className="history-box">

          <h2>
            Recent Searches
          </h2>

          {history.map(
            (cityName, index) => (

              <button
                key={index}
                onClick={() =>
                  searchCity(cityName)
                }
              >
                {cityName}
              </button>

            )
          )}

          <button
            onClick={clearHistory}
          >
            Clear History
          </button>

        </div>

      )}

    </div>

  );
}

export default App;