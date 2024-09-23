import React from "react";
import Carousel from "./Carousel.jsx";
import Book from "./Book.jsx";
import About from "./About.jsx";
import Services from "./Service.jsx";
import Rooms from "./Rooms.jsx";
import Sliders from "./Slider.jsx";
import Teams from "./Team.jsx";

export default function Home() {
  return (
    <>
      <Carousel />
      <Book />
      <About />
      <Rooms />
      <Services />
      <Sliders />
      <Teams />
    </>
  );
}
