import React, { useState, useEffect } from "react";
import LeaderboardSelect from "../../components/LeaderboardSelect/LeaderboardSelect";
import "./Leaderboard.css";
import { SAMPLE_LEADERBOARDS } from "./SampleLeaderboards";

const Leaderboard = () => {
  const [currentLeaderboard, setCurrentLeaderboard] = useState("8 Doors");

  const handleLeaderboardSelect = (leaderboard) => {
    setCurrentLeaderboard(leaderboard);
  };

  useEffect(() => {
    console.log(currentLeaderboard);
  }, [currentLeaderboard]);

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
            <LeaderboardSelect
              currentLeaderboard={currentLeaderboard}
              handleLeaderboardSelect={handleLeaderboardSelect}
            />
          </div>
          <div className="leaderboard__container-content-leaderboard">
            {SAMPLE_LEADERBOARDS.filter(
              (leaderboard) => leaderboard.name === currentLeaderboard
            ).map((filteredLeaderboard) => (
              <>
                {filteredLeaderboard.scores.length === 0 ? (
                  <h1>no scores yet</h1>
                ) : (
                  <table>
                    <tr>
                      <th>rank</th>
                      <th>date</th>
                      <th>username</th>
                      <th>score</th>
                      <th>time spent</th>
                      <th>replay</th>
                    </tr>
                  </table>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
