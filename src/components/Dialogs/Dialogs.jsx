import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem.jsx";
import MessageItem from "./MessageItem/MessageItem.jsx";
import { reduxForm ,Field} from 'redux-form';
import { Textarea } from "../common/FromsControls/FormsControls";
import {requiredField,maxLengthCreator} from '../../utils/validators.js'

const maxLength50 = maxLengthCreator(50)


const AddMessageForm =(props)=>{
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
         <Field component={Textarea} validate={[requiredField,maxLength50 ]}  name="newMessageText"  placeholder="Enter your message"/>
     </div>
      <button>Send</button>
    </form>)
}

const AddMessageFormRedux = reduxForm({form:'dialogAddMessageFrom'})(AddMessageForm)

const Dialogs = ({ addMessage, dialogsPage ,isAuth}) => {
  const dialogsElements = dialogsPage.get('dialogsData').map((dialog) => (
    <DialogItem name={dialog.get('name')} key={dialog.get('id')} id={dialog.get('id')} />
  ));

  const messageElements = dialogsPage.get('messagesData').map((message) => (
    <MessageItem message={message.get('message')} key={message.get('id')} id={message.get('id')} />
  ));

  const addNewMessage = (values) => {
    addMessage(values.newMessageText)
  }

  return (
    <div className={styles.dialogWrp}>
      <ul className={styles["dialog-list"]}>{dialogsElements}</ul>
      <div>
        <ul className={styles["message-list"]}>{messageElements}</ul>
        <AddMessageFormRedux onSubmit={addNewMessage}/>
      </div>
    </div>
  );
};

export default Dialogs;
