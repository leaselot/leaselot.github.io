import React from "react";
import { BackgroundImage } from "../../hero-background.png";
import "../../style/hero-section.style.css";

export const HeroSection = (props) => {
  return (
    <section className="hero-section">
      <h1 className="headline">{props.headline}</h1>
      <h3 className="subhead">{props.subhead}</h3>
    </section>
  );
};
