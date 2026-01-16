import React from "react";
import "../styles/About.css";

const skills = [
  { name: "HTML, CSS, Javascript", level: 70 },
  { name: "Typescript", level: 50 },
  { name: "Laravel", level: 75 },
  { name: "Express.js", level: 50 },
  { name: "React", level: 65 },
  { name: "Bootstrap", level: 60 },
];

function Skills() {
  return (
    <div className="skills">
      {skills.map((skill, i) => (
        <div className="skill-item" key={i}>
          {/* mengambil daftar dan ulangi setiap array dengan i yaitu dari 0 hingga strsnya*/}
          <div className="skill-name">
            <span>{skill.name}</span>
            <span>{skill.level}</span>
          </div>
          <div className="skill-bar">
            <div
              className="skill-progress"
              style={{ width: `${skill.level}%` }}
            ></div>
            {/* mengambil daftar dan data level */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
