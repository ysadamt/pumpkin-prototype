import React, { useState, useEffect } from "react";
import normalMode from "../../assets/gamemodes/normal.svg";
import freezeMode from "../../assets/gamemodes/freeze.svg";
import Button from "../../components/Button/Button";
import MapCard from "../../components/MapCard/MapCard";
import { SAMPLE_MAPS } from "./SampleMaps";
import "./MapMenu.css";

const MapMenu = (props) => {
  const [currentMode, setCurrentMode] = useState("all");

  const handleModeChange = (gamemode) => {
    setCurrentMode(gamemode);
  };

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
            <button
              id={
                currentMode === "normal" ? "gamemodeSelected" : "gamemodeSelect"
              }
              onClick={() => {
                currentMode === "normal"
                  ? handleModeChange("all")
                  : handleModeChange("normal");
              }}
            >
              <img src={normalMode} alt="normal" />
            </button>
            <button
              id={
                currentMode === "freeze" ? "gamemodeSelected" : "gamemodeSelect"
              }
              onClick={() => {
                currentMode === "freeze"
                  ? handleModeChange("all")
                  : handleModeChange("freeze");
              }}
            >
              <img src={freezeMode} alt="freeze" />
            </button>
          </div>
        </div>
        <div className="mapMenu__container-mapGrid">
          {/* pseudocode:
              if currentMode is "all", render all maps
              if currentMode is "normal", filter out maps that don't have "normal" in their gamemodes array, and render those maps
              if currentMode is "freeze", filter out maps that don't have "freeze" in their gamemodes array, and render those maps
           */}
          {currentMode === "all"
            ? SAMPLE_MAPS.map((map) => (
                <div
                  key={map.id}
                  onClick={() => {
                    props.onChoose();
                    props.onSelected(map);
                  }}
                >
                  <MapCard key={map.id} map={map} />
                </div>
              ))
            : currentMode === "normal"
            ? SAMPLE_MAPS.filter((map) => map.gamemodes.includes("normal")).map(
                (filteredMap) => (
                  <div
                    key={filteredMap.id}
                    onClick={() => {
                      props.onChoose();
                      props.onSelected(filteredMap);
                    }}
                  >
                    <MapCard key={filteredMap.id} map={filteredMap} />
                  </div>
                )
              )
            : SAMPLE_MAPS.filter((map) => map.gamemodes.includes("freeze")).map(
                (filteredMap) => (
                  <div
                    key={filteredMap.id}
                    onClick={() => {
                      props.onChoose();
                      props.onSelected(filteredMap);
                    }}
                  >
                    <MapCard key={filteredMap.id} map={filteredMap} />
                  </div>
                )
              )}
        </div>
      </div>
    </div>
  );
};

export default MapMenu;
