import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Logo = styled.span`
  font-family: inherit;
  font-weight: 800;
  font-size: 3.6rem;
  cursor: pointer;
`;

const Navlogo = () => {
  return (
    <Link href="/">
      <Logo>AnyDonor</Logo>
    </Link>
  );
};

export default Navlogo;
