import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Donate from "../../components/Donate/Donate";
import Footer from "../../components/Footer/Footer";
import { useAuth } from "../../components/Hooks/use-auth";
import Navbar from "../../components/Navbar/Navbar";

const form = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, []);

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
