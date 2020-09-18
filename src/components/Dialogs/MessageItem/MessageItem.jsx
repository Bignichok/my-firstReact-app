import React from "react";
import styles from "./MessageItem.module.css";

const MessageItem = ({ message }) => {
  return (
    <li className={styles["message-list__item"]}>
      <p className={styles["message-list__item-message"]}>{message}</p>
    </li>
  );
};

export default MessageItem;
