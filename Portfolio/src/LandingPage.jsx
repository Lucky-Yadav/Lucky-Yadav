import React from "react";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
