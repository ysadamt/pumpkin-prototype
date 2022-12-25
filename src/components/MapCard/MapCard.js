import React from "react";
import normalMode from "../../assets/gamemodes/normal.svg";
import freezeMode from "../../assets/gamemodes/freeze.svg";
import "./MapCard.css";

const MapCard = (props) => {
  return (
    <div className="mapCard__container">
      <img
        src={require(`../../assets/maps/${props.map.image}`)}
        alt={props.map.name}
      />
      <div className="mapCard__container-text">
        <h3>
          {props.map.name} - {props.map.author}
        </h3>
        <p>
          recommended players: {props.map.players}
          <br />
          difficulty: {props.map.difficulty}
        </p>
      </div>
      <div className="mapCard__container-gamemodes">
        {props.map.gamemodes.map((gamemode) => {
          if (gamemode === "normal") {
            return <img src={normalMode} alt="normal"/>;
          } else {
            return <img src={freezeMode} alt="freeze"/>;
          }
        })}
      </div>
    </div>
  );
};

export default MapCard;
