import React, { useState } from "react";
import Button from "../../components/Button/Button";
import LeaderboardSelect from "../../components/LeaderboardSelect/LeaderboardSelect";
import "./Leaderboard.css";

const Leaderboard = () => {
  const [map, setMap] = useState("8 Doors");

  return (
    <>
      <div className="leaderboard__container">
        {/* Header */}
        <div className="leaderboard__container-header">
          <h1>leaderboards</h1>
        </div>

        {/* Map Select, Leaderboard */}
        <div className="leaderboard__container-content">
          <div className="leaderboard__container-content-mapSelect">
            <LeaderboardSelect />
          </div>
          <div className="leaderboard__container-content-leaderboard">{}</div>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
