import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Lock, Mail } from "react-feather";
import styles from "./Formik.module.css";

const SigninFormik = ({ handleSubmit }) => (
  <Formik
    initialValues={{
      email: "",
      password: "",
    }}
    validationSchema={Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Password must be >6 characters")
        .required("Required"),
    })}
    onSubmit={({ email, password }) => {
      handleSubmit(email, password);
    }}
  >
    <Form>
      <div className={styles.inputContainer}>
        <span className={styles.icon}>
          <Mail />
        </span>
        <Field
          name="email"
          type="text"
          placeholder="Email Address"
          className={styles.input}
        />
      </div>
      <ErrorMessage name="email">
        {(msg) => <div className={styles.alert}>{msg}</div>}
      </ErrorMessage>
      <div className={styles.inputContainer}>
        <span className={styles.icon}>
          <Lock />
        </span>
        <Field
          name="password"
          type="password"
          placeholder="Password"
          className={styles.input}
        />
      </div>
      <ErrorMessage name="password">
        {(msg) => <div className={styles.alert}>{msg}</div>}
      </ErrorMessage>
      <button type="submit" className={styles.button}>
        Submit
      </button>
    </Form>
  </Formik>
);

export default SigninFormik;
