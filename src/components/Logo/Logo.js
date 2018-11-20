import React from "react";
import LogoImage from "../../assets/images/c-logo.svg";
import classes from "./Logo.module.css";

const logo = props => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={LogoImage} alt="MyPortfolioLogo" />
  </div>
);

export default logo;
