import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem.jsx";
import MessageItem from "./MessageItem/MessageItem.jsx";

const Dialogs = ({ dialogsPage, dispatch }) => {
  const dialogsElements = dialogsPage.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));
  const messageElements = dialogsPage.messagesData.map((message) => (
    <MessageItem message={message.message} key={message.id} id={message.id} />
  ));

  const textAreaRef = React.createRef();

  const buttonHandler = () => {
    dispatch({ type: "ADD-NEW-MESSAGE" });
  };

  const onMessageChange = () => {
    const textMessage = textAreaRef.current.value;
    dispatch({ type: "UPDATE-NEW-MESSAGE-TEXT", newMessageText: textMessage });
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
            ref={textAreaRef}
            name="message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button onClick={buttonHandler}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
