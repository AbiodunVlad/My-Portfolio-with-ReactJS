import React from "react";
import "./styles.css";

import Coursera from "../../../assets/images/Coursera.png";
import forage from "../../../assets/images/forage.png";
import Jobberman from "../../../assets/images/Jobberman.PNG";
import SideHustle from "../../../assets/images/SideHustle.PNG";

export default function Qualifications() {
  return (
    <div className="qualifications" id="qualifications">
      <h2 className="qualificationsH2">Qualifications & Certifications</h2>

      <div className="collection">
        <img src={forage} alt="" className="certificate" />
        <img src={SideHustle} alt="" className="certificate" />
        <img src={Coursera} alt="" className="certificate" />
        <img src={Jobberman} alt="" className="certificate" />
      </div>
    </div>
  );
}
