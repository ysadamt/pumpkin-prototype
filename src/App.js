import "./App.css";

import ChatBox from "./components/ChatBox/ChatBox";
import MapSelect from "./components/MapSelect/MapSelect";

function App() {
  return (
    <div className="room__container">

      <div className="room__container-header">
        <h1>Untitled Room</h1>
      </div>

      <div className="room__container-content">

        <div className="room__container-content_left">

          <div className="room__container-content_left-top">
            <div className="room__container-players">
              <div className="room__container-players_header">
                <h3>Players</h3>
              </div>
              <div className="room__container-players_content">
                <p>⬤ POOLED (host) <br /> ⬤ jas</p>
              </div>
            </div>

            <div className="room__container-spectators">
              <div className="room__container-spectators_header">
                <h3>Spectators</h3>
              </div>
              <div className="room__container-players_content">
                <p>⬤ GMHikaru <br /> ⬤ shigetora <br /> ⬤ mrekk</p>
              </div>
            </div>
          </div>

          <MapSelect />

        </div>

        <ChatBox />

      </div>

      <div className="room__container-buttons">
        <button>
          start
        </button>
        <button>
          spectate
        </button>
        <button>
          leave
        </button>
      </div>

    </div>
  );
}

export default App;
