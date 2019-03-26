import React from "react";
import B8 from "../../assets/images/blogPic/b8.png";
import B16 from "../../assets/images/blogPic/b16.jpg";
import B6 from "../../assets/images/blogPic/b6.png";
import B7 from "../../assets/images/blogPic/b7.png";
import Aux from "../../hoc/Aux";
import classes from "./RecentPost.module.css";

const recentposts = () => {
  return (
    <Aux>
      <div className={classes.RecentPost}>
        <h3>recent posts</h3>
        <div className="all-recent-post">
          <div className={classes.SingleRecentPost}>
            <a href="link-here">
              <img src={B6} alt="blog-img" />
            </a>
            <div className={classes.RecentPostDesc}>
              <span>20 April, 2018</span>
              <h6>
                <a href="link-here">
                  Liusmod tempor incididunt ut labore et dolore magn
                </a>
              </h6>
            </div>
          </div>
          <div className={classes.SingleRecentPost}>
            <a href="link-here">
              <img src={B7} alt="blog-img" />
            </a>
            <div className="recent-post-desc">
              <span>18 April, 2018</span>
              <h6>
                <a href="link-here">
                  Modi tempora incidunt ut labore et dolore magnam{" "}
                </a>
              </h6>
            </div>
          </div>
          <div className={classes.SingleRecentPost}>
            <a href="link-here">
              <img src={B8} alt="blog-img" />
            </a>
            <div className="recent-post-desc">
              <span>15 April, 2018</span>
              <h6>
                <a href="link-here">
                  pursue pleasure rationallye ncounter consequences{" "}
                </a>
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className="m-bottom-6">
        <a href="blog-details.html">
          <img className="image" src={B16} alt="portfolio-img" />
        </a>
      </div>
    </Aux>
  );
};
export default recentposts;
