//profile
const ADD_NEW_POST = "ADD-NEW-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
//dialogs
const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const store = {
  _state: {
    dialogsPage: {
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
    },
    profilePage: {
      postData: [
        { id: 1, message: "hello", likes: 0 },
        { id: 2, message: "Hi", likes: 15 },
        { id: 3, message: "to learn more about each warning.", likes: 22 },
      ],
      newPostText: "",
    },
  },

  _callSubscriber() {
    console.log("State was changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_NEW_POST) {
      const newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likes: 0,
      };
      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newPostText;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_NEW_MESSAGE) {
      const newMessage = {
        id: 4,
        message: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.messagesData.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newMessageText;
      this._callSubscriber(this._state);
    }
  },
};

//profile
export const addPostActionCreator = () => {
  return { type: ADD_NEW_POST };
};
export const onPostActionCreator = (postMessage) => {
  return { type: UPDATE_NEW_POST_TEXT, newPostText: postMessage };
};

//dialogs

export const addMessageActionCreator = () => {
  return { type: ADD_NEW_MESSAGE };
};

export const onMessageChangeActionCreator = (textMessage) => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: textMessage };
};

export default store;
