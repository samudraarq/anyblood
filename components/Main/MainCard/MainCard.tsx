import Link from "next/link";
import React, { FunctionComponent } from "react";
import { useAuth } from "../../Hooks/use-auth";
import styles from "./MainCard.module.css";

interface Props {
  bgColor: string;
  title: string;
  btnCta: string;
  link: string;
}

const MainCard: React.FC<Props> = ({ bgColor, title, btnCta, link }) => {
  const { user } = useAuth();

  return (
    <div className={styles.card} style={{ backgroundColor: bgColor }}>
      <h2>{title}</h2>
      <Link href={user ? link : "/login"}>
        <button>{btnCta}</button>
      </Link>
    </div>
  );
};

export default MainCard;
