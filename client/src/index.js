import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";


import App from "./components/App.js";
import AddAnimalForm from "./components/AddAnimalForm.js";
import AnimalContainer from "./components/AnimalContainer.js";
import FostrFriends from "./components/FostrFriends.js";
import AnimalCard from "./components/AnimalCard.js";
import "./index.css";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/add-animal" element={<AddAnimalForm />} />
        <Route path="/animals" element={<AnimalContainer />} />
        <Route path="/fostr-friends" element={<FostrFriends />} />
        <Route path="/animals/:id" element={<AnimalCard />} />
      </Routes>
    </Router>
  );
};

// Render the AppRouter component
const container = document.getElementById("root");
ReactDOM.render(<AppRouter />, container);