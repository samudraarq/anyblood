import React, { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import { useRouter } from "next/router";
import { useAuth } from "../components/Hooks/use-auth";
import Navbar from "../components/Navbar/Navbar";
import Signin from "../components/Signin/Signin";

const signin = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  });

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
