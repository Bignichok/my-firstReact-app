import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = ({ isAuth, login }) => {
  return (
    <header className={styles.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/863px-Apple_logo_black.svg.png"
        alt="logo"
        width="50px"
      ></img>
      <div className={styles.loginWrp}>
        {isAuth ? login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
