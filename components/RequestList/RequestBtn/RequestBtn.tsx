import Link from "next/link";
import React from "react";
import styles from "./RequestBtn.module.css";

const RequestBtn = () => {
  return (
    <Link href="/request/form">
      <button className={styles.btn}>Donate</button>
    </Link>
  );
};

export default RequestBtn;
