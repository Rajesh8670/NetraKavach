import React from 'react';
import '../Styles/MapView.css'

const MapView = () => {
  return (
    <div className="dashboard-panel map-panel">
      <div className="panel-title">
        <h2>
          <i className="fa-solid fa-map-location-dot"></i> Map View
        </h2>
      </div>
      <div className="map-container">
        <img
          src="/mapview.png"
          alt="Live Border Tracking Map"
        />
        <div className="map-live">
          <span></span> LIVE TRACKING
        </div>
        <div className="map-controls">
          <button>
            <i className="fa-solid fa-plus"></i>
          </button>
          <button>
            <i className="fa-solid fa-minus"></i>
          </button>
          <button>
            <i className="fa-solid fa-location-crosshairs"></i>
          </button>
        </div>
        <div className="map-legend">
          <span>
            <i className="fa-solid fa-video camera-marker"></i> Camera
          </span>
          <span>
            <i className="fa-solid fa-triangle-exclamation alert-marker"></i> Alert
          </span>
          <span>
            <i className="fa-solid fa-car vehicle-marker"></i> Vehicle
          </span>
          <span>
            <i className="fa-solid fa-location-dot checkpoint-marker"></i> Checkpoint
          </span>
        </div>
      </div>
    </div>
  );
};

export default MapView;