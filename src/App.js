import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Leaderboard from "./pages/Leaderboard/Leaderboard";
import Lobby from "./pages/Lobby/Lobby";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Lobby />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
    </Routes>
  );
};

export default App;
