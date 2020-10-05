import React from "react";
import { useRouter } from "next/router";
import Link from "../../utils/Link";
import { useAuth } from "../../Hooks/use-auth";
import styled from "styled-components";

const SideNav = styled.div`
  position: fixed;
  width: 80%;
  right: -100%;
  top: 12.6rem;
  bottom: 0;
  z-index: 10;
  background-color: #fff;
  transition: all 0.4s ease-in-out;

  right: ${(props) => props.isOpen && 0};
`;

const Nav = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & li {
    font-size: 2.4rem;
    font-weight: 500;
    font-family: inherit;
    list-style: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    margin-top: 10rem;
  }

  & li:hover {
    color: #f95a2c;
  }
`;

const MobileNavLink = ({ isOpen, toggleNav }) => {
  const router = useRouter();

  const { user, signout } = useAuth();

  const logoutUser = () => {
    signout();
    router.push("/");
  };

  return (
    <SideNav isOpen={isOpen}>
      <Nav onClick={toggleNav}>
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
    </SideNav>
  );
};

export default MobileNavLink;
