import React, { useState } from "react";
import "./styles.css";
import favicon from "../../assets/images/favicon.jpg";
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <img src={favicon} alt="logo" className="logo" />

      <div className="menu-button" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />{" "}
      </div>

      <li className={`listItems ${menuOpen ? "active" : ""}`}>
        <a href="#services">
          <ul className="singleItem">SERVICES</ul>
        </a>

        <a href="#skills">
          <ul className="singleItem">SKILLS</ul>
        </a>

        <a href="#qualifications">
          <ul className="singleItem">QUALIFICATIONS</ul>
        </a>

        <a href="#projects">
          <ul className="singleItem">PROJECTS</ul>
        </a>

        <a href="#contact">
          <ul className="singleItem">CONTACT ME</ul>
        </a>
      </li>
    </div>
  );
}
