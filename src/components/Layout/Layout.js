import React from "react";
import Aux from "../../hoc/Aux";
import Toolbar from "../Toolbar/Toolbar";
import SideDrawer from "../Toolbar/SideDrawer/SideDrawer";
import classes from "./Layout.module.css";

const layout = ({ children }) => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <main className={classes.Content}>{children}</main>
  </Aux>
);

export default layout;
