import React from 'react';
import "./Profiency.scss";
// Define a list of skills with proficiency levels
const skills = [
  { name: 'JavaScript', proficiency: 'Advanced' },
  { name: 'HTML', proficiency: 'Intermediate' },
  { name: 'CSS', proficiency: 'Intermediate' },
  { name: 'React', proficiency: 'Advanced' },
  { name: 'Node.js', proficiency: 'Intermediate' },
  { name: 'Python', proficiency: 'Intermediate' },
  // Add more skills as needed
];

// Skill component to render each skill item
const Skill = ({ name, proficiency }) => (
  <div className="skill">
    <div className={`proficiency ${proficiency.toLowerCase()}`}>{proficiency}</div>
    <div className="skill-name">{name}</div>
  </div>
);

// Main component to render the skills grid
const SkillsGrid = () => (
  <div className="skills-grid">
    {skills.map((skill, index) => (
      <Skill key={index} name={skill.name} proficiency={skill.proficiency} />
    ))}
  </div>
);

export default SkillsGrid;
