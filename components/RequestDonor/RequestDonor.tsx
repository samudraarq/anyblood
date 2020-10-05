import { useRouter } from "next/router";
import React from "react";
import { db } from "../../config/fbConfig";
import RequestDonorFormik from "../Formik/RequestDonorFormik";
import { useAuth } from "../Hooks/use-auth";
import styled from "styled-components";

const Form = styled.div`
  max-width: 45rem;
  margin-bottom: 5rem;

  & > h2 {
    font-size: 3.6rem;
    font-weight: 800;
    margin-bottom: 1.6rem;
  }

  & > p {
    font-size: 1.7rem;
    font-weight: 500;
    margin-bottom: 2.4rem;
  }
`;

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
    <Form>
      <h2>Request Form</h2>
      <p>Please fill the form to request blood from other donor.</p>
      <RequestDonorFormik handleSubmit={handleSubmit} />
    </Form>
  );
};

export default RequestDonor;
