import React, { useRef } from "react";
import "./Contact.css";
import picture17 from "../../Assets/Daniel-17.png";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tqqw64r",
        "template_weiasea",
        form.current,
        "user_6UP8AMEKWW9kxW1LLGH7g"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <section className="landing-page">
      <div className="img-spacer">
        <div className="img-container">
          <img src={picture17}></img>
        </div>
      </div>
      <div className="blurb-container form-container pad-side">
        <h2 className="blurb-title blurb-title--small">
          Thanks for Reaching Out!
        </h2>
        <div className="blurb-content form">
          <form ref={form} onSubmit={sendEmail}>
            <p>
              <input
                name="name"
                type="text"
                value-size="40"
                placeholder="Name"
              ></input>
            </p>
            <p>
              <input
                name="email"
                type="email"
                value-size="40"
                placeholder="Email"
              ></input>
            </p>
            <p>
              <input
                name="subject"
                type="text"
                value-size="40"
                placeholder="Subject"
              ></input>
            </p>
            <p>
              <textarea name="message" placeholder="Message"></textarea>
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
