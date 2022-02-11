import React from "react";
import Blurb from "../Blurb/Blurb";
import "./Portfolio.css";
import picture10 from "../../Assets/Daniel-10.png";
import matrixPoker from "../../Assets/matrixpokerpic.png";
import calcProd from "../../Assets/mycalculator.png";
import bingeworthy from "../../Assets/bingeworthy.png";

export default function Portfolio() {
  return (
    <section className="landing-page">
      <div className="img-container">
        <img src={picture10} className="portfolio-img"></img>
      </div>
      <div className="img-spacer"></div>
      <div className="blurb-container blurb-margin">
        <div className="blurb-content">
          <h2 className="blurb-title">Matrix Poker | Game</h2>
          <p className="blurb-par">
            Bejeweled inspired match game with playing cards instead of gems.
            Make poker matches starting with three of a kind to earn points.
            Vanilla HTML, CSS & Javascript. Features recursion, asynchronous
            javascript, drag & drop api.
          </p>
          <div className="project-img__container">
            <a href="https://dancruznyc.github.io/matrixpoker/" target="_blank">
              <img src={matrixPoker}></img>
            </a>
          </div>
        </div>
      </div>
      <div className="blurb-container blurb-margin">
        <div className="blurb-content">
          <h2 className="blurb-title">Multi Calculator</h2>
          <p className="blurb-par">
            Calculator with three different modes. Basic calculator, retirement
            and mortgage. Vanilla HTML, CSS and Javascript. Focus on sleek,
            three dimensional design.
          </p>
          <div className="project-img__container">
            <a
              href="https://dancruznyc.github.io/multicalculator/"
              target="_blank"
            >
              <img src={calcProd}></img>
            </a>
          </div>
        </div>
      </div>
      <div className="blurb-container ">
        <div className="blurb-content">
          <h2 className="blurb-title">Binge Worthy</h2>
          <p className="blurb-par">
            Mock streaming service using The Movie Database api. Programmed
            using React JS.
          </p>
          <div className="project-img__container">
            <a
              href="https://dancruznyc.github.io/multicalculator/"
              target="_blank"
            >
              <img src={bingeworthy}></img>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
