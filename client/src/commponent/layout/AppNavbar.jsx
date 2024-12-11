import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import UserStore from "../../../store/UserStore";
import UserSubmitButton from "./../users/UserSubmitButton";
import Cookies from "js-cookie";

const AppNavbar = () => {
  let navigate = useNavigate();

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
      <div className="container-fluid text-white p-2 bg-secondary">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-md-6">
              <span>
                <span className="f-12">
                  <i className="bi bi-envelope"></i>
                  <a
                    href="mailto:azizulhakim68178@gmail.com"
                    className="ms-2 text-white text-decoration-none fw-bold"
                  >
                    azizulhakim68178@gmail.com
                  </a>
                </span>
                <span className="f-12 mx-2">
                  <i className="bi bi-phone"></i>
                  <a
                    href="tel:01743086886"
                    className="ms-2 text-white fw-bold text-decoration-none"
                  >
                    01743-086886
                  </a>
                </span>
              </span>
            </div>
            <div className="col-md-6">
              <span className="float-end">
                <span className="bodySmal mx-2">
                  <i className="bi bi-whatsapp"></i>
                </span>
                <span className="bodySmal mx-2">
                  <i className="bi bi-youtube"></i>
                </span>
                <span className="bodySmal">
                  <i className="bi bi-facebook"></i>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar sticky-top shadow-sm bg-white navbar-expand-lg navbar-light">
        <div className="container d-flex justify-content- align-items-center p-0">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-brand">
            <Link to="/">
              <img className="img-fluid" src={logo} alt="Logo" width="96px" />
            </Link>
          </div>

          <div
            className="collapse navbar-collapse text-end"
            id="navbarTogglerDemo01"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/service-page">
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
