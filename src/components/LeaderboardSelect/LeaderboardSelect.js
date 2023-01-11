import React from "react";
import "./LeaderboardSelect.css";

import { SAMPLE_LEADERBOARDS } from "../../pages/Leaderboard/SampleLeaderboards";

const LeaderboardSelect = ({ currentLeaderboard, handleLeaderboardSelect }) => {
  // passing down state and function to handle leaderboard selection from Leaderboard.js

  /**
   * PROPS:
   * @param {string} currentLeaderboard name of current leaderboard selected
   * @param {() => void} handleLeaderboardSelect function to handle leaderboard selection
   */

  return (
    <div className="leaderboard-select__container">
      {/* display all the leaderboards */}
      {SAMPLE_LEADERBOARDS.map((leaderboard) => (
        <div
          className={`leaderboard-select__container-map ${
            currentLeaderboard === leaderboard.name ? "selected" : ""
          }`}
          onClick={() => handleLeaderboardSelect(leaderboard.name)}
          key={leaderboard.id}
        >
          {leaderboard.name}
        </div>
      ))}
    </div>
  );
};

export default LeaderboardSelect;
