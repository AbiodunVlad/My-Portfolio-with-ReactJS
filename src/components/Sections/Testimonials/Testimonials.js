import React from "react";
import "./styles.css";

export default function Testimonials() {
  return (
    <div className="services" id="services">
      <h2 className="servicesH2">Testimonials</h2>

      <div className="testimonyBlock">
        <div className="testimonyDiv">
          <p>
            "Working with Abiodun was a game-changer for us with the management
            and maintenance of our website. He transformed our complex process
            into an intuitive and flawless one. His attention to detail and
            user-centered approach set him apart. He comes highly recommend!"
          </p>

          <h3 className="servicesHeader">Adetola Asa, E-PHIS Consulting</h3>
        </div>

        <div className="testimonyDiv">
          <p>
            "From design to deployment, Abiodun crafts business websites that
            perfectly capture brands while optimizing usability. His technical
            and management skills are top-notch, and his experience elevates the
            digital presence of businesses."
          </p>

          <h3 className="servicesHeader">Ning Jeng, Product Manager</h3>
        </div>
      </div>
    </div>
  );
}
