import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <NavLink to="/profile" activeClassName={styles.active}>
            Profile
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink to="/dialogs" activeClassName={styles.active}>
            Messages
          </NavLink>
        </li>

        <li className={styles.listItem}>
          <NavLink to="/news" activeClassName={styles.active}>
            News
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink to="/music" activeClassName={styles.active}>
            Music
          </NavLink>
        </li>

        <li className={styles.listItem}>
          <NavLink to="/settings" activeClassName={styles.active}>
            Settings
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink to="/friends" activeClassName={styles.active}>
            Friends
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
