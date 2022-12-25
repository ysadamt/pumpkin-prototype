import React from "react";
import normalMode from "../../assets/gamemodes/normal.svg";
import freezeMode from "../../assets/gamemodes/freeze.svg";
import "./MapCard.css";

const MapCard = ({ map }) => {
  /**
   * PROPS:
   * @param {Map} map Map object to be displayed on the card
   */

  return (
    <div className="mapCard__container">
      <div className="mapCard__container-mapImg">
        <img
          src={require(`../../assets/maps/${map.image}`)}
          alt={map.name}
        />
      </div>
      <div className="mapCard__container-info">
        <div className="mapCard__container-text">
          <h2>{map.name}</h2>
          <h3>by {map.author}</h3>
          <p>
            recommended players: {map.players}
            <br />
            difficulty: {map.difficulty}
          </p>
        </div>
        <div className="mapCard__container-gamemodes">
          {/* map out all the gamemodes */}
          {map.gamemodes.map((gamemode) => {
            if (gamemode === "normal") {
              return <img key={gamemode} src={normalMode} alt="normal" />;
            } else {
              return <img key={gamemode} src={freezeMode} alt="freeze" />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default MapCard;
