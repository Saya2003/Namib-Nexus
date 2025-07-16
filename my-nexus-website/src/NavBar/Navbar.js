// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAtom } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

function Navbar() {
  const [activePage, setActivePage] = useState("Home");

  const handleSetActive = (page) => {
    setActivePage(page);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => handleSetActive("Home")}>
          <FontAwesomeIcon icon={faAtom} /> Namib-Nexus
        </Link>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link
              to="/"
              className={activePage === "Home" ? "nav-links active" : "nav-links"}
              onClick={() => handleSetActive("Home")}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/learn"
              className={activePage === "Learn" ? "nav-links active" : "nav-links"}
              onClick={() => handleSetActive("Learn")}
            >
              Learn
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/quiz"
              className={activePage === "Quiz" ? "nav-links active" : "nav-links"}
              onClick={() => handleSetActive("Quiz")}
            >
              Quiz
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/dashboard"
              className={activePage === "Dashboard" ? "nav-links active" : "nav-links"}
              onClick={() => handleSetActive("Dashboard")}
            >
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/login"
              className={activePage === "Login" ? "nav-links active" : "nav-links"}
              onClick={() => handleSetActive("Login")}
            >
              Login/Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
