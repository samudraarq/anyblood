import React from "react";
import Footer from "../components/Footer/Footer";
import HistoryList from "../components/HistoryList/HistoryList";
import Navbar from "../components/Navbar/Navbar";

const history = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <HistoryList />
      </div>
      <Footer />
    </>
  );
};

export default history;
