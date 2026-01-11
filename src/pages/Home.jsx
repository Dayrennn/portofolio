import Header from "../component/Header";
import React from "react";
import Hero from "../component/Hero";
import About from "../component/About";
import Portofolio from "../component/Project";

function Home() {
  return (
    <>
      <Header />
      <section id="beranda">
        <Hero />
      </section>
      <section id="tentang">
        <About />
      </section>
      <section id="project">
        <Portofolio />
      </section>
    </>
  );
}

export default Home;
