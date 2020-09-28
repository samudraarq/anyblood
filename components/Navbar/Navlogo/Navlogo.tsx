import React from "react";
import Link from "next/link";
import styles from "./Navlogo.module.css";

const Navlogo = () => {
  return (
    <Link href="/">
      <span className={styles.logo}>AnyBlood</span>
    </Link>
  );
};

export default Navlogo;
