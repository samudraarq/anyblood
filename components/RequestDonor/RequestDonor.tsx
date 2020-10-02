import React from "react";
import styles from "./RequestDonor.module.css";

const RequestDonor = () => {
  return (
    <div>
      <div className={styles.form}>
        <h2>Request Form</h2>
        <p>Please fill the form to request blood from other donor.</p>
      </div>
    </div>
  );
};

export default RequestDonor;
