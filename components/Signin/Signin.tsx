import React from "react";
import SiginForm from "./SigninForm/SigninForm";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70rem;

  @media only screen and (max-width: 750px) {
    & img {
      display: none;
    }
  }
`;

const Signin = () => {
  return (
    <Container>
      <img src="/image/signin-people.png" alt="signin-people" />
      <SiginForm />
    </Container>
  );
};

export default Signin;
