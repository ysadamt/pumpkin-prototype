import React, { useState } from "react";
import LeaderboardSelect from "../../components/LeaderboardSelect/LeaderboardSelect";
import Button from "../../components/Button/Button";
import "./Leaderboard.css";
import { SAMPLE_LEADERBOARDS } from "./SampleLeaderboards";
import { Link } from "react-router-dom";

const Leaderboard = () => {
  // state to keep track of the current leaderboard selected
  const [currentLeaderboard, setCurrentLeaderboard] = useState("8 Doors");

  // function to handle leaderboard selection
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
            {/* use current state to filter out the current leaderboard selected in the sample array */}
            {SAMPLE_LEADERBOARDS.filter(
              (leaderboard) => leaderboard.name === currentLeaderboard
            ).map((filteredLeaderboard) => (
              <div
                className="leaderboard__container-content-leaderboard-scroll"
                key={filteredLeaderboard.id}
              >
                {/* display 'no entries' message if the array of scores is empty */}
                {/* otherwise, display the leaderboard */}
                {filteredLeaderboard.scores.length === 0 ? (
                  <div className="leaderboard__container-content-noScores">
                    <h1>no entries yet :</h1>
                    <h2>you can be the first to submit a score!</h2>
                  </div>
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
                    <tbody>
                      {/* show each leaderboard entry */}
                      {filteredLeaderboard.scores.map((score) => (
                        <tr key={score.rank}>
                          <td>{score.rank}</td>
                          <td>{score.date}</td>
                          <td>{score.username}</td>
                          <td>{score.score}</td>
                          <td>{score.timeSpent}</td>
                          <td>
                            <Button name="watch" handleClick={() => {}} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="leaderboard__container-footer">
        {/* close button */}
          <Link to="/">
            <Button name="close" handleClick={() => {}} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
