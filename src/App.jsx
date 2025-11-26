import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/CurrentWeather";
import ForecastList from "./components/ForecastList";
import SettingsModal from "./components/SettingsModal";
import { fetchWeatherByCity, fetchForecastByCity } from "./utils/api";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [showSettings, setShowSettings] = useState(false);
  const [units, setUnits] = useState("metric"); // metric = °C , imperial = °F

  const handleSearch = async (city) => {
    try {
      const weatherData = await fetchWeatherByCity(city, units);
      const forecastData = await fetchForecastByCity(city, units);

      setWeather(weatherData);
      setForecast(forecastData);
    } catch (error) {
      console.error(error);
      alert("City not found or network issue");
    }
  };

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">WeatherMate</h1>

      {/* Search Box */}
      <SearchBox onSearch={handleSearch} />

      {/* Weather Card */}
      {weather && <WeatherCard data={weather} />}

      {/* 10-Day Forecast */}
      {forecast.length > 0 && <ForecastList forecast={forecast} />}

      {/* Settings Modal */}
      <SettingsModal
        show={showSettings}
        onHide={() => setShowSettings(false)}
        units={units}
        setUnits={setUnits}
      />
    </div>
  );
}

export default App;
