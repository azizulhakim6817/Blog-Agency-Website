import React from "react";
import ServiceDetails from "../commponent/service/ServiceDetails";
import Layout from './../commponent/layout/Layout';
import Blog from './../commponent/blogs/Blog';

const ServiceDetailsPage = () => {
  return (
    <Layout>
      <ServiceDetails />
      <Blog/>
    </Layout>
  );
};

export default ServiceDetailsPage;
