import React from "react";
import "./UserList.css";

const UserList = ({ type, dummyUsers }) => {
  /**
   * PROPS:
   * @param {string} type type of UserList; can be Players or Spectators
   * @param {string[]} dummyUsers string array of names of users
   */

  return (
    <div
      className="room__userlist"
      style={{
        // different margins depending on the type of UserList
        marginRight: type === "Players" ? "1rem" : "none",
        marginLeft: type === "Spectators" ? "1rem" : "none",
      }}
    >
      <div className="room__userlist-header">
        <h3>{type}</h3>
      </div>
      <div className="room__userlist-content">
        <ul>
          {/* map all the dummy users */}
          {dummyUsers.map((user) => (
            <li key={user}>{`⬤ ${user}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
