import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

export default function NavigationMenu({
  navControl,
  showNavigation,
  setShowNavigation,
}) {
  const cssClasses = [
    "header__nav-list",
    showNavigation ? "header__nav-list--open" : "",
  ];
  return (
    <nav className="header__nav-container">
      <div className={cssClasses.join(" ")}>
        <Link className="header__nav-links" to="/" onClick={navControl}>
          Home
        </Link>
        <Link className="header__nav-links" to="/about" onClick={navControl}>
          About Me
        </Link>
        <Link
          className="header__nav-links"
          to="/portfolio"
          onClick={navControl}
        >
          Web Dev Portfolio
        </Link>
        <Link className="header__nav-links" to="/contact" onClick={navControl}>
          Contact
        </Link>
        <a
          href="https://docs.google.com/document/d/1KnDuugseRE6On_2UUU56vExMIA6gxL0oqsv0CQ2aUzA/edit?usp=sharing"
          target="_blank"
          className="header__nav-links"
          to="/"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
