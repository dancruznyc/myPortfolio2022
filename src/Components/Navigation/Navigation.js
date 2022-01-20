import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  function hamburgerNav() {
    const headerNavBtn = document.querySelector(
      ".header__hamburger-btn-background"
    );
    const headerNavBackground = document.querySelector(
      ".header__nav-background"
    );
    const mainNavTop = document.querySelector(".header__hamburger-icon-top");
    const mainNavMid = document.querySelector(".header__hamburger-icon");
    const mainNavBtm = document.querySelector(".header__hamburger-icon-bottom");
    const mainNavList = document.querySelector(".header__nav-list");
    if (headerNavBackground.style.opacity === "0") {
      headerNavBackground.style.transform = "scale(195)";
      headerNavBackground.style.opacity = "1";
      mainNavMid.style.opacity = "0";
      mainNavTop.style.cssText = "transform: rotate(135deg); top: 3.2rem";
      mainNavBtm.style.cssText = "transform: rotate(-135deg); top: 3.2rem";
      mainNavList.style.cssText = "left: 50%; visibility: visible; opacity: 1";
    } else {
      headerNavBackground.style.transform = "scale(1)";
      headerNavBackground.style.opacity = "0";
      mainNavMid.style.opacity = "1";
      mainNavTop.style.cssText = "transform: rotate(0); top: 2.2";
      mainNavBtm.style.cssText = "transform: rotate(0); top: 4.2";
      mainNavList.style.cssText = "left: 0; visibility: invisible; opacity: 0";
    }
  }
  return (
    <>
      <div className="header__nav-background">&nbsp;</div>
      <div className="header__hamburger-btn-container">
        <div
          className="header__hamburger-btn-background"
          onClick={hamburgerNav}
        >
          <div className="header__hamburger-btn">
            <span className="header__hamburger-icon-top">&nbsp;</span>
            <span className="header__hamburger-icon">&nbsp;</span>
            <span className="header__hamburger-icon-bottom">&nbsp;</span>
          </div>
        </div>
      </div>
      <nav className="header__nav-container">
        <div className="header__nav-list">
          <Link className="header__nav-links" to="/" onClick={hamburgerNav}>
            Home
          </Link>
          <Link
            className="header__nav-links"
            to="/about"
            onClick={hamburgerNav}
          >
            About Me
          </Link>
          <Link
            className="header__nav-links"
            to="/portfolio"
            onClick={hamburgerNav}
          >
            Web Dev Portfolio
          </Link>
          <Link
            className="header__nav-links"
            to="/contact"
            onClick={hamburgerNav}
          >
            Contact
          </Link>
          <Link className="header__nav-links" to="/">
            Resume
          </Link>
        </div>
      </nav>
    </>
  );
}
