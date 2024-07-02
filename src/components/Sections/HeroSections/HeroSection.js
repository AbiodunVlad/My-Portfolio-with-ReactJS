import React from "react";
import "./styles.css";

import redBall1 from "../../../assets/images/redBall1.png";
import redBall2 from "../../../assets/images/redBall2.png";
import greenBall from "../../../assets/images/greenBall.png";

import DownloadResume from "../../Buttons/DownloadResume";
import Type from "../../Typewriter/Type";

export default function HeroSection() {
  return (
    <div className="heroSection">
      <div className="balls">
        <img src={redBall1} alt="redBall1" className="redBall1" />

        <img src={greenBall} alt="greenBall" className="greenBall" />
        <img src={redBall2} alt="redBall2" className="redBall2" />
      </div>

      <div className="glassDiv">
        <h1>Abiodun Omonijo</h1>
        <Type />

        <DownloadResume />
      </div>
    </div>
  );
}
