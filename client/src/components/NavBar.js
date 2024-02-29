import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
import logo from './FostrLogo.png';


function NavBar() {
  return (
    <div className="navbar-wrapper">
      <NavLink to="/animals">
        <img src={logo} className="App-logo" alt="Fostr" />
      </NavLink>
      <nav>
        <ul className="navbar-list">
          <li>
            <NavLink to="/animals" className="nav-link">
              Animal Information
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-animal" className="nav-link">
              Add a New Animal
            </NavLink>
          </li>
          <li>
            <NavLink to="/shelters" className="nav-link">
              Shelters
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-shelter" className="nav-link">
              Add a New Shelter
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;