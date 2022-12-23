import React from 'react';
import mapImage from "../../assets/map.svg";
import normalLevel from "../../assets/normal-level.svg";
import './MapSelect.css';

const MapSelect = () => {
  return (
    <div className="room__mapselect">
      <div className="room__mapselect-header">
        <h3>Map</h3>
      </div>
      <div className="room__mapselect-content">
        <div className="room__mapselect-content_image">
          <img src={mapImage} alt="map" />
        </div>
        <div className="room__mapselect-content_description">
          <h4>8 Doors - POOLED</h4>
          <p>recommended players: 1-2 <br /> difficulty: ●○○○</p>
          <button>choose map</button>
        </div>
        <div className="room__mapselect-content_type">
          <img src={normalLevel} alt="normal-level" />
        </div>
      </div>
    </div>
  );
}

export default MapSelect;