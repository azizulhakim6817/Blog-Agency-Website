import React, { useEffect } from "react";
import Layout from "../commponent/layout/Layout";
import BlogDetails from "../commponent/blogs/BlogDetails";
import Service from "../commponent/service/Service";


const BlogDetailsPage = () => {
 

  return (
    <Layout>
      <BlogDetails />
      <Service/>
    </Layout>
  );
};

export default BlogDetailsPage;
