import React, { useState } from "react";
import normalMode from "../../assets/gamemodes/normal.svg";
import freezeMode from "../../assets/gamemodes/freeze.svg";
import Button from "../../components/Button/Button";
import MapCard from "../../components/MapCard/MapCard";
import { SAMPLE_MAPS } from "./SampleMaps";
import "./MapMenu.css";

const MapMenu = ({ hide, onChoose, onSelected }) => {
  /**
   * PROPS:
   * @param {boolean} hide determines if MapMenu is hidden
   * @param {() => void} onChoose sets the chooseMap state in parent, determines if MapMenu is open or closed
   * @param {(map) => void} onSelected sets the currentMap state in parent, determines the current selected map
   */

  // currentMode defaults to "all"
  const [currentMode, setCurrentMode] = useState("all");

  /**
   * Handles event when choose gamemode buttons are clicked
   * sets currentMode state depending on which button is clicked
   * @param {string} gamemode values are "all", "normal" or "freeze"
   */
  const handleModeChange = (gamemode) => {
    setCurrentMode(gamemode);
  };

  return (
    <div
      // if hide is true, then window is hidden
      className={hide ? "hidden window" : "scrollable window"}
      // mapMenu appears above everything else
      style={{ zIndex: 1 }}
    >
      <div className="mapMenu__container">
        <div className="mapMenu__container-close">
          {/* close button */}
          <Button name="close" handleClick={() => onChoose()} />
        </div>
        <div className="mapMenu__container-header">
          <h1>level select</h1>
        </div>
        <div className="mapMenu__container-gamemodes">
          <h3>choose gamemode</h3>
          <div className="mapMenu__container-gamemodes_icons">
            {/* button id changes to signify if button is selected */}
            <button
              id={
                currentMode === "normal" ? "gamemodeSelected" : "gamemodeSelect"
              }
              // if currentMode is "normal", clicking it will revert it back to "all"
              onClick={() => {
                currentMode === "normal"
                  ? handleModeChange("all")
                  : handleModeChange("normal");
              }}
            >
              <img src={normalMode} alt="normal" />
            </button>
            {/* button id changes to signify if button is selected */}
            <button
              id={
                currentMode === "freeze" ? "gamemodeSelected" : "gamemodeSelect"
              }
              // if currentMode is "freeze", clicking it will revert it back to "all"
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
          {/* 
              if currentMode is "all", render all maps
              if currentMode is "normal", filter out maps that don't have "normal" in their gamemodes array, and render those maps
              if currentMode is "freeze", filter out maps that don't have "freeze" in their gamemodes array, and render those maps
           */}
          {currentMode === "all"
            ? SAMPLE_MAPS.map((map) => (
                <div
                  key={map.id}
                  onClick={() => {
                    onChoose();
                    onSelected(map);
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
                      onChoose();
                      onSelected(filteredMap);
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
                      onChoose();
                      onSelected(filteredMap);
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
