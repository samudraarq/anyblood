import Link from "next/link";
import React from "react";
import styles from "./RequestDonorSuccess.module.css";

const RequestDonorSuccess = () => {
  return (
    <div className={styles.container}>
      <img
        src="/image/success-icon.svg"
        alt="success-icon"
        className={styles.icon}
      />
      <h3 className={styles.title}>Request Posted</h3>
      <p className={styles.text}>
        You can see your request in the Request Post List
      </p>
      <Link href="/">
        <button className={styles.button}>Okay</button>
      </Link>
    </div>
  );
};

export default RequestDonorSuccess;
