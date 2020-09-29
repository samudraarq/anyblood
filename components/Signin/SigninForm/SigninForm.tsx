import React, { useState } from "react";
import Link from "next/link";
import styles from "./SigninForm.module.css";
import { useAuth } from "../../Hooks/use-auth";
import { useRouter } from "next/router";
import SigninFormik from "../../Formik/SigninFormik";

const SigninForm = () => {
  const [loginError, setLoginError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const auth = useAuth();
  const router = useRouter();

  const handleSubmit = (email: string, password: string) => {
    auth
      .signin(email, password)
      .then((res) => {
        setLoginError(false);
        router.push("/");
      })
      .catch((err) => {
        setLoginError(true);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className={styles.form}>
      <h2>Login</h2>
      <p>Please login to your account so you can help other people again.</p>
      <SigninFormik handleSubmit={handleSubmit} />
      {loginError && <p className={styles.error}>{errorMsg}</p>}
      <p className={styles.account}>
        You are new?
        <Link href="/signup">
          <span> Create new</span>
        </Link>
      </p>
    </div>
  );
};

export default SigninForm;
