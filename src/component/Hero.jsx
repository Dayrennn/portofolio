import React from "react";
import "../styles/Hero.css";
import ButtonConfirm from "./Buttons/ButtonCnfrm";

function Hero() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-tittle">
            <b>
              Halo, Saya <span>Rafly Ramandha Kusuma</span>
            </b>
          </p>
          <p className="hero-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            enim accusamus amet deserunt a facilis corrupti, veritatis aliquid
            quos, temporibus at soluta vitae aliquam harum error officia rerum!
            Labore, quia.
          </p>
          <div className="hero-buttons">
            <ButtonConfirm>Lihat Portofolio</ButtonConfirm>
            <ButtonConfirm variant="outline">Hubungi Saya</ButtonConfirm>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
