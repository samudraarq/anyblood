import { useRouter } from "next/router";
import React from "react";
import firebase, { db } from "../../config/fbConfig";
import RequestDonorFormik from "../Formik/RequestDonorFormik";
import { useAuth } from "../Hooks/use-auth";
import styles from "./RequestDonor.module.css";

const RequestDonor = () => {
  const { user } = useAuth();
  const route = useRouter();

  const handleSubmit = (e) => {
    console.log(e);
    const newData = {
      userId: user.uid,
      userEmail: user.email,
      ...e,
      // date: firebase.firestore.Timestamp.now(),
      date: new Date(),
    };
    console.log(newData);

    db.collection("requests")
      .add({
        ...newData,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        route.push("/request/success");
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
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
