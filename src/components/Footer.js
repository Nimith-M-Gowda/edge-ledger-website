import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import "../styles/Footer.css";
function Footer(props) {
  return (
    <div id="Footer-container">
      <div className="logo-container">
        <FaFacebook className="logo" />
        <FaTwitter className="logo" />
        <FaYoutube className="logo" />
        <FaLinkedin className="logo" />
      </div>
      <p>Copyright&copy;2020 - EdgeLedger</p>
    </div>
  );
}

export default Footer;
