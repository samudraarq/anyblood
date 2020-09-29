import React, { useState } from "react";
import Link from "next/link";
import { Lock, Mail } from "react-feather";
import styles from "./SignupForm.module.css";
import { useAuth } from "../../Hooks/use-auth";
import { useRouter } from "next/router";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passConfirmation, setPassConfirmation] = useState("");

  const auth = useAuth();
  const router = useRouter();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const val = e.target.value;
    const name = e.target.name;
    switch (name) {
      case "email":
        setEmail(val);
        break;
      case "password":
        setPassword(val);
        break;
      case "confPassword":
        setPassConfirmation(val);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (password === passConfirmation) {
      auth.signup(email, password);
      router.push("/");
    }
  };

  return (
    <div className={styles.form}>
      <h2>Sign Up</h2>
      <p>Start helping other people by creating an account first.</p>
      <form action="" onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <span className={styles.icon}>
            <Mail />
          </span>
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleInput}
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
            name="password"
            onChange={handleInput}
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
            name="confPassword"
            onChange={handleInput}
          />
        </div>
        <button className={styles.button}>Sign up</button>
      </form>
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
