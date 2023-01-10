import React from "react";
import "./LeaderboardSelect.css";

import { SAMPLE_LEADERBOARDS } from "../../pages/Leaderboard/SampleLeaderboards";

const LeaderboardSelect = () => {
  return (
    <div className="leaderboard-select__container">
      {SAMPLE_LEADERBOARDS.map((leaderboard) => 
        <div className="leaderboard-select__container-map">
          {leaderboard.name}
        </div>
      )}
    </div>
  )
}

export default LeaderboardSelect