import React, { useState, useEffect } from "react";
import { Menu } from "react-feather";
import { auth } from "../../config/fbConfig";
import useWindowSize from "../Hooks/useWindowResize";
import MobileNavLink from "./MobileNavLink/MobileNavLink";
import styles from "./Navbar.module.css";
import Navlink from "./Navlink/Navlink";
import Navlogo from "./Navlogo/Navlogo";

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
    <div className={styles.navbar}>
      <Navlogo />
      {!isSideBar && hasCheckedUser && <Navlink />}
      {isSideBar && hasCheckedUser && (
        <>
          <span className={styles.burger} onClick={toggleNav}>
            <Menu />
          </span>
          <MobileNavLink isOpen={isOpen} toggleNav={toggleNav} />
        </>
      )}
    </div>
  );
};

export default Navbar;
