import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Signup from "../components/Signup/Signup";

const signup = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Signup />
      </div>
      <Footer />
    </>
  );
};

export default signup;
