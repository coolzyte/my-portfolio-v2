import React from "react";
import Filler from "./Filler/Filler";
import Aux from "../../hoc/Aux";
import classes from "./ProgressBar.module.css";

const ProgressBar = props => {
  return (
    <Aux>
      <span>{props.title}</span>
      <div className={classes.ProgressBar}>
        <Filler percentage={props.percentage} />
      </div>
    </Aux>
  );
};

export default ProgressBar;
