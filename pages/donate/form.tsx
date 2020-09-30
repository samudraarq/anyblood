import React from "react";
import Donate from "../../components/Donate/Donate";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const form = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Donate />
      </div>
      <Footer />
    </>
  );
};

export default form;
