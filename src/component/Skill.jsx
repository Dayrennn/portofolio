import React from "react";
import "../styles/About.css";

const skills = [
  { name: "HTML, CSS, Javascript", level: 80 },
  { name: "Typescript", level: 60 },
  { name: "React.js", level: 65 },
  { name: "Golang", level: 65 },
  { name: "Bootstrap", level: 70 },
  { name: "Laravel", level: 85 },
  { name: "Nest.js", level: 60 },
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
