import React from "react";
import styles from "./Main.module.css";
import MainCard from "./MainCard/MainCard";

const Main = () => {
  return (
    <div className={styles.main}>
      <h1>Help others, with blood</h1>
      <div className={styles.cards}>
        <MainCard
          bgColor="#d6fcf7"
          title="Give blood for the one in needs"
          btnCta="Donate Blood"
          link="/donate/form"
        />
        <MainCard
          bgColor="#FFF3F8"
          title="Request blood so others can see"
          btnCta="Request Blood"
          link="/request/form"
        />
      </div>
    </div>
  );
};

export default Main;
