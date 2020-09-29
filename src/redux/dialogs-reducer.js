const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const initialState = {
  dialogsData: [
    { id: 1, name: "Nikita" },
    { id: 2, name: "Nemat" },
    { id: 3, name: "Anya" },
  ],

  messagesData: [
    { id: 1, message: "hello" },
    { id: 2, message: "Hi" },
    { id: 3, message: "to learn more about each warning." },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newMessageText,
      };

    case ADD_NEW_MESSAGE:
      const newMessage = {
        id: 4,
        message: state.newMessageText,
      };
      return {
        ...state,
        newMessageText: "",
        messagesData: [...state.messagesData, newMessage],
      };

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
