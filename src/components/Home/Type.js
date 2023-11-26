import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "3rd Year RIT Year Student",
          "Software Engineer",
          "Embedded Systems Programmer",
          "Indie Game Developer",
          "Full Stack Engineer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
