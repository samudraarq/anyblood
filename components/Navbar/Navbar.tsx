import React, { useState } from "react";
import { Menu } from "react-feather";
import MobileNavLink from "./MobileNavLink/MobileNavLink";
import styles from "./Navbar.module.css";
import Navlink from "./Navlink/Navlink";
import Navlogo from "./Navlogo/Navlogo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.navbar}>
      <Navlogo />
      <Navlink />
      <span
        className={styles.burger}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Menu />
      </span>
      {isOpen && <MobileNavLink />}
    </div>
  );
};

export default Navbar;
