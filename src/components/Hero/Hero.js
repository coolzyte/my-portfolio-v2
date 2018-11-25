import React from "react";
import Button from "../Button/Button";
import Social from "../Social/Social";
import classes from "./Hero.module.css";

const Hero = () => (
  <div className={classes.Hero}>
    <div className={classes.TextContent}>
      <div>
        <h5>HAY! THERE</h5>
        <h1>I AM COOLZYTE</h1>
        <h2 className="cd-headline clip is-full-width">
          a professional
          <span className="cd-words-wrapper">
            <b className="is-visible"> developer</b>
            <b>Freelancer</b>
            <b>trainer</b>
            <b>employer</b>
          </span>
        </h2>
      </div>
      <Button name="Hire Me" />
    </div>
    <ul className={classes.SocialMenu}>
      <Social />
    </ul>
  </div>
);

export default Hero;
