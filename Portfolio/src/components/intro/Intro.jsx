import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { FaAward } from "react-icons/fa";
// FaCode
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/lucky.png";
import "./intro.css";

const Intro = () => {
  function startMusic() {
    document.getElementById("backgroundMusic").play();
  }
  function pauseMusic() {
    document.getElementById("backgroundMusic").pause();
  }

  return (
    <section id="about">
      <ReactAudioPlayer
        src="./RabbaMeharKari.mp3"
        id="backgroundMusic"
        autoPlay
        // controls
      ></ReactAudioPlayer>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div
            onMouseEnter={() => startMusic()}
            onMouseLeave={() => pauseMusic()}
          >
            <img src={ME} alt="me" className="about__me-image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Around 1 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>90+ Completed Assignments</small>
            </article>
            {/* <article className="about__card">
              <FaCode className="about__icon" />
              <h5>Practical Learning</h5>
              <small>1000+ hrs</small>
            </article> */}
          </div>
          <p>
            As a full-stack web developer with a specialization in MERN stack, I
            am highly independent and detail-oriented. I have experience
            building everything from landing pages to APIs, using technologies
            such as HTML, CSS, JavaScript, React, and Redux. I received my
            training from MASAI SCHOOL and have honed my skills through hands-on
            projects and coursework.
            <br />
            <br />
            I am enthusiastic about learning new technologies and techniques,
            and I am always eager to take on new challenges. I believe that
            everything is an art when you put your consciousness into it, and I
            strive to create functional and visually appealing designs that meet
            the needs of both clients and users.
            <br />
            <br />
            In short, I am a dedicated and driven developer with a passion for
            creating high-quality web applications.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
