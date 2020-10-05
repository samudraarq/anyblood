import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "../../Hooks/use-auth";
import { useRouter } from "next/router";
import SigninFormik from "../../Formik/SigninFormik";
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
    <Form>
      <h2>Login</h2>
      <p>Please login to your account so you can help other people again.</p>
      <SigninFormik handleSubmit={handleSubmit} />
      {loginError && <Error>{errorMsg}</Error>}
      <Account>
        You are new?
        <Link href="/signup">
          <span> Create new</span>
        </Link>
      </Account>
    </Form>
  );
};

export default SigninForm;
