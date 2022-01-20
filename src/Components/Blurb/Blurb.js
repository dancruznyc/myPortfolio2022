import React from "react";
import "./Blurb.css";
import picture from "../../Assets/Daniel-4.png";
import { Link } from "react-router-dom";

export default function Blurb(props) {
  return (
    <div
      className={props.padBot ? "blurb-container pad-bot" : "blurb-container"}
    >
      <div className="blurb-content">
        <h1 className="blurb-title">Hi, I'm Dan!</h1>

        <p className="blurb-par">
          I'm a software engineer from New York. I love everything from
          designing frontend UI/UX to problem solving backend logic. Do you need
          a software engineer? I'm here to help!
        </p>
        {props.button ? (
          <Link to="about" className="blurb-link">
            More About Me &rarr;
          </Link>
        ) : null}
      </div>
    </div>
  );
}
