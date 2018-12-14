import React from "react";

const BlogCard = ({ pic, title, desc }) => (
  <div class="blog__item">
    <div class="blog__inner">
      <div class="blog__header">
        <div class="blog__image">
          <a href="/blog-details">
            <img src={pic} alt="blogimage" />
          </a>
        </div>
        <div class="blog__desc">
          <ul class="blog__meta-box">
            <li class="blog__meta-date">
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
            <h6 class="blog__title">
              <a href="/blog-details">{title}</a>
            </h6>
            <p>{desc}</p>
          </div>
        </div>
      </div>
      <div class="blog__btn">
        <a class="read-more" href="/blog-details">
          Read More
        </a>
      </div>
    </div>
  </div>
);

export default BlogCard;
