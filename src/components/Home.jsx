import { useState } from "react";
import SearchBox from "../components/SearchBox";
import WeatherCard from "./";
import Loader from "./CurrentWeather";
import { getWeather } from "./utils/api";

const Home = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
 
  const searchWeather = async (city) => {
    setLoading(true);
    setError("");
    try {
      const data = await getWeather(city);
      setWeather(data);
    } catch {
      setError("City not found!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <SearchBox onSearch={searchWeather} />

      {loading && <Loader />}

      {error && <p className="text-danger text-center">{error}</p>}

      {weather && <WeatherCard data={weather} />}
    </div>
  );
};

export default Home;
