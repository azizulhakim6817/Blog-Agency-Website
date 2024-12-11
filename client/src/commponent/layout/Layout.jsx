import React from "react";
import Footer from "./Footer";
import AppNavbar from "./AppNavbar";
import { Toaster } from "react-hot-toast";

const Layout = (props) => {
  return (
    <>
      <AppNavbar />
      {props.children}
      <Toaster position="bottom-center" />
      <Footer />
    </>
  );
};

export default Layout;
