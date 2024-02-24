import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
import logo from './FostrLogo.png';


function NavBar() {
  return (
    <div className="navbar-wrapper">
      <img src={logo} className="App-logo" alt="Fostr" />
      <nav>
        <ul className="navbar-list">
          <li>
            <NavLink exact = "true" to="/" className="nav-link">
              Animal Information
            </NavLink>
          </li>
          <li>
            <NavLink exact = "true" to="/add-animal" className="nav-link">
              Add a New Animal
            </NavLink>
          </li>
          <li>
            <NavLink exact = "true" to="/fostr-friends" className="nav-link">
              Fostr Friends
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;