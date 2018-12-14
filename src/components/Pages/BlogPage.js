import React from "react";
import Layout from "../Layout/Layout";
import Banner from "../Banner/Banner";
import BlogList from "../Blog/BlogList";
import { blogContent } from "../Blog/blogContent";

const blog = () => {
  return (
    <Layout>
      <Banner name="Our Blog" />
      <BlogList blogContent={blogContent} />
    </Layout>
  );
};
export default blog;
