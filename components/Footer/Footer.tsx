import React from "react";
import { GitHub, Instagram, Linkedin, Twitter } from "react-feather";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #e9e7fc;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > span {
    font-weight: 400;
    font-size: 1.6rem;
    margin-top: 1.6rem;
  }
`;

const Logo = styled.div`
  & > a {
    margin: 0 2rem;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Logo>
        <a
          href="https://www.linkedin.com/in/samudra-faris-arqam/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Linkedin />
        </a>
        <a
          href="https://github.com/samudraarq"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GitHub />
        </a>
        <a
          href="https://twitter.com/Samudra_Arq"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Twitter />
        </a>
        <a
          href="https://www.instagram.com/samudra_arq/?hl=en"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Instagram />
        </a>
      </Logo>
      <span>Samudra@2020</span>
    </StyledFooter>
  );
};

export default Footer;
