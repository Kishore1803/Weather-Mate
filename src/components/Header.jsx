// src/components/Header.jsx
import React from "react";

export default function Header() {
  return (
    <header className="bg-primary text-white py-3 mb-4">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h4 m-0">WeatherMate</h1>
        <small className="text-light opacity-75">10-day forecast · live updates</small>
      </div>
    </header>
  );
}
