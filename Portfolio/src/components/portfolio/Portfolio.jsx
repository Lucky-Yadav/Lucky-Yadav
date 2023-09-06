import React from "react";
import IMG1 from "../../assets/swiggy1.png";
import IMG2 from "../../assets/Apollo.png";
import IMG3 from "../../assets/Unsplash.png";
import IMG4 from "../../assets/Acko.png";

import "./portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Swiggy Clone",
      img: IMG1,
      des: "Swiggy is an Indian online food ordering and delivery platform .",
      res: "My Area of Responsibility :- Create Signup/ Login Algo and also implemented Google oAuth with Mobile No. for Login and stored the data in JSON SERVER.",
      teckStack: " React | Redux | Styled Components |  Material UI ",
      link: "https://swiggy-web-clone.netlify.app/",
      github: "https://github.com/Lucky-Yadav/swiggy.com_clone.github.io",
    },
    {
      id: 2,
      title: "Apollo Clone",
      des: "Apollo Pharmacy is a Medical website , where you can find medicines, consult with doctors online or you can book appointment to meet doctors ofline..",
      img: IMG2,
      res: " Area of Responsibilty : Landing page with Navbar & footer ",
      teckStack: " HTML | CSS | Vanilla js",
      link: "https://apollo247-clone.netlify.app/",
      github: "https://github.com/Bhavisha2801/Apollo_Clone",
    },
    {
      id: 3,
      title: "Unsplash Clone",
      des: "Unsplash is a website dedicated to proprietary stock photography..",
      img: IMG3,
      res: " Area of Responsibilty : Landing page with api and downlad functionality",
      teckStack: " HTML | CSS | React js | Api | Styled-Components",
      link: "https://unsplash-replica.netlify.app/",
      github: "https://github.com/Lucky-Yadav/unsplash.com_clone",
    },
    {
      id: 4,
      title: "Acko Clone",
      des: "Acko General Insurance is a private sector general insurance company in India..",
      img: IMG4,
      res: " Area of Responsibilty : Static pages of resources, guides, articles ebooks with line to line matching css",
      teckStack: " HTML | CSS | Vanilla js",
      link: "https://acko-clone.netlify.app/pages/resources/allresources",
      github: "https://github.com/Lucky-Yadav/acko-clone.github.io",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <div className="box">
          {soloProjects.map((pro) => (
            <span
              className="portfolio__item"
              style={{ "--i": `${pro.id}` }}
              key={pro.id}
            >
              <h3 className="portfolio__title">{pro.title}</h3>
              <div className="portfolio__item-image">
                <img src={pro.img} alt={pro.title} />
              </div>

              {/* <p>{pro.des}</p> */}
              {/* <br /> */}
              {/* <p>{pro.res}</p> */}
              {/* <br /> */}
              {/* <p>{pro.teckStack}</p> */}

              <div className="portfolio__item-cta">
                <a
                  href={pro.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  GitHub
                </a>
                <a
                  href={pro.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
