import React, { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Signup from "../components/Signup/Signup";
import { useRouter } from "next/router";
import { useAuth } from "../components/Hooks/use-auth";

const signup = () => {
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
        <Signup />
      </div>
      <Footer />
    </>
  );
};

export default signup;
