import React from "react";
import profileImg from "../assets/profile.jpg";
import ButtonConfirm from "./Buttons/ButtonCnfrm";

import "../styles/About.css";
import Skills from "./Skill";

function About() {
  return (
    <>
      <div className="about">
        <div className="container">
          <div className="section-title">
            <h2>Tentang Saya</h2>
          </div>
          <div className="about-content">
            <div className="about-img">
              <img src={profileImg} alt="Profile" />
            </div>
            <div className="about-text">
              <h3>Web Developer Enthusiast</h3>
              <p>
                Saya adalah Web Developer dengan fokus utama pada backend
                development. Saya berpengalaman membangun RESTful API
                menggunakan Express.js dengan TypeScript serta Golang dengan
                Gin, dan mengelola database menggunakan PostgreSQL. Saya juga
                menggunakan React.js sebagai frontend untuk mendukung integrasi
                sistem, dengan minat utama pada desain backend yang scalable dan
                maintainable.
              </p>
              <Skills />
              <ButtonConfirm>Hubungi Saya</ButtonConfirm>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
