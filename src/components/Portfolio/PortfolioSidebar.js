import React from "react";
import P16 from "../../assets/images/work/p16.jpg";
import P17 from "../../assets/images/work/p17.jpg";
import P33 from "../../assets/images/work/p33.jpg";
import i1 from "../../assets/images/instagram/i1.png";
import i2 from "../../assets/images/instagram/i2.png";
import i3 from "../../assets/images/instagram/i3.png";
import i4 from "../../assets/images/instagram/i4.png";
import i5 from "../../assets/images/instagram/i5.png";
import i6 from "../../assets/images/instagram/i6.png";
import classes from "./PortfolioSidebar.module.css";

const portfoliosidebar = () => {
  return (
    <div>
      <div className={classes.Sidebar}>
        <div className={classes.Info}>
          <h4>
            <span>project</span> information
          </h4>
          <div className={classes.List}>
            <h6>client</h6>
            <p>robarto carlos</p>
          </div>
          <div className={classes.List}>
            <h6>project name</h6>
            <p>creative mockup design</p>
          </div>
          <div className={classes.List}>
            <h6>category</h6>
            <p>creative design work</p>
          </div>
          <div className={classes.List}>
            <h6>working hours</h6>
            <p>600 hours</p>
          </div>
          <div className={classes.List}>
            <h6>project cost</h6>
            <p>7 miilion us dollar</p>
          </div>
        </div>
        <div className={classes.Instagram}>
          <h4>
            <span>From </span>
            Instagram
          </h4>
          <ul className={classes.InstagramImage}>
            <li>
              <a href="addlinklater">
                <img src={i1} alt="instagram-img" />
              </a>
            </li>
            <li>
              <a href="addlinklater">
                <img src={i2} alt="instagram-img" />
              </a>
            </li>
            <li>
              <a href="addlinklater">
                <img src={i3} alt="instagram-img" />
              </a>
            </li>
            <li>
              <a href="addlinklater">
                <img src={i4} alt="instagram-img" />
              </a>
            </li>
            <li>
              <a href="addlinklater">
                <img src={i5} alt="instagram-img" />
              </a>
            </li>
            <li>
              <a href="addlinklater">
                <img src={i6} alt="instagram-img" />
              </a>
            </li>
          </ul>
        </div>
        <div className="m-bottom-4">
          <a href="/work-details">
            <img className="image" src={P33} alt="portfolio-img" />
          </a>
        </div>
        <div className={classes.Info}>
          <h4>
            <span>Portfolio </span>
            Brochure
          </h4>
          <ul>
            <li>
              <img src={P16} alt="doc" />
              <a href="addlinklater">DOWNLOAD PDF BROCHURE</a>
            </li>
            <li>
              <img src={P17} alt="doc" />
              <a href="addlinklater">DOWNLOAD DOC BROCHURE</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default portfoliosidebar;
