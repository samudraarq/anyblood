import React, { useState } from "react";
import Link from "next/link";
import styles from "./SignupForm.module.css";
import { useAuth } from "../../Hooks/use-auth";
import { useRouter } from "next/router";
import SignupFormik from "../../Formik/SignupFormik";
import { db } from "../../../config/fbConfig";

const SignupForm = () => {
  const [signupError, setSignupError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const auth = useAuth();
  const router = useRouter();

  const handleSubmit = (
    email: string,
    password: string,
    passConfirmation: string
  ) => {
    if (password === passConfirmation) {
      auth
        .signup(email, password)
        .then((res) => {
          setSignupError(false);
          router.push("/");
          db.collection("users")
            .doc(res.uid)
            .set({
              email: res.email,
              nextBloodDonation: new Date(),
            })
            .then((res) => console.log("success added user"))
            .catch((err) => console.log(err));
        })
        .catch((err) => {
          setSignupError(true);
          setErrorMsg(err.message);
        });
    }
  };

  return (
    <div className={styles.form}>
      <h2>Sign Up</h2>
      <p>Start helping other people by creating an account first.</p>
      <SignupFormik handleSubmit={handleSubmit} />
      {signupError && <p className={styles.error}>{errorMsg}</p>}
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
