import React, { useState, useEffect } from "react";
import { Menu } from "react-feather";
import useWindowSize from "../Hooks/useWindowResize";
import MobileNavLink from "./MobileNavLink/MobileNavLink";
import styles from "./Navbar.module.css";
import Navlink from "./Navlink/Navlink";
import Navlogo from "./Navlogo/Navlogo";

const Navbar = () => {
  const [isSideBar, setIsSideBar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [width, height] = useWindowSize();

  useEffect(() => {
    if (width < 651) {
      setIsSideBar(true);
    } else {
      setIsSideBar(false);
    }
  }, [width]);

  return (
    <div className={styles.navbar}>
      <Navlogo />
      {!isSideBar && <Navlink />}
      {isSideBar && (
        <>
          <span
            className={styles.burger}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <Menu />
          </span>
          <MobileNavLink isOpen={isOpen} />
        </>
      )}
    </div>
  );
};

export default Navbar;
