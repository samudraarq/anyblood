import React from "react";
import MainCard from "./MainCard/MainCard";
import styled from "styled-components";

const MainContainer = styled.div`
  height: 60rem;
  width: 100%;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  & h1 {
    font-size: 3.6rem;
    font-weight: 700;
  }
`;

const Cards = styled.div`
  margin-top: 7.7rem;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Main = () => {
  return (
    <MainContainer>
      <h1>Help others, with blood</h1>
      <Cards>
        <MainCard
          bgColor="#d6fcf7"
          title="Give blood for the one in needs"
          btnCta="Donate Blood"
          link="/donate/form"
        />
        <MainCard
          bgColor="#FFF3F8"
          title="Request blood so others can see"
          btnCta="Request Blood"
          link="/request/form"
        />
      </Cards>
    </MainContainer>
  );
};

export default Main;
