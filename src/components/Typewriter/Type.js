import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./styles.css";

export default function Type() {
  return (
    <div>
      <span className="typewriter">
        <Typewriter
          words={[
            "Web Developer",
            "Mobile Developer",
            "Code",
            "No-Code",
            "UX/UI Designer",
            "Content Creator 😉😉😉",
          ]}
          loop={false}
          cursor
          cursorColor="#fff"
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={100}
          // delaySpeed={100}
        />
      </span>
    </div>
  );
}
