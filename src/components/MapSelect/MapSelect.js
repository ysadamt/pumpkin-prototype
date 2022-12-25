import React from "react";
import normalMode from "../../assets/gamemodes/normal.svg";
import freezeMode from "../../assets/gamemodes/freeze.svg";
import Button from "../Button/Button";
import "./MapSelect.css";

const MapSelect = ({ currentMap, onChoose }) => {
  /**
   * PROPS:
   * @param {Map | undefined} currentMap current map displayed in MapSelect
   * @param {() => void} onChoose sets the chooseMap state in parent, determines if MapMenu is open or closed
   */

  return (
    <div className="room__mapselect">
      <div className="room__mapselect-header">
        <h3>Map</h3>
      </div>
      {/* render different layouts depending if currentMap is defined */}
      {currentMap === undefined ? (
        <div className="room__mapselect-content_empty">
          <h2>no map selected</h2>
          <Button name="choose map" handleClick={() => onChoose()} />
        </div>
      ) : (
        <div className="room__mapselect-content">
          <div className="room__mapselect-content_image">
            <img
              src={require(`../../assets/maps/${currentMap.image}`)}
              alt={currentMap.name}
            />
          </div>
          <div className="room__mapselect-content_description">
            <h3>{currentMap.name}</h3>
            <h4>by {currentMap.author}</h4>
            <p>
              recommended players: {currentMap.players}
              <br />
              difficulty: {currentMap.difficulty}
            </p>
            <Button name="choose map" handleClick={() => onChoose()} />
          </div>
          <div className="room__mapselect-content_type">
            {/* map out all the gamemodes */}
            {currentMap.gamemodes.map((gamemode) => {
              if (gamemode === "normal") {
                return <img key={gamemode} src={normalMode} alt="normal" />;
              } else {
                return <img key={gamemode} src={freezeMode} alt="freeze" />;
              }
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MapSelect;
