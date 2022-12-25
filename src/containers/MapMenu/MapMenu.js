import React from "react";
import normalMode from "../../assets/gamemodes/normal.svg";
import freezeMode from "../../assets/gamemodes/freeze.svg";
import Button from "../../components/Button/Button";
import MapCard from "../../components/MapCard/MapCard";
import { SAMPLE_MAPS } from "./SampleMaps";
import "./MapMenu.css";

const MapMenu = (props) => {
  return (
    <div
      className={props.hide ? "hidden window" : "scrollable window"}
      style={{ zIndex: 1 }}
    >
      <div className="mapMenu__container">
        <div className="mapMenu__container-close">
          <Button name="close" handleClick={() => props.onChoose()} />
        </div>
        <div className="mapMenu__container-header">
          <h1>level select</h1>
        </div>
        <div className="mapMenu__container-gamemodes">
          <h3>choose gamemode</h3>
          <div className="mapMenu__container-gamemodes_icons">
            <img src={normalMode} alt="normal" />
            <img src={freezeMode} alt="freeze" />
          </div>
        </div>
        <div className="mapMenu__container-mapGrid">
          {SAMPLE_MAPS.map((map) => (
            <MapCard map={map} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapMenu;
