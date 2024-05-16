import React, { useEffect } from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import css from "./skills.module.css"
export default function StackProgress() {
  
  const skills = [
    {name: "JavaScript", proficiency: 4},
    {name: "HTML", proficiency: 5},
    {name: "CSS", proficiency: 5},
    {name: "React", proficiency: 4},
    {name: "Node.js", proficiency: 3},
    {name: "Python", proficiency: 3}
    // Add more skills as needed
  ];
  const ratings = [
    {name: "JavaScript", proficiency: 4},
    {name: "HTML", proficiency: 5},
    {name: "CSS", proficiency: 3},
    {name: "React", proficiency: 4},
    {name: "Node.js", proficiency: 3},
    {name: "SQL", proficiency: 3}
  ]; // Example array of ratings

  const StarRating = ({ratings}) => {
    return (
      <div className={css.maintable} >
        
      {ratings.map((skill, index) => (
        <div key={index} className={css.card} >
          <p className={css.name} >{skill.name}</p>
          <div className={css.tab} >
          {[...Array(skill.proficiency)].map((_, starIndex) => (
            

              <span key={starIndex} style={{ color: 'gold' }} className={css.stars} >★</span>

            ))}
            </div>
        </div>
      ))}
    </div>
    );
  };
let arr=[]
  const getRatinArray =(e)=>{
    let d=[...ratings]
    d.forEach(element => {
      element.forEach(subele=>{
       console.log( subele.proficiency)
      });
      arr.push(element.proficiency)
    });
    
  }

  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container" id="Profiency">
          <div className="skills-bar">
            <h1 className="skills-heading">Proficiency</h1>
            {/* {techStack.experience.map((exp, i) => {
              const progressStyle = {
                width: exp.progressPercentage
              };
              return (
                <div key={i} className="skill">
                  <div>
                    <h1>Star Ratings</h1>
                    <StarRating ratings={ratings} />
                  </div>
                  <p>{exp.Stack}</p>
                  <div className="meter">
                    <span style={progressStyle}></span>
                  </div>
                </div>
              );
            })} */}
          </div>
           <div className={css.barBox} >
            
           <StarRating ratings={ratings} />
            </div>

          <div className="skills-image">
            {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : (
              <img
                alt="Skills"
                src={require("../../assets/images/skill.svg")}
              />
            )}
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
