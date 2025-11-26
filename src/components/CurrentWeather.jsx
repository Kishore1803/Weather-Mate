// src/components/CurrentWeather.jsx
import React from "react";

export default function CurrentWeather({ data }) {
  if (!data) return null;

  const { current, location } = data;

  return (
    <div className="card mb-3">
      <div className="card-body d-flex align-items-center justify-content-between">
        <div>
          <h5 className="card-title mb-1">{location.name}, {location.country}</h5>
          <p className="mb-1 text-muted">Updated: {new Date(current.updated_at).toLocaleString()}</p>
          <h2 className="display-6">{current.temp}{current.unit}</h2>
          <p className="mb-0">{current.condition} · Feels like {current.feels_like}{current.unit}</p>
          <small className="text-muted">Humidity: {current.humidity}% · Wind: {current.wind_kph} kph</small>
        </div>

        <div style={{ fontSize: 48, textAlign: "center" }}>
          <div>{current.icon}</div>
        </div>
      </div>
    </div>
  );
}
