import React from "react";

function WeatherCard({ weather }) {
  const icon = weather.weather[0].icon;

  return (
    <div className="card shadow-lg p-4 text-center weather-card">
      <h2>
        {weather.name}, {weather.sys.country}
      </h2>

      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather icon"
      />

      <h1 className="display-3 fw-bold">{Math.round(weather.main.temp)}°C</h1>
      <p className="text-capitalize">{weather.weather[0].description}</p>

      <div className="d-flex justify-content-around mt-4">
        <div>
          <h6>Humidity</h6>
          <p>{weather.main.humidity}%</p>
        </div>
        <div>
          <h6>Wind</h6>
          <p>{weather.wind.speed} m/s</p>
        </div>
        <div>
          <h6>Feels Like</h6>
          <p>{Math.round(weather.main.feels_like)}°C</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
