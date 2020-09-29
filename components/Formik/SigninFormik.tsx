import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Lock, Mail } from "react-feather";
import styles from "./Formik.module.css";

const SigninFormik = ({ handleSubmit }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Password must be >6 characters")
        .required("Required"),
    }),
    onSubmit: ({ email, password }) => {
      handleSubmit(email, password);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={styles.inputContainer}>
        <span className={styles.icon}>
          <Mail />
        </span>
        <input
          className={styles.input}
          id="email"
          type="email"
          {...formik.getFieldProps("email")}
          placeholder="Email Address"
        />
      </div>
      {formik.touched.email && formik.errors.email ? (
        <div className={styles.alert}>{formik.errors.email}</div>
      ) : null}
      <div className={styles.inputContainer}>
        <span className={styles.icon}>
          <Lock />
        </span>
        <input
          className={styles.input}
          id="password"
          type="password"
          {...formik.getFieldProps("password")}
          placeholder="Password"
        />
      </div>
      {formik.touched.password && formik.errors.password ? (
        <div className={styles.alert}>{formik.errors.password}</div>
      ) : null}

      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  );
};

export default SigninFormik;
