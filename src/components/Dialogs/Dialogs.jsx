import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem.jsx";
import MessageItem from "./MessageItem/MessageItem.jsx";

const Dialogs = ({ addMessage, messageChange, dialogsPage }) => {
  const dialogsElements = dialogsPage.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));

  const messageElements = dialogsPage.messagesData.map((message) => (
    <MessageItem message={message.message} key={message.id} id={message.id} />
  ));

  const onAddMessage = () => {
    addMessage();
  };

  const onMessageChange = (e) => {
    const textMessage = e.target.value;
    messageChange(textMessage);
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
          <button onClick={onAddMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
