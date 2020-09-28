import React from "react";
import Link from "next/link";
import { Lock, Mail } from "react-feather";
import styles from "./SigninForm.module.css";

const SiginForm = () => {
  return (
    <div className={styles.form}>
      <h2>Login</h2>
      <p>Please login to your account so you can help other people again.</p>
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
        <button className={styles.button}>Sign in</button>
      </form>
      <p className={styles.account}>
        You are new?
        <Link href="/signup">
          <span> Create new</span>
        </Link>
      </p>
    </div>
  );
};

export default SiginForm;
