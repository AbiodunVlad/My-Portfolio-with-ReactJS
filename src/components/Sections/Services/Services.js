import React from "react";
import "./styles.css";

import website from "../../../assets/icons/website.svg";
import mobileApplication from "../../../assets/icons/mobileApplication.svg";
import noCode from "../../../assets/icons/noCode.svg";
import ux from "../../../assets/icons/ux.svg";

export default function Services() {
  return (
    <div className="services" id="services">
      <h2 className="servicesH2">Core Services</h2>

      <div className="servicesBlock">
        <div className="serviceDiv">
          <img src={website} alt="" className="servicesImg" />

          <h3 className="servicesHeader">Web Development</h3>

          <p>
            Website development is an ever-evolving field driven by
            technological advancements. Whether crafting a personal blog, an
            e-commerce platform, a corporate site, or a web application, the
            process demands meticulous planning, keen attention to detail, and
            continual maintenance to ensure a successful and impactful online
            presence.
          </p>
        </div>

        <div className="serviceDiv">
          <img src={mobileApplication} alt="" className="servicesImg" />

          <h3 className="servicesHeader">Mobile Development</h3>

          <p>
            Mobile development is a dynamic and fast-paced field that demands a
            deep understanding of your target audience, strategic planning,
            proficient coding, and ongoing enhancements. To create successful
            apps, it's essential to continuously adapt and innovate to meet user
            needs and maintain a competitive edge in the market.
          </p>
        </div>

        <div className="serviceDiv">
          <img src={noCode} alt="" className="servicesImg" />

          <h3 className="servicesHeader">No-Code Development</h3>

          <p>
            No-code development is a transformative and rapidly growing field
            that empowers individuals to build applications without traditional
            programming. This approach allows for quick adaptation and
            innovation, enabling the creation of robust and competitive
            solutions in the market.
          </p>
        </div>

        <div className="serviceDiv">
          <img src={ux} alt="" className="servicesImg" />

          <h3 className="servicesHeader">UX/UI Design</h3>

          <p>
            UX and UI design are pivotal in crafting digital products that are
            visually appealing and user-centric. Achieving a seamless and
            engaging user experience requires close collaboration between UI and
            UX designers, developers, and stakeholders, ensuring that both
            aesthetic and functional aspects are meticulously aligned.
          </p>
        </div>
      </div>
    </div>
  );
}
