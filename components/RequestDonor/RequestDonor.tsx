import React from "react";
import RequestDonorFormik from "../Formik/RequestDonorFormik";
import styles from "./RequestDonor.module.css";

const RequestDonor = () => {
  const handleSubmit = (e) => {
    console.log(e);
  };

  return (
    <div>
      <div className={styles.form}>
        <h2>Request Form</h2>
        <p>Please fill the form to request blood from other donor.</p>
        <RequestDonorFormik handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default RequestDonor;
