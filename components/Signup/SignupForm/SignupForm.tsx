import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "../../Hooks/use-auth";
import { useRouter } from "next/router";
import SignupFormik from "../../Formik/SignupFormik";
import { db } from "../../../config/fbConfig";
import styled from "styled-components";

const Form = styled.div`
  max-width: 45rem;

  & > h2 {
    font-size: 3.6rem;
    font-weight: 800;
    margin-bottom: 1.6rem;
  }

  & > p {
    font-size: 1.7rem;
    font-weight: 500;
    margin-bottom: 4.8rem;
  }
`;

const Error = styled.p`
  color: #f95a2c;
  margin-top: 1rem;
`;

const Account = styled.p`
  margin-top: 3.2rem;

  & > span {
    color: #f95a2c;
    cursor: pointer;
  }
`;

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
    <Form>
      <h2>Sign Up</h2>
      <p>Start helping other people by creating an account first.</p>
      <SignupFormik handleSubmit={handleSubmit} />
      {signupError && <Error>{errorMsg}</Error>}
      <Account>
        Already have account?
        <Link href="/login">
          <span> Go here</span>
        </Link>
      </Account>
    </Form>
  );
};

export default SignupForm;
