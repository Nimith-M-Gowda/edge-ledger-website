import React from "react";
import { FaBookOpen } from "react-icons/fa";
import "../styles/Navbar.css";
function Navbar(props) {
  return (
    <div id="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <div className="logo-icon">
            <FaBookOpen className="book-icon" />
          </div>
          <p className="logo-title">
            <span className="highlighed-text">Edge</span> Ledger
          </p>
        </div>
        <div className="navigation-container">
          <ul>
            <li className="navigation-item">Home</li>
            <li className="navigation-item">About</li>
            <li className="navigation-item">Cases</li>
            <li className="navigation-item">Blog</li>
            <li className="navigation-item">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
