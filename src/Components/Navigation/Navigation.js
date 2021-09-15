import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { authSelectors } from "../../redux/auth";

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink
        to="/"
        exact
        className={styles.link}
        activeClassName={styles.activelink}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          exact
          to="/contacts"
          className={styles.link}
          activeClassName={styles.activelink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
