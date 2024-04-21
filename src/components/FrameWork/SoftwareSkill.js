import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
import "./Versioning.css"
export default function SoftwareSkill() {
  return (
    <div>
      <div className="skills-container" id="Profiency">
        <div className="skills-bar">
          <h1 className="skills-heading">Framework and Database</h1>
          <ul className="dev-icons">
            {skillsSection.FrameWork.map((skills, i) => {
              return (
                <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
                >

               
                <div className="imageDiv" >
                  <img src={skills.fontAwesomeClassname}   >
                  </img>
                   <h6>{skills.skillName}</h6>
                  {/* <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li> */}
                </div>
 </li>
              );
            })}
          </ul>
        </div>
        
      </div>
    </div>
  );
}
