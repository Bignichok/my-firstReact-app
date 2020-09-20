import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem.jsx";
import MessageItem from "./MessageItem/MessageItem.jsx";
import {
  addMessageActionCreator,
  onMessageChangeActionCreator,
} from "../../redux/dialogs-reducer";

const Dialogs = ({ dialogsPage, dispatch }) => {
  const dialogsElements = dialogsPage.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));
  const messageElements = dialogsPage.messagesData.map((message) => (
    <MessageItem message={message.message} key={message.id} id={message.id} />
  ));

  const addMessage = () => {
    dispatch(addMessageActionCreator());
  };

  const onMessageChange = (e) => {
    const textMessage = e.target.value;
    dispatch(onMessageChangeActionCreator(textMessage));
  };

  return (
    <div className={styles.dialogWrp}>
      <ul className={styles["dialog-list"]}>{dialogsElements}</ul>
      <div>
        <ul className={styles["message-list"]}>{messageElements}</ul>
        <div>
          <textarea
            onChange={onMessageChange}
            value={dialogsPage.newMessageText}
            placeholder="Enter your message"
            name="message"
          ></textarea>
          <button onClick={addMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
