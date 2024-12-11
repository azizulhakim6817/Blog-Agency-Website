import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import UserStore from "../../../store/UserStore";
import Cookies from "js-cookie";

const AppNavbar = () => {
  const navigate = useNavigate();
  const { isLogin, UserLogoutequest } = UserStore();

  const onLogout = async () => {
    try {
      await UserLogoutequest();
      sessionStorage.clear();
      localStorage.clear();
      Cookies.remove("token");
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="container-fluid bg-secondary text-white p-2">
        <div className="container">
          <div className="row align-items-center">
            {/* Contact Details */}
            <div className="col-md-6 d-flex justify-content-start">
              <div className="me-3">
                <i className="bi bi-envelope"></i>
                <a
                  href="mailto:azizulhakim68178@gmail.com"
                  className="ms-2 text-white text-decoration-none fw-bold"
                >
                  azizulhakim68178@gmail.com
                </a>
              </div>
              <div>
                <i className="bi bi-phone"></i>
                <a
                  href="tel:01743086886"
                  className="ms-2 text-white text-decoration-none fw-bold"
                >
                  01743-086886
                </a>
              </div>
            </div>
            {/* Social Media Icons */}
            <div className="col-md-6 d-flex justify-content-md-end mt-2 mt-md-0">
              <a href="#" className="text-white mx-2">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="#" className="text-white mx-2">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar sticky-top navbar-expand-lg bg-white shadow-sm">
        <div className="container">
          {/* Logo */}
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Logo" width="96px" className="img-fluid" />
          </Link>

          {/* Navbar Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarToggler"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/service">
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AppNavbar;
