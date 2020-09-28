import React from "react";
import styles from "./Signin.module.css";
import SiginForm from "./SigninForm/SigninForm";

const Signin = () => {
  return (
    <div className={styles.signin}>
      <img src="/image/signin-people.png" alt="signin-people" />
      <SiginForm />
    </div>
  );
};

export default Signin;
