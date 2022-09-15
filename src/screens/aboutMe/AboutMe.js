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
          I'm independent with self-learning capabilities, very good interpersonal skills and really love to work in a team.
          <br></br>

          When I'm not coding, you'll find me doing sport especially yoga ;)


        </p>
        <p>
          <b>Looking for a challenging development role.</b>
        </p>
        <a className="cv" href="https://online.flippingbook.com/view/691422814/" target="_blank"> Download my CV</a>
      </div>
    </div>
  );
}

export default AboutMe;
