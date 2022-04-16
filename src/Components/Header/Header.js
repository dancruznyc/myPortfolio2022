import React from "react";
import "./Header.css";
import logo from "../../Assets/cruz_logo-min.png";
import { Link } from "react-router-dom";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function () {
  return (
    <>
      <section className="header">
        <div className="header-left"></div>
        <div className="header-right"></div>
        <div className="header-content">
          <Link className="header-logo__container" to="/">
            <img src={logo}></img>
          </Link>
        </div>
      </section>
    </>
  );
}
