import React from "react";
import Filler from "./Filler/Filler";
import classes from "./ProgressBar.module.css";

const ProgressBar = props => {
  return (
    <div>
      <div>
        <span>UX DESIGN</span>
        <div className={classes.ProgressBar}>
          <Filler percentage={props.percentage} />
        </div>
      </div>
      <div>
        <span>UI DESIGN</span>
        <div className={classes.ProgressBar}>
          <Filler percentage={props.percentage} />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
