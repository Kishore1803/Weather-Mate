import React, { useState } from "react";
import WeatherCard from "./WeatherCard.jsx";

const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY"; // replace with your API key

function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      if (!res.ok) {
        alert("City not found!");
        setWeather(null);
        return;
      }

      const data = await res.json();
      setWeather(data);

    } catch (error) {
      console.error("Error:", error);
      alert("Failed to fetch weather");
    }
  };

  return (
    <div className="container mt-5 pt-4">
      <h1 className="text-center mb-4">Search Weather by City</h1>

      <div className="row justify-content-center mt-3">
        <div className="col-md-6 d-flex">
          <input
            type="text"
            className="form-control"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button className="btn btn-primary ms-2" onClick={fetchWeather}>
            Search
          </button>
        </div>
      </div>

      <div className="row justify-content-center mt-4">
        <div className="col-md-6">
          {weather && <WeatherCard weather={weather} />}
        </div>
      </div>
    </div>
  );
}

export default Home;
