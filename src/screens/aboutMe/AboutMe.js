import React from "react";
import "./aboutme.css";
import image from "../../images/profile.jpg";

function AboutMe() {
  return (
    <div className="about__container" id="about-me">
      <div>
        <img src={image} alt="person image" />
      </div>
      <div className="about__text">
        <h1>ABOUT ME</h1>
        <p>
          I have a passion for creative thinking and highly motivated to learn new things.
          I'm independent with self-learning capabilities, responsible and reliable with high technical skills. 

        </p>
        <p>
          <b>Looking for a challenging development role.</b>
        </p>
        <a className="cv" href="https://online.flippingbook.com/view/691422814/" target="_blank"> to my CV</a>
      </div>
    </div>
  );
}

export default AboutMe;
