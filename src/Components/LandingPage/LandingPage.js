import React from "react";
import Blurb from "../Blurb/Blurb";
import "./LandingPage.css";
import picture from "../../Assets/Daniel-4.png";

export default function LandingPage() {
  return (
    <section className="landing-page">
      <div className="img-container">
        <img src={picture}></img>
      </div>
      <div className="img-spacer-small"></div>
      <Blurb button={true} padBot={true} />
    </section>
  );
}
