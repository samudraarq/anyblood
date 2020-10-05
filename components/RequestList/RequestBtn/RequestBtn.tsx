import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 20rem;
  height: 5rem;
  background-color: #d6fcf7;
  border: 2px solid #18191f;
  border-radius: 1rem;
  box-shadow: 0px 2px 0px 0px #18191f;
  margin-top: 2rem;
  font-family: inherit;
  font-weight: 700;
  font-size: 1.6rem;
  cursor: pointer;
  transition: all 0.1s;
  outline: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 4px 0px 0px #18191f;
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0px 1px 0px 0px #18191f;
  }
`;

const RequestBtn = () => {
  return (
    <Link href="/request/form">
      <Button>Request</Button>
    </Link>
  );
};

export default RequestBtn;
