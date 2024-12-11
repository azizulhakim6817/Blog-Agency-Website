import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";
import AdminProfile from "./../admin-home/AdminProfile";

const AdminHeader = () => {
  return (
    <div>
      <nav className="  navbar navbar-expand-lg navbar-light ">
        <div className="container d-lg-block text-lg-center">
          <Link to="/dashboard" className="navbar-brand ">
            <img src={Logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav NavbarNav mx-lg-auto ms-md-auto ms-sm-auto ms-auto mb-2 mb-lg-0 d-lg-block d-md-flex d-sm-flex d-flex text-md-center ">
              <li className="nav-item">
                <NavLink
                  to="/dashboard"
                  className="nav-link"
                  activeClassName="active"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/service-page"
                  className="nav-link"
                  activeClassName="active"
                  aria-current="page"
                >
                  Service
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/blog-page"
                  className="nav-link"
                  activeClassName="active"
                  aria-current="page"
                >
                  Blogs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/team-page" // Assuming a teams page exists
                  className="nav-link"
                  activeClassName="active"
                  aria-current="page"
                >
                  Teams
                </NavLink>
              </li>
              <li className=" nav-item profileItem">
                <AdminProfile />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <adminHomePage />
      </div>
    </div>
  );
};

export default AdminHeader;
