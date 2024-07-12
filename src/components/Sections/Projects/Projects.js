import React, { useState } from "react";
import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
// import { library } from "@fortawesome/fontawesome-svg-core";

import broadviewcapital from "../../../assets/images/broadviewcapital.png";
import harbourchurch from "../../../assets/images/harbourchurch.png";
import onered from "../../../assets/images/onered.png";
import iKarely from "../../../assets/images/iKarely1.png";
import U4C from "../../../assets/images/u4c.png";

// library.add(faArrowLeft, faArrowRight);

const imageMap = {
  broadviewcapital: broadviewcapital,
  harbourchurch: harbourchurch,
  onered: onered,
  iKarely: iKarely,
  U4C: U4C,
};

export default function Projects({ data }) {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const previousSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="carouselContainer" id="projects">
      <h2 className="skillsH2">Some Projects</h2>

      <div className="carousel">
        {data.map((item, index) => {
          const imgSrc = imageMap[item.alt];
          return (
            <>
              <FontAwesomeIcon
                icon={faAngleLeft}
                //  icon={faArrowLeft}
                // icon="fa-solid fa-arrow-left"
                className="arrow arrow-left"
                onClick={previousSlide}
              />
              <div
                key={index}
                className={slide === index ? "slide" : "slide slide-hidden"}
              >
                <img src={imgSrc} alt={item.alt} className="slideImg" />

                <div className="slideTD">
                  <p>
                    <a
                      href={item.link}
                      className="slideText"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit
                    </a>
                  </p>
                </div>
              </div>
              <FontAwesomeIcon
                icon={faAngleRight}
                // icon={faArrowRight}
                // icon="fa-solid fa-arrow-right"
                className="arrow arrow-right"
                onClick={nextSlide}
              />
              <span className="indicators">
                {data.map((_, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => setSlide(index)}
                      className={
                        slide === index
                          ? "indicator"
                          : "indicator indicator-inactive"
                      }
                    ></button>
                  );
                })}
              </span>
            </>
          );
        })}
      </div>
    </div>
  );
}
