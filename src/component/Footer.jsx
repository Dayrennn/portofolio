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
          <a href="#">
            <MdiLinkedin icon="mdi:linkedin" width="24" height="24" />
          </a>
          <a href="#">
            <MingcuteGithubLine
              icon="mingcute:github-line"
              width="24"
              height="24"
            />
          </a>
          <a href="#">
            <MdiInstagram icon="mdi:instagram" width="24" height="24" />
          </a>
          <a href="#">
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
