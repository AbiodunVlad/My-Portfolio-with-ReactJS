import React, { useState } from "react";
import "./styles.css";

import { useCollapse } from "react-collapsed";

// import profile11 from "../../../assets/images/profile1.jpg";
import profile2 from "../../../assets/images/profile2.jpg";

export default function AboutSection() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <div className="aboutMe">
      <div className="profilePhotos">
        <img src={profile2} alt="profile2" className="profile2" />
        {/* <img src={profile11} alt="profile1" className="profile11" /> */}
      </div>

      <div className="description">
        <h2 className="AboutH2">About Me</h2>

        <p className="aboutTxt">
          👋 Hi there! I'm a multifaceted developer with a passion for creating
          dynamic and user-friendly digital experiences. With a strong
          foundation in both code and no-code development, I thrive on bringing
          innovative ideas to life on the web and mobile platforms. My journey
          in development has equipped me with the skills of programming
          languages and frameworks needed to create products, enabling me to
          tackle complex challenges with ease and efficiency. Whether it's
          building a responsive website or a seamless mobile app, I am dedicated
          to delivering high-quality solutions that meet user needs and exceed
          expectations.{" "}
        </p>
        <p className="aboutTxt">
          In addition to my development skills, I am deeply committed to the
          principles of UX/UI design. I believe that a great user experience is
          at the heart of every successful digital product. By combining
          aesthetic design with functional elements, I strive to create
          interfaces that are not only visually appealing but also intuitive and
          enjoyable to use. My approach to design is user-centered, ensuring
          that every project I work on is crafted with the end user in mind,
          leading to higher engagement and satisfaction.
        </p>

        {isExpanded ? (
          " "
        ) : (
          <button {...getToggleProps()} className="expand">
            Read more
          </button>
        )}

        <section {...getCollapseProps()} className="aboutTxt">
          {" "}
          Beyond development and design, I am also passionate about content
          creation. I understand the power of compelling content in
          communicating ideas and driving user engagement. Whether it's writing
          blog posts, creating tutorials, or designing graphics, I enjoy
          crafting content that resonates with audiences and adds value to their
          experience. By integrating content creation into my workflow, I am
          able to provide a holistic approach to digital development, ensuring
          that every aspect of a project is cohesive and impactful.{" "}
        </section>

        {!isExpanded ? (
          " "
        ) : (
          <button {...getToggleProps()} className="expand">
            Read less
          </button>
        )}

        <p></p>
      </div>
    </div>
  );
}
