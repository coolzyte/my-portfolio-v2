import React from "react";
import Aux from "../../hoc/Aux";
import Toolbar from "../Toolbar/Toolbar";
import classes from "./Layout.module.css";

const layout = ({ children }) => (
  <Aux>
    <Toolbar />
    <main className={classes.Content}>{children}</main>
  </Aux>
);

export default layout;
