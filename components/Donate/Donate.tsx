import React, { useEffect } from "react";
import DonateFormik from "../Formik/DonateFormik";
import styles from "./Donate.module.css";
import { firestore } from "../../config/fbConfig";
import { useAuth } from "../Hooks/use-auth";

const Donate = () => {
  const { user } = useAuth();

  const handleSubmit = (e) => {
    const uid = user.uid;
    const newData = { uid, ...e };

    firestore
      .collection("donate")
      .add({
        ...newData,
      })
      .then(function (docRef) {
        // go to success page
      })
      .catch(function (error) {
        // display error
      });
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
