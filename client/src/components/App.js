import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import AnimalContainer from "./AnimalContainer.js";
import NavBar from "./NavBar.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AnimalContainer />
    </div>
  );
}

export default App;
