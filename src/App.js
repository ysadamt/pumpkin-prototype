import react, { useState, useEffect } from "react";
import "./App.css";

import ChatBox from "./components/ChatBox/ChatBox";
import MapSelect from "./components/MapSelect/MapSelect";
import UserList from "./components/UserList/UserList";
import MapMenu from "./containers/MapMenu/MapMenu";

const players = ["POOLED (host)", "jas"];
const spectators = ["GMHikaru", "shigetora", "mrekk"];

function App() {
  const [chooseMap, setChooseMap] = useState(false);

  useEffect(() => {
    setChooseMap(false);
  }, []);

  const handleOnChoose = () => {
    setChooseMap((prev) => !prev);
    console.log(chooseMap);
  };

  return (
    <>
      <MapMenu hide={!chooseMap} />
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
            <MapSelect onChoose={handleOnChoose} />
          </div>
          <ChatBox />
        </div>

        <div className="room__container-buttons">
          <button>start</button>
          <button>spectate</button>
          <button>leave</button>
        </div>
      </div>
    </>
  );
}

export default App;
