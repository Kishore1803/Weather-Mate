// src/utils/api.js

export async function fetchWeatherByCity(city, units = "metric") {
  // DEMO mock response (so project runs)
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockResponse(city, units)), 700);
  });
}

function mockResponse(city, units) {
  const now = new Date();
  const currentTemp = units === "metric" ? 26 : 79;
  const unitSymbol = units === "metric" ? "°C" : "°F";

  const days = Array.from({ length: 10 }).map((_, i) => {
    const dt = new Date(now);
    dt.setDate(now.getDate() + i);

    return {
      date: dt.toISOString().slice(0, 10),
      max: currentTemp + Math.floor(Math.random() * 5),
      min: currentTemp - Math.floor(Math.random() * 7),
      pop: Math.floor(Math.random() * 50),
      wind_kph: 10 + Math.floor(Math.random() * 20),
      condition: "Sunny",
      icon: "☀️",
      unit: unitSymbol
    };
  });

  return {
    location: {
      name: city,
      country: "DemoLand"
    },
    current: {
      temp: currentTemp,
      feels_like: currentTemp - 1,
      humidity: 60,
      wind_kph: 14,
      condition: "Partly Cloudy",
      icon: "⛅",
      updated_at: new Date().toISOString(),
      unit: unitSymbol
    },
    forecast: days
  };
}
