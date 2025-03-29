import React from "react";
import "./styles.css";

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <h2 className="skillsH2">Skills and Tools</h2>

      <div className="tools">
        <div className="leftTools">
          <div className="left1">
            <div className="specificTool">HTML</div>
            <div className="specificTool">REACT NATIVE</div>
            <div className="specificTool">FIREBASE</div>
          </div>
          <div className="left2">
            <div className="specificTool">CSS</div>
            <div className="specificTool">NEXT JS</div>
            <div className="specificTool">WEBFLOW</div>
          </div>
        </div>
        <div className="rightTools">
          <div className="right1">
            <div className="specificTool">JS</div>
            <div className="specificTool">GATSBY</div>
            <div className="specificTool">WORDPRESS</div>
          </div>
          <div className="right2">
            <div className="specificTool">REACT JS</div>
            <div className="specificTool">AWS</div>
            <div className="specificTool">FIGMA</div>
          </div>
        </div>
      </div>
    </div>
  );
}
