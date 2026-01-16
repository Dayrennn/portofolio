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
                Sebagai Web Developer, saya berpengalaman dalam merancang dan
                membangun aplikasi web interaktif menggunakan HTML, CSS,
                JavaScript, serta framework modern. Selain itu, saya juga
                terbiasa bekerja dengan Laravel, membangun backend berbasis PHP
                yang terstruktur dan aman, termasuk pengelolaan database,
                routing, dan templating. Saya fokus membuat antarmuka yang
                responsif, intuitif, dan user-friendly, serta memastikan
                performa dan kompatibilitas lintas browser.
              </p>
              <p>
                Di sisi backend, saya berpengalaman membangun RESTful API
                menggunakan Node.js, Express, TypeScript, Prisma, PostgreSQL,
                serta Laravel untuk proyek PHP, termasuk implementasi CRUD,
                autentikasi JWT, RBAC, dan multi-tenancy. Saya menulis unit dan
                integration test dengan Jest dan Supertest, memastikan business
                logic, keamanan, dan integritas data terjaga. Pengalaman ini
                memungkinkan saya membuat sistem web yang komprehensif,
                scalable, dan maintainable, sekaligus menyambungkan frontend dan
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
