import React from "react";
import "./Footer.css";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import logo from "../../Assets/cruz_logo-min.png";

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer-spacer"></div>
      <div className="footer-content">
        <div className="footer-icons__container">
          <FaGithub className="footer-icons" />
          <SiLinkedin className="footer-icons" />
          <FaTwitter className="footer-icons" />
        </div>
        <div className="footer-email">
          <a>dan@dancruzstudio.com</a>
        </div>
      </div>
      <div className="footer-copy">
        www.dancruzstudio.com | <img src={logo} className="footer-logo" />{" "}
        &copy; Dan Cruz Studio 2022
      </div>
    </section>
  );
}
