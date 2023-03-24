import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        {/* <h5>Hey I'm</h5> */}

        <h3>under maintainence</h3>
        <h1>I'm Lucky Yadav. </h1>
        <h5>
          I will create a design that
          <span className="text-light"> can give value to your product</span>
        </h5>
        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
