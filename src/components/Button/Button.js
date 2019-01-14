import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./Button.module.css";

const Button = ({ name }) => (
  <Aux>
    <button className={classes.Btn}>{name}</button>
  </Aux>
);

export default Button;
