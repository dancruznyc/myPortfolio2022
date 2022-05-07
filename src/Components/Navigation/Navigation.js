import React, { useState } from "react";
import "./Navigation.css";

export default function Navigation({
  showNavigation,
  setShowNavigation,
  navControl,
}) {
  const modalBackgroundCSS = [
    "header__nav-background",
    showNavigation ? "header__nav-background--open" : "",
  ];

  const topLineCSS = [
    "header__hamburger-icon-top",
    showNavigation ? "header__hamburger-icon-top--active" : "",
  ];
  const midLineCSS = [
    "header__hamburger-icon",
    showNavigation ? "header__hamburger-icon--active" : "",
  ];
  const botLineCSS = [
    "header__hamburger-icon-bottom",
    showNavigation ? "header__hamburger-icon-bottom--active" : "",
  ];

  return (
    <>
      <div className={modalBackgroundCSS.join(" ")}>&nbsp;</div>
      <div className="header__hamburger-btn-container">
        <div className="header__hamburger-btn-background" onClick={navControl}>
          <div className="header__hamburger-btn">
            <span className={topLineCSS.join(" ")}>&nbsp;</span>
            <span className={midLineCSS.join(" ")}>&nbsp;</span>
            <span className={botLineCSS.join(" ")}>&nbsp;</span>
          </div>
        </div>
      </div>
    </>
  );
}
