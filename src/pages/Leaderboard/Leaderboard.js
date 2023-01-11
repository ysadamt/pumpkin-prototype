import React, { useState } from "react";
import LeaderboardSelect from "../../components/LeaderboardSelect/LeaderboardSelect";
import "./Leaderboard.css";
import { SAMPLE_LEADERBOARDS } from "./SampleLeaderboards";

const Leaderboard = () => {
  const [currentLeaderboard, setCurrentLeaderboard] = useState("8 Doors");

  const handleLeaderboardSelect = (leaderboard) => {
    setCurrentLeaderboard(leaderboard);
  };

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
                    <thead>
                      <tr>
                        <th>rank</th>
                        <th>date</th>
                        <th>username</th>
                        <th>score</th>
                        <th>time spent</th>
                        <th>replay</th>
                      </tr>
                    </thead>
                    {filteredLeaderboard.scores.map((score) => (
                      <tr>
                        <td>{score.rank}</td>
                        <td>{score.date}</td>
                        <td>{score.username}</td>
                        <td>{score.score}</td>
                        <td>{score.timeSpent}</td>
                        <td>replay</td>
                      </tr>
                    ))}
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
