import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../component/Header";
import Hero from "../component/Hero";
import About from "../component/About";
import Portfolio from "../component/Project";
import Footer from "../component/Footer";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <>
      <Header />

      <section id="beranda" data-aos="fade-up">
        <Hero />
      </section>

      <section id="tentang" data-aos="fade-up">
        <About />
      </section>

      <section id="project" data-aos="fade-up">
        <Portfolio />
      </section>

      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

export default Home;
