import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ChevronRight, User } from "react-feather";
import styles from "./Formik.module.css";

const RequestDonorFormik = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={{
        fullname: "",
        age: "",
        bloodtype: "",
        bloodbagsamount: "",
        place: "",
      }}
      validationSchema={Yup.object({
        fullname: Yup.string().required("Required"),
        age: Yup.number().required("Required"),
        bloodtype: Yup.string().required("Required"),
        bloodbagsamount: Yup.number().required("Required"),
        place: Yup.string().required("Required"),
      })}
      onSubmit={(val) => {
        handleSubmit(val);
      }}
    >
      <Form>
        <div className={styles.inputContainer}>
          <span className={styles.icon}>
            <User />
          </span>
          <Field
            name="fullname"
            type="text"
            placeholder="Full Name"
            className={styles.input}
          />
        </div>
        <ErrorMessage name="fullname">
          {(msg) => <div className={styles.alert}>{msg}</div>}
        </ErrorMessage>
        <div className={styles.inputContainer}>
          <span className={styles.icon}>
            <User />
          </span>
          <Field
            name="age"
            type="number"
            placeholder="Age"
            className={styles.input}
          />
        </div>
        <ErrorMessage name="age">
          {(msg) => <div className={styles.alert}>{msg}</div>}
        </ErrorMessage>
        <div className={styles.inputContainer}>
          <span className={styles.icon}>
            <User />
          </span>
          <Field
            name="bloodtype"
            type="text"
            placeholder="Bloodtype"
            className={styles.input}
          />
        </div>
        <ErrorMessage name="bloodtype">
          {(msg) => <div className={styles.alert}>{msg}</div>}
        </ErrorMessage>
        <div className={styles.inputContainer}>
          <span className={styles.icon}>
            <User />
          </span>
          <Field
            name="bloodbagsamount"
            type="number"
            placeholder="Blood Bags Amount"
            className={styles.input}
          />
        </div>
        <ErrorMessage name="bloodbagsamount">
          {(msg) => <div className={styles.alert}>{msg}</div>}
        </ErrorMessage>
        <div className={styles.inputContainer}>
          <span className={styles.icon}>
            <User />
          </span>
          <Field
            name="place"
            type="text"
            placeholder="Place"
            className={styles.input}
          />
        </div>
        <ErrorMessage name="place">
          {(msg) => <div className={styles.alert}>{msg}</div>}
        </ErrorMessage>
        <button type="submit" className={styles.sendform}>
          <span>Send Form</span>
          <ChevronRight />
        </button>
      </Form>
    </Formik>
  );
};

export default RequestDonorFormik;
