import "./App.css";
import mapImage from "./assets/map.svg";
import normalLevel from "./assets/normal-level.svg";

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

          <div className="room__container-map">
            <div className="room__container-map_header">
              <h3>Map</h3>
            </div>
            <div className="room__container-map_content">
              <div className="room__container-map_content-image">
                <img src={mapImage} alt="map" />
              </div>
              <div className="room__container-map_content-description">
                <h4>8 Doors - POOLED</h4>
                <p>recommended players: 1-2 <br /> difficulty: ●○○○</p>
                <button>choose map</button>
              </div>
              <div className="room__container-map_content-type">
                <img src={normalLevel} alt="normal-level" />
              </div>

            </div>
          </div>

        </div>

        <div className="room__container-chat">
          <div className="room__container-chat_header">
            <h3>Chat</h3>

          </div>
          <div className="room__container-chat_content">
            <div className="room__container-chat_history">
              <p>POOLED: hello <br /> jas: hi <br /> POOLED: how are you? <br /> jas: good <br /> POOLED: nice <br /> jas: thanks <br /> POOLED: no problem <br /> jas: bye <br /> POOLED: bye</p>
            </div>
            <div className="room__container-chat_input">
              <input type="text" placeholder="Type a message..." />
            </div>
          </div>
        </div>

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
