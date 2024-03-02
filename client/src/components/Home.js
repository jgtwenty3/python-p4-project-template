import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
import logo from './FostrLogo.png';



function Home() {
    return (
      <div className="navbar-wrapper">
        <NavLink to="/">
          <img src={logo} className="App-logo" alt="Fostr" />
        </NavLink>
        <nav>
          <ul className="navbar-list">
            <li>
              <NavLink to="/about-fostr" className="nav-link">
                What is Fostr?
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup" className="nav-link">
                Signup
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  
  export default Home;