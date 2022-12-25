import React, { useState } from "react";
import mapImage from "../../assets/maps/8-doors.svg";
import normalMode from "../../assets/gamemodes/normal.svg";
import Button from "../Button/Button";
import "./MapSelect.css";

const MapSelect = (props) => {
  const [currentMap, setCurrentMap] = useState({});

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
          <h3>8 Doors</h3>
          <h4>by POOLED</h4>
          <p>
            recommended players: 1-2 <br /> difficulty: ●○○○
          </p>
          <Button name="choose map" handleClick={() => props.onChoose()} />
        </div>
        <div className="room__mapselect-content_type">
          <img src={normalMode} alt="normal-level" />
        </div>
      </div>
    </div>
  );
};

export default MapSelect;
