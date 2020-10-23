const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";

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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      const newMessage = {
        id: 4,
        message: action.newMessageText,
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
      };

    default:
      return state;
  }
};

export const addMessageActionCreator = (newMessageText) => {
  return { type: ADD_NEW_MESSAGE, newMessageText };
};

export default dialogsReducer;
