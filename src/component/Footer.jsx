import React from "react";
import "../styles/Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MdiLinkedin from "./Icons/Linkedin";
import MingcuteGithubLine from "./Icons/Github";
import MdiInstagram from "./Icons/Instagram";
import IcBaselineWhatsapp from "./Icons/Whatsapp";

function Footer() {
  return (
    <footer>
      <div className="container">
        <a href="#" className="logo">
          Porto<span>folio</span>
        </a>
        <div className="social-links">
          <a href="www.linkedin.com/in/rafly-ramandha-kusuma-214a36353">
            <MdiLinkedin icon="mdi:linkedin" width="24" height="24" />
          </a>
          <a href="https://github.com/Dayrennn">
            <MingcuteGithubLine
              icon="mingcute:github-line"
              width="24"
              height="24"
            />
          </a>
          <a href="https://www.instagram.com/dayrennn">
            <MdiInstagram icon="mdi:instagram" width="24" height="24" />
          </a>
          <a href="https://wa.me/6281218547384">
            <IcBaselineWhatsapp
              icon="ic:baseline-whatsapp"
              width="24"
              height="24"
            />
          </a>
        </div>
        <hr className="divider my-4" />
        <p className="copyright">
          &copy; 2026 Rafly Ramandha Kusuma. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
