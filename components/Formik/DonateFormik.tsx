import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ChevronRight, Lock, User } from "react-feather";
import styles from "./Formik.module.css";

const DonateFormik = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={{
        fullname: "",
        age: "",
        bloodtype: "",
        height: "",
        weight: "",
        travelhistory: "",
        medicationhistory: "",
        place: "",
      }}
      validationSchema={Yup.object({
        fullname: Yup.string().required("Required"),
        age: Yup.number().required("Required"),
        bloodtype: Yup.string().required("Required"),
        height: Yup.number().required("Required"),
        weight: Yup.number().required("Required"),
        travelhistory: Yup.string(),
        medicationhistory: Yup.string(),
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
            name="height"
            type="number"
            placeholder="Height"
            className={styles.input}
          />
        </div>
        <ErrorMessage name="height">
          {(msg) => <div className={styles.alert}>{msg}</div>}
        </ErrorMessage>
        <div className={styles.inputContainer}>
          <span className={styles.icon}>
            <User />
          </span>
          <Field
            name="weight"
            type="number"
            placeholder="Weight"
            className={styles.input}
          />
        </div>
        <ErrorMessage name="weight">
          {(msg) => <div className={styles.alert}>{msg}</div>}
        </ErrorMessage>
        <div className={styles.inputContainer}>
          <span className={styles.textareaicon}>
            <User />
          </span>
          <Field
            name="travelhistory"
            component="textarea"
            rows="6"
            cols="40"
            placeholder="Travel History"
            className={`${styles.textarea} ${styles.input}`}
          />
        </div>
        <ErrorMessage name="travelhistory">
          {(msg) => <div className={styles.alert}>{msg}</div>}
        </ErrorMessage>
        <div className={styles.inputContainer}>
          <span className={styles.textareaicon}>
            <User />
          </span>
          <Field
            name="medicationhistory"
            component="textarea"
            rows="6"
            cols="40"
            placeholder="Medication History"
            className={`${styles.textarea} ${styles.input}`}
          />
        </div>
        <ErrorMessage name="medicationhistory">
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

export default DonateFormik;
