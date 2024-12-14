import React from "react";
import "../../assets/css/homeHero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="banner-container">
      {/* Banner Image with overlay */}
      <div className="banner-image">
        <div className="banner-overlay d-flex flex-column align-items-center justify-content-center text-center">
          <h className="display-4 text-light fw-medium ">
            Welcome to Our Website
          </h>
          <p className="lead text-light fs-4 ">Your journey starts here</p>
          <Link to={`/about`} className="btn   mt-3 btnButton">
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
