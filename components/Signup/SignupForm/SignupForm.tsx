import React, { useState } from "react";
import Link from "next/link";
import { Lock, Mail } from "react-feather";
import styles from "./SignupForm.module.css";
import { useAuth } from "../../Hooks/use-auth";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignupForm = () => {
  const auth = useAuth();
  const router = useRouter();

  const handleSubmit = (
    email: string,
    password: string,
    passConfirmation: string
  ) => {
    if (password === passConfirmation) {
      auth.signup(email, password);
      router.push("/");
    }
  };

  const SignupForm = () => {
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
        confPassword: "",
      },
      validationSchema: Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .min(6, "Password must be >6 characters")
          .required("Required"),
        confPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .min(6, "Password must be >6 characters")
          .required("Required"),
      }),
      onSubmit: ({ email, password, confPassword }) => {
        handleSubmit(email, password, confPassword);
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
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
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
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Password"
          />
        </div>
        {formik.touched.password && formik.errors.password ? (
          <div className={styles.alert}>{formik.errors.password}</div>
        ) : null}
        <div className={styles.inputContainer}>
          <span className={styles.icon}>
            <Lock />
          </span>
          <input
            className={styles.input}
            id="confPassword"
            name="confPassword"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confPassword}
            placeholder="Password Confirmation"
          />
        </div>
        {formik.touched.confPassword && formik.errors.confPassword ? (
          <div className={styles.alert}>{formik.errors.confPassword}</div>
        ) : null}
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    );
  };

  return (
    <div className={styles.form}>
      <h2>Sign Up</h2>
      <p>Start helping other people by creating an account first.</p>
      <SignupForm />
      <p className={styles.account}>
        Already have account?
        <Link href="/login">
          <span> Go here</span>
        </Link>
      </p>
    </div>
  );
};

export default SignupForm;
