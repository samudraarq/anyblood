import Link from "next/link";
import React from "react";
import styles from "./DonateBtn.module.css";

const DonateBtn = () => {
  return (
    <Link href="/donate/form">
      <button className={styles.btn}>Donate</button>
    </Link>
  );
};

export default DonateBtn;
