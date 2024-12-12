import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const AppNavbar = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="container-fluid bg-secondary text-white p-2">
        <div className="container">
          <div className="row align-items-center">
            {/* Contact Details */}
            <div className="col-lg-6 col-md-12 d-flex justify-content-center justify-content-lg-start mb-2 mb-lg-0">
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
            <div className="col-lg-6 col-md-12 d-flex justify-content-center justify-content-lg-end">
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
          <NavLink to="/" className="navbar-brand">
            <img src={logo} alt="Logo" width="96px" className="img-fluid" />
          </NavLink>

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
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "colorText" : ""}`
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "colorText" : ""}`
                  }
                  to="/service"
                >
                  Service
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "colorText" : ""}`
                  }
                  to="/blog"
                >
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "colorText" : ""}`
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "colorText" : ""}`
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AppNavbar;
