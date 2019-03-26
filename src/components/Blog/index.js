import React from "react";
import Banner from "../Banner/Banner";
import BlogList from "./BlogList";
import { blogContent } from "./blogContent";

const blog = () => {
  return (
    <div className="container">
      <Banner name="Our Blog" />
      <BlogList blogContent={blogContent} />
    </div>
  );
};
export default blog;
