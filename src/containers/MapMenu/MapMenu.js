import React from "react";
import "./MapMenu.css";
import normalMode from "../../assets/gamemodes/normal.svg";
import freezeMode from "../../assets/gamemodes/freeze.svg";

const MapMenu = (props) => {
  return (
    <div
      className={props.hide ? "hidden" : "scrollable window"}
      style={{ zIndex: 1 }}
    >
      <div className="mapMenu__container">
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
        <div className="mapMenu__container-mapList"></div>
      </div>
    </div>
  );
};

export default MapMenu;
