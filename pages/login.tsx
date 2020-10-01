import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Signin from "../components/Signin/Signin";

const signin = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Signin />
      </div>
      <Footer />
    </>
  );
};

export default signin;
