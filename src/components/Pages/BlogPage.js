import React from "react";
import Banner from "../Banner/Banner";
import BlogList from "../Blog/BlogList";
import { blogContent } from "../Blog/blogContent";

const blog = () => {
  return (
    <div className="container">
      <Banner name="Our Blog" />
      <BlogList blogContent={blogContent} />
    </div>
  );
};
export default blog;
