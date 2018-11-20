import React from "react";
import LogoImage from "../../assets/images/c-logo.svg";
import classes from "./Logo.module.css";

const logo = props => (
  <div className={classes.Logo}>
    <a href="/">
      <img src={LogoImage} alt="LogoImage" />
    </a>
  </div>
);

export default logo;
