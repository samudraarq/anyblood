import React from "react";
import { useRouter } from "next/router";
import styles from "./MobileNavLink.module.css";
import Link from "../../utils/Link";
import { useAuth } from "../../Hooks/use-auth";

const MobileNavLink = ({ isOpen, toggleNav }) => {
  const router = useRouter();

  const { user, signout } = useAuth();

  const logoutUser = () => {
    signout();
    router.push("/");
  };

  return (
    <div className={`${styles.sideNav} ${isOpen ? styles.open : null}`}>
      <ul className={styles.nav} onClick={toggleNav}>
        <Link href="/requests">
          <li>Request</li>
        </Link>
        {user && (
          <>
            <Link href="/history">
              <li>History</li>
            </Link>
            <li onClick={logoutUser}>Logout</li>
          </>
        )}
        {!user && (
          <>
            <Link href="/signup">
              <li>Signup</li>
            </Link>
            <Link href="/login">
              <li>Login</li>
            </Link>
          </>
        )}
        {/* <Link href="/about">
    <li>About</li>
  </Link> */}
      </ul>
    </div>
  );
};

export default MobileNavLink;
