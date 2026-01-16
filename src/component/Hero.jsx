import React from "react";
import "../styles/Hero.css";
import ButtonConfirm from "./Buttons/ButtonCnfrm";

function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 80; // tinggi navbar fixed
    const top =
      element.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <p className="hero-tittle">
          <b>
            Halo, Saya <span>Rafly Ramandha Kusuma</span>
          </b>
        </p>
        <p className="hero-desc">
          Mahasiswa aktif Universitas Pamulang yang sedang menjalani semester 7
          dengan jurusan Teknik Informatika
        </p>
        <div className="hero-buttons">
          <ButtonConfirm onClick={() => scrollToSection("project")}>
            Lihat Project
          </ButtonConfirm>
          <ButtonConfirm
            variant="outline"
            onClick={() => scrollToSection("footer")}
          >
            Hubungi Saya
          </ButtonConfirm>
        </div>
      </div>
    </section>
  );
}

export default Hero;
