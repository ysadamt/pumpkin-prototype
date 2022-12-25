import React, { useState } from "react";
import "./App.css";

import ChatBox from "./components/ChatBox/ChatBox";
import MapSelect from "./components/MapSelect/MapSelect";
import UserList from "./components/UserList/UserList";
import MapMenu from "./containers/MapMenu/MapMenu";
import Button from "./components/Button/Button";

const players = ["POOLED (host)", "jas"];
const spectators = ["GMHikaru", "shigetora", "mrekk"];

function App() {
  const [chooseMap, setChooseMap] = useState(false);
  const [currentMap, setCurrentMap] = useState(undefined);

  const handleOnChoose = () => {
    setChooseMap((prev) => !prev);
  };

  const handleOnSelected = (map) => {
    setCurrentMap(map);
  };

  return (
    <>
      <MapMenu
        hide={!chooseMap}
        onChoose={handleOnChoose}
        onSelected={handleOnSelected}
      />
      <div className="room__container">
        <div className="room__container-header">
          <h1>Untitled Room</h1>
        </div>

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

        <div className="room__container-buttons">
          <Button name="start" handleClick={() => {}} />
          <Button name="spectate" handleClick={() => {}} />
          <Button name="leave" handleClick={() => {}} />
        </div>
      </div>
    </>
  );
}

export default App;
