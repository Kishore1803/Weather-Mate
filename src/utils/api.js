const API_KEY = "YOUR_OPENWEATHER_API_KEY";

export async function fetchWeatherByCity(city, units = "metric") {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`
  );

  if (!res.ok) throw new Error("Weather not found");
  return await res.json();
}

export async function fetchForecastByCity(city, units = "metric") {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${units}`
  );

  if (!res.ok) throw new Error("Forecast not found");
  return await res.json();
}
