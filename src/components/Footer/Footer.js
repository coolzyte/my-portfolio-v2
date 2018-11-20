import React from "react";
import Social from "../Social/Social";
import "./Footer.module.css";
import PageTitle from "../Title/Title";

const Footer = () => {
  return (
    <footer className="footer p-tb">
      <div className="section-title wrapper footer__container">
        <PageTitle
          heading="CoolZyte"
          desc="But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the monen vai kemon asen"
        />
      </div>
      <div className="footer__bottom wrapper flex-item">
        <div className="copyright">
          &copy; All Rights Reserved By
          <a href="http://coolzyte.com">Coolzyte</a>
        </div>
        <ul className="footer__social social-menu flex-item">
          <Social />
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
