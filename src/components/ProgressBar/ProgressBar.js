import React from "react";
import Filler from "./Filler/Filler";
import classes from "./ProgressBar.module.css";

const ProgressBar = props => {
  return (
    <div className={classes.ProgressBar}>
      <Filler percentage={props.percentage} />
    </div>
  );
};

export default ProgressBar;
