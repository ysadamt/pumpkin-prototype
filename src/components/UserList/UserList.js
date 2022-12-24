import React from "react";
import "./UserList.css";

const userDot = "⬤ ";

const UserList = ({ type, dummyUsers }) => {
  return (
    <div
      className="room__userlist"
      style={{
        marginRight: type === "Players" ? "1rem" : "none",
        marginLeft: type === "Spectators" ? "1rem" : "none",
      }}
    >
      <div className="room__userlist-header">
        <h3>{type}</h3>
      </div>
      <div className="room__userlist-content">
        <ul>
          {dummyUsers.map((user) => (
            <li key={user}>
              {`⬤ ${user}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
