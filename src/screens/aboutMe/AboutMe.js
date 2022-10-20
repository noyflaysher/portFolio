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
          I am passionate about creative thinking, highly motivated to learn new things and always looking for ways to challenge myself.
          I'm independent person with self-learning capabilities, great interpersonal skills and really love to work in a team.
          <br></br>
          <br></br>

          When I'm not coding, you'll find me doing sport especially yoga ;)


        </p>
        <p>
          <b>Looking for a challenging development role.</b>
        </p>
        <a className="cv" href="https://www.docdroid.net/Mnk1Cle/noy-flaysher-316221043-cv-pdf" target="_blank"> Download my CV</a>
      </div>
    </div>
  );
}

export default AboutMe;
