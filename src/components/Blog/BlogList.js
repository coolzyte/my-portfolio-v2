import React from "react";
import BlogCard from "./BlogCard";
import classes from "./BlogList.module.css";

const bloglist = ({ blogContent }) => {
  return (
    <section class={classes.BlogList}>
      <div class="blog__wrap">
        {blogContent.map((user, i) => {
          return (
            <BlogCard
              key={i}
              id={blogContent[i].id}
              title={blogContent[i].title}
              desc={blogContent[i].desc}
              pic={blogContent[i].pic}
            />
          );
        })}
      </div>
      <div class="blog__pagination">
        <ul class="list">
          <li>
            <a href="link-here">
              <i class="fa fa-long-arrow-left" aria-hidden="true" />
            </a>
          </li>
          <li class="active">
            <a href="link-here">01</a>
          </li>
          <li>
            <a href="link-here">02</a>
          </li>
          <li>
            <a href="link-here">03</a>
          </li>
          <li>
            <a href="link-here">04</a>
          </li>
          <li>
            <a href="link-here">
              <i class="fa fa-long-arrow-right" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default bloglist;
