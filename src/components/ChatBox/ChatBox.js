import React from 'react';
import './ChatBox.css';

const ChatBox = () => {
  return (
    <div className="room__chatbox">
      <div className="room__chatbox-header">
        <h3>Chat</h3>

      </div>
      <div className="room__chatbox-content">
        <div className="room__chatbox-history">
          <p>POOLED: hello <br /> jas: hi <br /> POOLED: how are you? <br /> jas: good <br /> POOLED: nice <br /> jas: thanks <br /> POOLED: no problem <br /> jas: bye <br /> POOLED: bye</p>
        </div>
        <div className="room__chatbox-input">
          <input type="text" placeholder="Type a message..." />
        </div>
      </div>
    </div>
  );
}

export default ChatBox;