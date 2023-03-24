import React from "react";
import { BsGithub } from "react-icons/bs";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiFirebase } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-end Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiOutlineHtml5 className="experience__details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <IoLogoCss3 className="experience__details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <IoLogoJavascript className="experience__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <h4>React</h4>
            </article>
            <article className="experience__details">
              <SiRedux className="experience__details-icon" />
              <h4>Redux</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Back-end Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaNodeJs className="experience__details-icon" />
              <h4>Node Js</h4>
            </article>
            <article className="experience__details">
              <BsGithub className="experience__details-icon" />
              <h4>Git/GitHub</h4>
            </article>
            <article className="experience__details">
              <SiExpress className="experience__details-icon" />
              <h4>Express</h4>
            </article>
            <article className="experience__details">
              <DiMongodb className="experience__details-icon" />
              <h4>MongoDB</h4>
            </article>
          </div>
        </div>
        <div className="other__experience">
          <h3>Other Technologies Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiFirebase className="experience__details-icon" />
              <h4>Firebase</h4>
            </article>
            <article className="experience__details">
              <FaNodeJs className="experience__details-icon" />
              <h4>Bcrypt.js</h4>
            </article>
            <article className="experience__details">
              <TbApi className="experience__details-icon" />
              <h4>Api's</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
