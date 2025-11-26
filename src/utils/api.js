const API_KEY = "YOUR_API_KEY_HERE"; // ← put your OpenWeatherMap API key

// ---------------------
// 🌦 Current Weather API
// ---------------------
export async function fetchWeatherByCity(city, units = "metric") {
  const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch current weather");
  }
  return await response.json();
}

// -----------------------
// 📅 5-Day / 3-Hour Forecast API
// -----------------------
export async function fetchForecastByCity(city, units = "metric") {
  const url =
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${units}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch forecast");
  }
  return await response.json();
}
