// src/components/SettingsModal.jsx
import React, { useState, useEffect } from "react";

export default function SettingsModal({ show, onClose, settings, onSave }) {
  const [local, setLocal] = useState(settings);

  useEffect(() => setLocal(settings), [settings]);

  if (!show) return null;

  return (
    <div className="modal d-block" tabIndex="-1" role="dialog" style={{ background: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Settings</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">Units</label>
              <select className="form-select" value={local.units} onChange={(e) => setLocal({...local, units: e.target.value})}>
                <option value="metric">Metric (°C · kph)</option>
                <option value="imperial">Imperial (°F · mph)</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Auto-refresh (seconds)</label>
              <input type="number" className="form-control" value={local.autoRefresh} min="0"
                onChange={(e) => setLocal({...local, autoRefresh: Number(e.target.value)})}/>
              <div className="form-text">0 = off</div>
            </div>

            <div className="form-check">
              <input className="form-check-input" type="checkbox" checked={local.useGeolocation}
                onChange={(e) => setLocal({...local, useGeolocation: e.target.checked})} id="geoCheck"/>
              <label className="form-check-label" htmlFor="geoCheck">Detect my location automatically</label>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button className="btn btn-primary" onClick={() => onSave(local)}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
