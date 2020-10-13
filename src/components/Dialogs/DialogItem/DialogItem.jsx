import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./DialogItem.module.css";

const DialogItem = ({ id, name }) => {
  const path = "/dialogs/" + id;

  return (
    <li className={styles["dialog-list__item"] + " " + styles["active"]}>
      <NavLink key={id} to={path}>
        {name}
      </NavLink>
      
    </li>
  );
};

export default DialogItem;
