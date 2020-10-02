import Link from "next/link";
import React from "react";
import styles from "./DonateSuccess.module.css";

const DonateSuccess = () => {
  return (
    <div className={styles.container}>
      <img
        src="/image/success-icon.svg"
        alt="success-icon"
        className={styles.icon}
      />
      <h3 className={styles.title}>Registration Success</h3>
      <p className={styles.text}>
        Please come to your nearest PMI on the selected date
      </p>
      <Link href="/">
        <button className={styles.button}>Okay</button>
      </Link>
    </div>
  );
};

export default DonateSuccess;
