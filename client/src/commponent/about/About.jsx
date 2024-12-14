import React, { useEffect } from "react";
import TeamStore from "../../../store/AboutStore";
import StarRatings from "react-star-ratings/build/star-ratings.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  const { TeamsList, TeamsListRequest } = TeamStore();

  useEffect(() => {
    TeamsListRequest();
  }, [TeamsListRequest]);

  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container ">
      {/* About Section */}
      <div className="row align-items-center py-5">
        <div className="col-md-6 text-center ">
          <h2 className="fw-bold mb-4 colorText">About Us</h2>
          <p className="text-secondary fs-5 mb-4">
            We are a dynamic team passionate about React.js. Our mission is to
            provide exceptional solutions and the best services to our clients.
          </p>
          <button type="button" className="btn btnButton">
            Learn More
          </button>
        </div>
        <div className="col-md-6 text-center ">
          <img
            className="img-fluid rounded-3 cardHover"
            src="https://hwm-resume.vercel.app/about/hero.png"
            alt="About Us"
          />
        </div>
      </div>

      {/* Our Company Teams */}
      <div className="my-5 ">
        <h2 className="text-center fw-bold colorText">Our Company Teams</h2>
        <p className="text-center fs-5 mb-4">
          Meet the people who make everything possible.
        </p>
        <Slider {...settings}>
          {TeamsList?.map((item, i) => (
            <div key={i} className=" p-3 ">
              <div className=" card h-100 cardHover">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.name}
                />
                <div className="card-body text-center">
                  <StarRatings
                    rating={parseFloat(item["rating"])}
                    starRatedColor="#f7de00"
                    starDimension="20px"
                    starSpacing="2px"
                  />
                  <h6 className="card-title text-black mt-2">
                    Name: {item.name}
                  </h6>
                  <p className="card-text text-black">
                    <strong>Role:</strong> {item.role}
                  </p>
                  <button type="button" className="btn btnButton">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Subscription Section */}
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
  );
};

export default About;
