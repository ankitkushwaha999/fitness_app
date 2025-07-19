import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <a href="https://github.com/ankitkushwaha999"><img src={Github} alt="" /></a>
          <a href="https://www.instagram.com/ankit_1_0_8?igsh=ZXNtMDNla3lkeG0="><img src={Instagram} alt="" /></a>
          <a href="https://www.linkedin.com/in/ankit-kushwaha-2b6239340/"><img src={LinkedIn} alt="" /></a>
        </div>
        <div className="logo-f">
            <img src={Logo} alt="" />
        </div>
      </div>
      <div className="blur blur-f"></div>
      <div className="blur blur-f"></div>
    </div>
  );
};

export default Footer;