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
          I can create a design that
          <span className="text-light"> will give value to your product</span>
        </h5>
        <CTA />
        <a href="#contact" className="scroll__down">
          Contacts
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
