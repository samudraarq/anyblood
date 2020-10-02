import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import RequestDonorSuccess from "../../components/RequestDonor/RequestDonorSuccess/RequestDonorSuccess";

const success = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <RequestDonorSuccess />
      </div>
      <Footer />
    </>
  );
};

export default success;
