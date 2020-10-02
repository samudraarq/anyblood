import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const success = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        This is the Success page
      </div>
      <Footer />
    </>
  );
};

export default success;
