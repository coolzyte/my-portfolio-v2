import React from "react";
import classes from "../Blog/BlogCard.module.css";

const BlogCard = ({ pic, title, desc }) => (
  <div class={classes.Item}>
    <div class={classes.Inner}>
      <div class={classes.Header}>
        <div class="blog__image">
          <a href="/blog-details">
            <img src={pic} alt="blogimage" />
          </a>
        </div>
        <div class={classes.Desc}>
          <ul class={classes.MetaBox}>
            <li class={classes.MetaDate}>
              <span>
                <i class="fa fa-calendar" aria-hidden="true" />
                Jun 17, 2018
              </span>
            </li>
            <li>
              <i class="fa fa-user" aria-hidden="true" />
              By <a href="link-here"> Coolzyte</a>
            </li>
          </ul>
          <div class="blog__content">
            <h6 class={classes.Title}>
              <a href="/blog-details">{title}</a>
            </h6>
            <p>{desc}</p>
          </div>
        </div>
      </div>
      <div class={classes.BlogBtn}>
        <a href="/blog-details">Read More</a>
      </div>
    </div>
  </div>
);

export default BlogCard;
