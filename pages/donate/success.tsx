import React from "react";
import DonateSuccess from "../../components/Donate/DonateSuccess/DonateSuccess";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const success = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <DonateSuccess />
      </div>
      <Footer />
    </>
  );
};

export default success;
