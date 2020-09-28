import React from "react";
import styles from "./Navbar.module.css";
import Navlink from "./Navlink/Navlink";
import Navlogo from "./Navlogo/Navlogo";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Navlogo />
      <Navlink />
    </div>
  );
};

export default Navbar;
