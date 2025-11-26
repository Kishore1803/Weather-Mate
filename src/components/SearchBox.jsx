// src/components/SearchBox.jsx
import React, { useState } from "react";

export default function SearchBox({ onSearch }) {
  const [city, setCity] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    onSearch(city.trim());
  };

  return (
    <form className="d-flex gap-2" onSubmit={submit}>
      <input
        className="form-control"
        placeholder="Enter city or postal code"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        aria-label="city"
      />
      <button className="btn btn-primary" type="submit">Search</button>
    </form>
  );
}
