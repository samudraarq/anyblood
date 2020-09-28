import React from "react";
import Link from "next/link";
import { Lock, Mail } from "react-feather";
import styles from "./SignupForm.module.css";

const SignupForm = () => {
  return (
    <div className={styles.form}>
      <h2>Sign Up</h2>
      <p>Start helping other people by creating an account first.</p>
      <form action="">
        <div className={styles.inputContainer}>
          <span className={styles.icon}>
            <Mail />
          </span>
          <input
            className={styles.input}
            type="email"
            placeholder="Email Address"
          />
        </div>
        <div className={styles.inputContainer}>
          <span className={styles.icon}>
            <Lock />
          </span>
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
          />
        </div>
        <div className={styles.inputContainer}>
          <span className={styles.icon}>
            <Lock />
          </span>
          <input
            className={styles.input}
            type="password"
            placeholder="Password Confirmation"
          />
        </div>
        <button className={styles.button}>Sign up</button>
      </form>
      <p className={styles.account}>
        Already have account?
        <Link href="/signin">
          <span> Go here</span>
        </Link>
      </p>
    </div>
  );
};

export default SignupForm;
