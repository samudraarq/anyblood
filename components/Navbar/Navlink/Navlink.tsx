import { useRouter } from "next/router";
import React from "react";
import { useAuth } from "../../Hooks/use-auth";
import Link from "../../utils/Link";
import styled from "styled-components";

const Nav = styled.ul`
  display: flex;

  & li {
    margin-left: 3rem;
    font-family: inherit;
    font-size: 2.4rem;
    font-weight: 500;
    list-style: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  & li:hover {
    color: #f95a2c;
  }
`;

const Navlink = () => {
  const router = useRouter();
  const { user, signout } = useAuth();

  const logoutUser = () => {
    signout();
    router.push("/");
  };

  return (
    <Nav>
      <Link href="/requests">
        <li>Request</li>
      </Link>
      {user && (
        <>
          <Link href="/history">
            <li>History</li>
          </Link>
          <li onClick={logoutUser}>Logout</li>
        </>
      )}
      {!user && (
        <>
          <Link href="/signup">
            <li>Signup</li>
          </Link>
          <Link href="/login">
            <li>Login</li>
          </Link>
        </>
      )}
      {/* <Link href="/about">
        <li>About</li>
      </Link> */}
    </Nav>
  );
};

export default Navlink;
