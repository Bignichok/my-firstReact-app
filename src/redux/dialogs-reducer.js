import { v4 as uuidv4 } from 'uuid';
import {fromJS,Map} from 'immutable';
const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";

export const addMessageActionCreator = (newMessageText) => {
  return { type: ADD_NEW_MESSAGE, newMessageText };
};

const initialState = fromJS({
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
});

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      const newMessage = Map({
        id: uuidv4(),
        message: action.newMessageText,
      });
      return state.setIn(['messagesData', state.get('messagesData').size], newMessage)

    default:
      return state;
  }
};

export default dialogsReducer;
