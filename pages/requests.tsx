import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import RequestList from "../components/RequestList/RequestList";

const requests = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <RequestList />
      </div>
      <Footer />
    </>
  );
};

export default requests;
