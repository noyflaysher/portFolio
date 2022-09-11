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
          Independent with self-learning capabilities , highly motivated,
          responsible and reliable with high technical skills. . Creative
          thinking for solving technological and interpersonal problems. Looking
          for a challenging development role ***chage
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
