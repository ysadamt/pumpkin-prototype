import React, { useState } from "react";
import "./Lobby.css";

import ChatBox from "../../components/ChatBox/ChatBox";
import MapSelect from "../../components/MapSelect/MapSelect";
import UserList from "../../components/UserList/UserList";
import MapMenu from "../../containers/MapMenu/MapMenu";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

// sample users to fill "Players" and "Spectators" sections
const players = ["POOLED (host)", "jas"];
const spectators = ["GMHikaru", "shigetora", "guitarhero"];

const Lobby = () => {
  const [chooseMap, setChooseMap] = useState(false);
  const [currentMap, setCurrentMap] = useState(undefined);

  /**
   * Handles event when "choose map" button is clicked
   * Set chooseMap state to the opposite of the previous state
   */
  const handleOnChoose = () => {
    setChooseMap((prev) => !prev);
  };

  /**
   * Handles event when a map is selected from MapMenu
   * Set currentMap state to the newly selected map
   * @param {Map} map Map object
   */
  const handleOnSelected = (map) => {
    setCurrentMap(map);
  };

  return (
    <>
      {/* MapMenu (hidden until chooseMap state is true) */}
      <MapMenu
        hide={!chooseMap}
        onChoose={handleOnChoose}
        onSelected={handleOnSelected}
      />

      {/* Header */}
      <div className="room__container">
        <div className="room__container-header">
          <h1>Untitled Room</h1>
        </div>

        {/* Sections: Players, Spectators, Map, Chat */}
        <div className="room__container-content">
          <div className="room__container-content_left">
            <div className="room__container-content_left-top">
              <UserList type="Players" dummyUsers={players} />
              <UserList type="Spectators" dummyUsers={spectators} />
            </div>
            <MapSelect onChoose={handleOnChoose} currentMap={currentMap} />
          </div>
          <ChatBox />
        </div>

        {/* Buttons */}
        <div className="room__container-buttons">
          <Button name="start" handleClick={() => {}} />
          <Button name="spectate" handleClick={() => {}} />
          <Link to="leaderboard">
            <Button name="leave" handleClick={() => {}} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Lobby;
