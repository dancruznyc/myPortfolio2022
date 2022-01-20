import React from "react";
import "./About.css";
import picture17 from "../../Assets/Daniel-17.png";
import PhotoCluster from "../PhotoCluster/PhotoCluster";
import art1 from "../../Assets/art1.jpeg";
import art2 from "../../Assets/art2.jpeg";
import art3 from "../../Assets/art3.jpg";
import jewelry1 from "../../Assets/jewelry1.jpeg";
import jewelry2 from "../../Assets/jewelry2.jpeg";
import jewelry3 from "../../Assets/jewelry3.jpeg";
import bible from "../../Assets/bible.jpeg";
import cornsnake from "../../Assets/orchidcornsnake.jpeg";
import chessset from "../../Assets/chessset.png";

export default function About() {
  return (
    <section className="landing-page">
      <div className="img-spacer">
        <div className="img-container">
          <img src={picture17}></img>
        </div>
      </div>
      <div>
        <div className="blurb-container blurb-margin">
          <div className="blurb-content">
            <h2 className="blurb-title"> Personal</h2>
            <p className="blurb-par">
              I'm originally from Brooklyn, NY but currently live in a small
              beach town on the East End of Long Island. I graduated from Devry
              University with an associates in Computer's and Electronic
              Technology.
            </p>
          </div>
        </div>
        <div className="blurb-container blurb-margin">
          <div className="blurb-content">
            <h1 className="blurb-title">Coding Experience</h1>
            <p className="blurb-par">
              I've been coding since 2018. Initially studying on my own until
              2021 when I began studying with Nebula Academy a coding bootcamp
              on Long Island.
            </p>
          </div>
        </div>
        <div className="blurb-container blurb-margin">
          <div className="blurb-content">
            <h1 className="blurb-title">Artwork</h1>
            <p className="blurb-par">
              I spent 6 years as a full time street artist in Manhattan's SoHo
              neighborhood. Through the years I've sold artwork to people from
              across the globe and was in art shows in Brooklyn and Long Island.
            </p>
          </div>
        </div>
        <PhotoCluster pic1={art1} pic2={art2} pic3={art3} />
        <div className="blurb-container blurb-margin">
          <div className="blurb-content">
            <h1 className="blurb-title">Jewelry</h1>
            <p className="blurb-par">
              When I was in Brooklyn I used to work part time for a Jeweler who
              taught me alot about making my own Jewelry. Below are some
              examples of bracelets and a necklace that I made from sterling
              silver and natural stones.
            </p>
          </div>
        </div>
        <PhotoCluster pic1={jewelry2} pic2={jewelry3} pic3={jewelry1} />
        <div className="blurb-container blurb-margin">
          <div className="blurb-content">
            <h1 className="blurb-title">Other Stuff</h1>
            <p className="blurb-par">
              Other things that keep me busy are my interest in chess, rooting
              for the Mets and my 7 pet corn snakes. Last but not least I am one
              of Jehovah's Witnesses so like most Witnesses I am very active
              with my congregation which keeps me pretty busy.
            </p>
          </div>
        </div>
        <PhotoCluster pic1={cornsnake} pic2={chessset} pic3={bible} />
      </div>
    </section>
  );
}
