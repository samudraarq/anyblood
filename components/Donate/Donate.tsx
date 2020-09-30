import React from "react";
import DonateFormik from "../Formik/DonateFormik";
import styles from "./Donate.module.css";

const Donate = () => {
  const handleSubmit = (e) => {
    console.log(e);
  };

  return (
    <div className={styles.form}>
      <h2>Donor Form</h2>
      <p>Please fill the form to donate your blood.</p>
      <DonateFormik handleSubmit={handleSubmit} />
    </div>
  );
};

export default Donate;
