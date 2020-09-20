import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
    sidebar: {},
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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

export default store;
