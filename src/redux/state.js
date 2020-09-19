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
    if (action.type === "ADD-NEW-POST") {
      const newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likes: 0,
      };
      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newPostText;
      this._callSubscriber(this._state);
    } else if (action.type === "ADD-NEW-MESSAGE") {
      const newMessage = {
        id: 4,
        message: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.messagesData.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
      this._state.dialogsPage.newMessageText = action.newMessageText;
      this._callSubscriber(this._state);
    }
  },
};

export default store;
