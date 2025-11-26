// src/components/ForecastList.jsx
import React from "react";

function formatDate(iso) {
  const dt = new Date(iso);
  return dt.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });
}

export default function ForecastList({ forecast }) {
  if (!forecast || !forecast.length) return null;

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">10-Day Forecast</h5>
        <div className="row">
          {forecast.map((d, idx) => (
            <div key={d.date || idx} className="col-6 col-md-4 col-lg-2 mb-3">
              <div className="border rounded p-2 h-100 d-flex flex-column justify-content-between">
                <div className="small text-muted">{formatDate(d.date)}</div>
                <div className="fs-4">{d.icon || "🌤️"}</div>
                <div className="fw-bold">{d.max}{d.unit || ""} / {d.min}{d.unit || ""}</div>
                <div className="small text-muted">POP: {d.pop}%</div>
                <div className="small">Wind: {d.wind_kph} kph</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
