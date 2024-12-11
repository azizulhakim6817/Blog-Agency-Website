import React from "react";
import Layout from "./../commponent/layout/Layout";
import Blog from "../commponent/blogs/Blog";
import Service from "../commponent/service/Service";
import Hero from "./../commponent/home/Hero";

const HomePage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Blog />
        {/* Subscription Section */}
        <Service />
        <div className=" my-5">
          <section className="container mt-5 py-5 text-center bg-light">
            <h2 className="mb-3">Subscribe to Our Newsletter</h2>
            <p className="text-muted mb-4">
              Stay updated with the latest news and exclusive offers. Enter your
              email below to subscribe!
            </p>
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-5">
                <form className="d-flex gap-2">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                  <button type="submit" className="btn btnButton">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default HomePage;
