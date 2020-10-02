import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { useAuth } from "../../Hooks/use-auth";
import styles from "./MobileNavLink.module.css";

const MobileNavLink = () => {
  const router = useRouter();

  const { user, signout } = useAuth();

  const logoutUser = () => {
    signout();
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <ul className={styles.nav}>
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
