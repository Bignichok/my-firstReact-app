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

  addNewPost() {
    //add post to state and render it
    const newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likes: 0,
    };
    this._state.profilePage.postData.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },

  updateNewPostText(newPostText) {
    //set new value in owr state
    this._state.profilePage.newPostText = newPostText;
    this._callSubscriber(this._state);
  },

  addNewMessage() {
    const newMessage = {
      id: 4,
      message: this._state.dialogsPage.newMessageText,
    };
    this._state.dialogsPage.messagesData.push(newMessage);
    this._state.dialogsPage.newMessageText = "";
    this._callSubscriber(this._state);
  },

  updateNewMessageText(newMessageText) {
    this._state.dialogsPage.newMessageText = newMessageText;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
