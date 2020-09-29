import React, { useState } from "react";
import Link from "next/link";
import styles from "./SignupForm.module.css";
import { useAuth } from "../../Hooks/use-auth";
import { useRouter } from "next/router";
import SignupFormik from "../../Formik/SignupFormik";

const SignupForm = () => {
  const [signupError, setSignupError] = useState(false);

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
        })
        .catch((err) => setSignupError(true));
    }
  };

  return (
    <div className={styles.form}>
      <h2>Sign Up</h2>
      <p>Start helping other people by creating an account first.</p>
      <SignupFormik handleSubmit={handleSubmit} />
      {signupError && <p>Can't signup</p>}
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
