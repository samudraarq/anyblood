import Link from "next/link";
import React from "react";
import { useAuth } from "../../Hooks/use-auth";
import styled from "styled-components";

const Card = styled.div`
  padding: 2rem 3.5rem;
  height: 25rem;
  width: 47rem;

  background-color: ${(props) => props.bgColor};

  border: 2px solid #18191f;
  border-radius: 1.6rem;
  box-shadow: 0px 6px 0px 0px #18191f;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > h2 {
    font-size: 3.6rem;
    font-weight: 700;
  }

  & > button {
    height: 3.6rem;
    font-family: inherit;
    font-size: 1.2rem;
    font-weight: 800;
    background: #ffbd12;
    border: 2px solid #18191f;
    box-shadow: 0px 2px 0px #18191f;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s ease-in;
    outline: none;
  }

  & > button:hover {
    transform: translateY(-3px);
    box-shadow: 0px 5px 0px #18191f;
  }

  & > button:active {
    transform: translateY(1px);
    box-shadow: 0px 1px 0px #18191f;
  }

  @media only screen and (max-width: 750px) {
    margin-bottom: 2.4rem;
  } ;
`;

interface Props {
  bgColor: string;
  title: string;
  btnCta: string;
  link: string;
}

const MainCard: React.FC<Props> = ({ bgColor, title, btnCta, link }) => {
  const { user } = useAuth();

  return (
    <Card bgColor={bgColor}>
      <h2>{title}</h2>
      <Link href={user ? link : "/login"}>
        <button>{btnCta}</button>
      </Link>
    </Card>
  );
};

export default MainCard;
