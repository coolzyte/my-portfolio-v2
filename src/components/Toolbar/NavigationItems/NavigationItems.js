import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>
      Home
    </NavigationItem>
    <NavigationItem link="/aboutus">About</NavigationItem>
    <NavigationItem link="/portfolio">Portfolio</NavigationItem>
    <NavigationItem link="/blog">Blog</NavigationItem>
    <NavigationItem link="/contact-us">Contact</NavigationItem>
  </ul>
);

export default navigationItems;
