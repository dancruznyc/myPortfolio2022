import React, { useState } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import NavigationMenu from "./NavigationMenu";

export default function Navigation() {
  const [showNavigation, setShowNavigation] = useState(false);
  // function hamburgerNav() {
  //   const headerNavBtn = document.querySelector(
  //     ".header__hamburger-btn-background"
  //   );
  //   const headerNavBackground = document.querySelector(
  //     ".header__nav-background"
  //   );
  //   const mainNavTop = document.querySelector(".header__hamburger-icon-top");
  //   const mainNavMid = document.querySelector(".header__hamburger-icon");
  //   const mainNavBtm = document.querySelector(".header__hamburger-icon-bottom");
  //   const mainNavList = document.querySelector(".header__nav-list");
  //   if (headerNavBackground.style.opacity === "0") {
  //     headerNavBackground.style.transform = "scale(195)";
  //     headerNavBackground.style.opacity = "1";
  //     mainNavMid.style.opacity = "0";
  //     mainNavTop.style.cssText = "transform: rotate(135deg); top: 3.2rem";
  //     mainNavBtm.style.cssText = "transform: rotate(-135deg); top: 3.2rem";
  //     mainNavList.style.cssText = "left: 50%; visibility: visible; opacity: 1";
  //   } else {
  //     headerNavBackground.style.transform = "scale(1)";
  //     headerNavBackground.style.opacity = "0";
  //     mainNavMid.style.opacity = "1";
  //     mainNavTop.style.cssText = "transform: rotate(0); top: 2.2";
  //     mainNavBtm.style.cssText = "transform: rotate(0); top: 4.2";
  //     mainNavList.style.cssText = "left: 0; visibility: invisible; opacity: 0";
  //   }
  // }

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

  function navControl() {
    if (!showNavigation) {
      setShowNavigation(true);
    } else setShowNavigation(false);
  }
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
      <NavigationMenu
        showNavigation={showNavigation}
        setShowNavigation={setShowNavigation}
        navControl={navControl}
      />
    </>
  );
}
