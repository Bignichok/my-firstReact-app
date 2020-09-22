import React from "react";
import Dialogs from "./Dialogs.jsx";
import {
  addMessageActionCreator,
  onMessageChangeActionCreator,
} from "../../redux/dialogs-reducer";

const DialogsContainer = ({ store }) => {
  const state = store.getState();

  const onAddMessage = () => {
    store.dispatch(addMessageActionCreator());
  };

  const onMessageChange = (textMessage) => {
    store.dispatch(onMessageChangeActionCreator(textMessage));
  };

  return (
    <Dialogs
      addMessage={onAddMessage}
      messageChange={onMessageChange}
      dialogsPage={state.dialogsPage}
    />
  );
};

export default DialogsContainer;
