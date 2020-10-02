import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import { useAuth } from "../../components/Hooks/use-auth";
import Navbar from "../../components/Navbar/Navbar";
import RequestDonor from "../../components/RequestDonor/RequestDonor";

const form = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/login");
    }
  }, []);

  return (
    <>
      <div className="container">
        <Navbar />
        <RequestDonor />
      </div>
      <Footer />
    </>
  );
};

export default form;
