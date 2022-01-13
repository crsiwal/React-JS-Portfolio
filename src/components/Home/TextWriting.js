import React from "react";
import Typewriter from "typewriter-effect";

export default function TextWriting() {
  return (
    <Typewriter
      options={{
        strings: [
          "I Build Things For Web.",
          "Senior Front End Developer",
          "Attribution & Analytics Engineer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}
