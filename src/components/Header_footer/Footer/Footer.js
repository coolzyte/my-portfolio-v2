import React from "react";
import Social from "../../Social/Social";
import PageTitle from "../../Title/Title";
import classes from "./Footer.module.css";
import { Logo } from "../../Logo/Logo";

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.Container}>
        <Logo link={true} linkTo="/" width="70px" height="70px" />
        <PageTitle
          desc="But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the monen vai kemon asen"
        />
      </div>
      <div className={classes.Bottom}>
        <div className={classes.Copyright}>
          &copy; All Rights Reserved By
          <a href="http://coolzyte.com"> Coolzyte</a>
        </div>
        <ul className={classes.SocialMenu}>
          <Social />
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
