import React from "react";

import "./styles.css";
import HeroSection from "../Sections/HeroSections/HeroSection";
import AboutSection from "../Sections/AboutSection/AboutSection";
import Services from "../Sections/Services/Services";
import Skills from "../Sections/Skills/Skills";
import Qualifications from "../Sections/Qualifications/Qualifications";
import Projects from "../Sections/Projects/Projects";

import slides from "../../data/Carousel.json";
import Contact from "../Sections/Contact/Contact";
import Testimonials from "../Sections/Testimonials/Testimonials";

export default function Home() {
  return (
    <div className="body">
      <HeroSection />

      <AboutSection />

      <Services />

      <Skills />

      <Qualifications />

      <Projects data={slides.slides} />

      <Testimonials />

      <Contact />
    </div>
  );
}
