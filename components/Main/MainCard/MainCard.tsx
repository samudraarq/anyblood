import Link from "next/link";
import React, { FunctionComponent } from "react";
import styles from "./MainCard.module.css";

type Props = {
  bgColor: string;
  title: string;
  btnCta: string;
  link: string;
};

const MainCard: FunctionComponent<Props> = ({
  bgColor,
  title,
  btnCta,
  link,
}) => {
  return (
    <div className={styles.card} style={{ backgroundColor: bgColor }}>
      <h2>{title}</h2>
      <Link href={link}>
        <button>{btnCta}</button>
      </Link>
    </div>
  );
};

export default MainCard;
