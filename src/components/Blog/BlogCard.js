import React from "react";
import MetaBox from "../Blog/MetaBox";
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
          <MetaBox />
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
