import React from "react";
import Logo from "../Logo/Logo";
import NavigationItems from "./NavigationItems/NavigationItems";
import DrawerToggle from "./SideDrawer/DrawerToggle/DrawerToggle";
import classes from "./Header.module.css";

const Header = props => (
  <div className={classes.Header}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </div>
);

export default Header;
