import React from "react";
import Heading from "../components/common/Heading.jsx";
import About from "../components/home/About.jsx";
import Team from "../components/home/Team.jsx";

export default function AboutUs() {
  return (
    <>
      <Heading heading="About" title="Home" subtitle="About" />
      <About />
      <Team />
    </>
  );
}
