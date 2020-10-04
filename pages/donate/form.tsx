import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Donate from "../../components/Donate/Donate";
import Footer from "../../components/Footer/Footer";
import { useAuth } from "../../components/Hooks/use-auth";
import Navbar from "../../components/Navbar/Navbar";
import { auth } from "../../config/fbConfig";

const form = () => {
  const router = useRouter();

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // there is a user
      } else {
        router.replace("/login");
      }
    });
  };

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
