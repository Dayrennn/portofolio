import React from "react";
import profileImg from "../assets/profile.jpg";
import ButtonConfirm from "./ButtonCnfrm";

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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laudantium laboriosam enim quidem pariatur! Facilis similique
                ipsum, dolores suscipit nobis obcaecati saepe quam enim
                exercitationem animi in magnam fuga sunt error.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                animi praesentium possimus sapiente ullam dolorem ratione. Quod
                itaque accusantium voluptate aut impedit consectetur quia,
                deleniti natus explicabo amet, non soluta?
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
