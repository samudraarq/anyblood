import Link from "next/link";
import React from "react";
import styles from "./RequestDonorSuccess.module.css";
import styled from "styled-components";

const Container = styled.div`
  height: 75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 3.6rem;
  font-weight: 800;
  margin-top: 7.2rem;
`;

const Text = styled.p`
  font-size: 2.1rem;
  font-weight: 500;
  margin-top: 1.2rem;
`;

const Button = styled.button`
  margin-top: 7.2rem;
  width: 30rem;
  height: 6rem;
  background-color: #18191f;
  border: none;
  border-radius: 1.6rem;
  color: #ffffff;
  font-family: inherit;
  font-size: 2.1rem;
  font-weight: 800;
  cursor: pointer;
  outline: none;
`;

const RequestDonorSuccess = () => {
  return (
    <Container>
      <img src="/image/success-icon.svg" alt="success-icon" />
      <Title>Request Posted</Title>
      <Text>You can see your request in the Request Post List</Text>
      <Link href="/">
        <Button>Okay</Button>
      </Link>
    </Container>
  );
};

export default RequestDonorSuccess;
