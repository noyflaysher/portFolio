import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import "./socialMedia.css";

function SocialMedia() {
  return (
    <div className="socialMedia" id="#social-media">
      <h1>Connect with me</h1>
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/noy-flaysher-037205227/"
          target="_blank"
        >
          <LinkedInIcon sx={{ fontSize: 45, color: "white" }} />
        </a>
      </div>
      <div className="social-icons">
        <a href="https://github.com/noyflaysher" target="_blank">
          <GitHubIcon sx={{ fontSize: 45, color: "white" }} />
        </a>
      </div>
      <div className="social-icons">
        <a href="https://www.facebook.com/noy.flaysher/" target="_blank">
          <FacebookOutlinedIcon sx={{ fontSize: 45, color: "white" }} />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
