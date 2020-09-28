import React from "react";
import Link from "../../utils/Link";
import styles from "./Navlink.module.css";

const Navlink = () => {
  return (
    <ul className={styles.nav}>
      <Link href="/requests">
        <li>Request</li>
      </Link>
      <Link href="/history">
        <li>History</li>
      </Link>
      <Link href="/about">
        <li>About</li>
      </Link>
      <Link href="/signup">
        <li>Signup</li>
      </Link>
      <Link href="/login">
        <li>Login</li>
      </Link>
      <Link href="/logout">
        <li>Logout</li>
      </Link>
    </ul>
  );
};

export default Navlink;
