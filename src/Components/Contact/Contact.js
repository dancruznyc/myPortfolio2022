import React from "react";
import "./Contact.css";
import picture17 from "../../Assets/Daniel-17.png";

export default function Contact() {
  return (
    <section className="landing-page">
      <div className="img-spacer">
        <div className="img-container">
          <img src={picture17}></img>
        </div>
      </div>
      <div className="blurb-container pad-side">
        <h2 className="blurb-title blurb-title--small">
          Thanks for Reaching Out!
        </h2>
        <div className="blurb-content form">
          <form action="#">
            <p>
              <input type="text" value-size="40" placeholder="Name"></input>
            </p>
            <p>
              <input type="text" value-size="40" placeholder="Email"></input>
            </p>
            <p>
              <input type="text" value-size="40" placeholder="Subject"></input>
            </p>
            <p>
              <textarea placeholder="Message"></textarea>
            </p>
            <p>
              <input type="submit" value="Send"></input>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
