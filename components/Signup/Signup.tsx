import React from "react";
import SignupForm from "./SignupForm/SignupForm";
import styles from "./Signup.module.css";

const Signup = () => {
  return (
    <div className={styles.signup}>
      <img src="/image/signup-people.png" alt="signup-people" />
      <SignupForm />
    </div>
  );
};

export default Signup;
