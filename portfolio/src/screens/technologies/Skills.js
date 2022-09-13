import React from "react";
import DevIcon from "devicon-react-svg";
import { techs } from "../../helpers/techs";
import "./skills.css";

function Skills() {
  return (
    <div className="technologies__container" id="skills">
      <div style={{ textAlign: "center", fontSize: "2.5rem" }}>SKILLS</div>

      <div className="tech__cards__container">
        {techs.map((e, idx) => {
          return (
            <div key={idx} className="tech__card">
              <DevIcon className="tech__icons" icon={e.iconName} />
              <span style={{ margin: "5px", fontSize: "1.5rem" }}>
                {e.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
