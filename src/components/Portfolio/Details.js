import React from "react";
import Aux from "../../hoc/Aux";
import P2 from "../../assets/images/work/p2.jpg";
import P7 from "../../assets/images/work/p7.jpg";
import P8 from "../../assets/images/work/p8.jpg";
import P9 from "../../assets/images/work/p9.jpg";
import P10 from "../../assets/images/work/p10.jpg";

import PortfolioCard from "./PortfolioCard";
import PortfolioSidebar from "./PortfolioSidebar";
import classes from "./Details.module.css";

const Details = ({ projects }) => {
  return (
    <Aux>
      <div className={classes.Details}>
        <div className={classes.Container}>
          <div className={classes.ItemOne}>
            <img className="image" src={P2} alt="work-img" />
            <div className="project-idea m-bottom-4">
              <h3 className="heading heading--2">
                <span>Share your Ideas</span> with us <br /> We design and
                develop <span>your dreams</span>
              </h3>
              <p className="m-bottom-2">
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire, that they cannot
                foresee the pain and trouble that arew how to pursue pleasure
                rationally encounter consequences that are extremely painful.
                Nor again is there anyone loves or pursues or desires to obtain
                pain of itself, because it is pain, but because occas
              </p>

              <p>
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demorathe charms of pleasure
                of the moment, so blinded by desire, that they cannot foresee
                the pain and trouble
              </p>
            </div>
            <div className={classes.DetailsBrief}>
              <h3 className="heading heading--2">
                <span>Project</span> Brief
              </h3>
              <p>
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire, that they cannot
                foresee the pain and trouble that arew how to pursue pleasure
                rationally encounter consequences that are extremely painful
              </p>
              <div className={classes.Row}>
                <div>
                  <p className="single-quote">
                    <span className="text-mark">Main</span> the other hand, we
                    denounce with ighteous ion and dislike men who are so
                    beguiled
                  </p>
                </div>
                <div>
                  <p className="single-quote">
                    <span className="text-mark">Main</span> the other hand, we
                    denounce with ighteous ion and dislike men who are so
                    beguiled
                  </p>
                </div>
              </div>
            </div>
            <div className="project-design-video m-top-4">
              <div className="m-bottom">
                <h3 className="heading heading--2">
                  <span>Video of</span> Project Design
                </h3>
                <p className="m-bottom-4">
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment, so blinded by desire, that they
                  cannot foresee the pain and trouble that arew how to pursue
                  pleasure rationally encounter consequences that are extremely
                  painful
                </p>

                <div className={classes.VideoClip}>
                  <div>
                    <a href="/work-details">
                      <img src={P7} alt="work-img" />
                    </a>
                  </div>

                  <div className="work-video">
                    <a href="/work-details">
                      <img src={P8} alt="work-img" />
                    </a>
                  </div>

                  <div className="mb-xsm-30">
                    <a href="work-details.html">
                      <img src={P9} alt="work-img" />
                    </a>
                  </div>

                  <div className="work-video">
                    <a href="/work-details">
                      <img src={P10} alt="portfolio-img" />
                    </a>
                  </div>
                </div>
              </div>
              <div className={classes.Row}>
                <div>
                  <p>
                    <span>Main</span> the other hand, we denounce with ighteous
                    ion and dislike men who are so beguiled
                  </p>
                </div>
                <div>
                  <p>
                    <span>Main</span> the other hand, we denounce with ighteous
                    ion and dislike men who are so beguiled
                  </p>
                </div>
                <div>
                  <p>
                    <span>Main</span> the other hand, we denounce with ighteous
                    ion and dislike men who are so beguiled
                  </p>
                </div>
                <div>
                  <p>
                    <span>Main</span> the other hand, we denounce with ighteous
                    ion and dislike men who are so beguiled
                  </p>
                </div>
              </div>
              <ul className={classes.Pagination}>
                <li>
                  <a href="addlinklater">
                    <i className="fa fa-long-arrow-left" aria-hidden="true" />
                    previous
                  </a>
                </li>
                <li className="ml-auto">
                  <a href="addlinklater">
                    next
                    <i className="fa fa-long-arrow-right" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <PortfolioSidebar />
        </div>
      </div>

      <div className={classes.Others}>
        <div className="addlinklater">
          <h3>
            <span>here </span>
            are some <br /> Related <span>Projects</span>
          </h3>
          <div className={classes.Container}>
            <PortfolioCard
              id={projects[0].id}
              name={projects[0].name}
              desc={projects[0].desc}
              pic={projects[0].pic}
            />
            <PortfolioCard
              id={projects[4].id}
              name={projects[4].name}
              desc={projects[4].desc}
              pic={projects[4].pic}
            />
            <PortfolioCard
              id={projects[2].id}
              name={projects[2].name}
              desc={projects[2].desc}
              pic={projects[2].pic}
            />
          </div>
        </div>
      </div>
    </Aux>
  );
};

export default Details;
