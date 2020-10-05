import React from "react";
import SignupForm from "./SignupForm/SignupForm";
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

const Signup = () => {
  return (
    <Container>
      <img src="/image/signup-people.png" alt="signup-people" />
      <SignupForm />
    </Container>
  );
};

export default Signup;
