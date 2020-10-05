import React, { useState, useEffect } from "react";
import { Menu } from "react-feather";
import styled from "styled-components";
import { auth } from "../../config/fbConfig";
import useWindowSize from "../Hooks/useWindowResize";
import MobileNavLink from "./MobileNavLink/MobileNavLink";
import Navlink from "./Navlink/Navlink";
import Navlogo from "./Navlogo/Navlogo";

const StyledNavbar = styled.div`
  height: 12.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Burger = styled.span`
  cursor: pointer;
`;

const Navbar = () => {
  const [isSideBar, setIsSideBar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hasCheckedUser, setHasCheckedUser] = useState(false);

  const [width, height] = useWindowSize();

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    if (width < 651) {
      setIsSideBar(true);
    } else {
      setIsSideBar(false);
    }
  }, [width]);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const checkUser = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setHasCheckedUser(true);
      } else {
        setHasCheckedUser(true);
      }
    });
  };

  return (
    <StyledNavbar>
      <Navlogo />
      {!isSideBar && hasCheckedUser && <Navlink />}
      {isSideBar && hasCheckedUser && (
        <>
          <Burger onClick={toggleNav}>
            <Menu />
          </Burger>
          <MobileNavLink isOpen={isOpen} toggleNav={toggleNav} />
        </>
      )}
    </StyledNavbar>
  );
};

export default Navbar;
