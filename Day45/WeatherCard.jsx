function WeatherCard({ weather }) {

    return (

        <div className="weather-box">

            <h2>{weather.name}</h2>

            <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="Weather Icon"
            />

            <p>
                🌡️ Temperature:
                {weather.main.temp}°
            </p>

            <p>
                ☁️ Condition:
                {weather.weather[0].main}
            </p>

            <p>
                💧 Humidity:
                {weather.main.humidity}%
            </p>

            <p>
                🌬️ Wind Speed:
                {weather.wind.speed} m/s
            </p>

        </div>

    );
}

export default WeatherCard;