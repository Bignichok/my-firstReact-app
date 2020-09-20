const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      const newMessage = {
        id: 4,
        message: state.newMessageText,
      };
      state.messagesData.push(newMessage);
      state.newMessageText = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessageText;
      return state;
    default:
      return state;
  }
};

export const addMessageActionCreator = () => {
  return { type: ADD_NEW_MESSAGE };
};

export const onMessageChangeActionCreator = (textMessage) => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: textMessage };
};

export default dialogsReducer;
