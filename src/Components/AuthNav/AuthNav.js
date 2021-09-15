import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import styles from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={styles.link}
        activeClassName={styles.activelink}
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        exact
        // className={styles.link}
        // activeClassName={styles.activelink}
      >
        <Button variant="outline-primary" type="button" size="sm">
          LogIn
        </Button>
      </NavLink>
    </div>
  );
}
