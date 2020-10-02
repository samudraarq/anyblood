import React, { useEffect } from "react";
import DonateFormik from "../Formik/DonateFormik";
import styles from "./Donate.module.css";
import { db } from "../../config/fbConfig";
import { useAuth } from "../Hooks/use-auth";
import firebase from "../../config/fbConfig";
import { useRouter } from "next/router";

const Donate = () => {
  const { user } = useAuth();
  const router = useRouter();

  const handleSubmit = (e) => {
    const uid = user.uid;
    const newData = { uid, ...e };

    db.collection("users")
      .doc(uid)
      .update({
        donate: firebase.firestore.FieldValue.arrayUnion(newData),
      })
      .then(function (docRef) {
        // go to success page
        console.log("success");
        router.push("/donate/success");
      })
      .catch(function (error) {
        // display error
        console.log(error);
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
