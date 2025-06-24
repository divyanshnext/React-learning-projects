import React from 'react';
import '../styles/ProfileSkills.css';

export default function ProfileSkills(props) {
  const colors = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff'];

  return (
    <div>
      <div className="skills-title">Skills</div>
      <div className="skills-container">
        {props.skill.map((skill, idx) => (
          <span
            key={idx}
            className="skill-block"
            style={{ backgroundColor: colors[idx % colors.length] }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}