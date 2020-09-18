import renderEntireTree from "../render";

const state = {
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
    newMessageText: "hello",
  },
  profilePage: {
    postData: [
      { id: 1, message: "hello", likes: 0 },
      { id: 2, message: "Hi", likes: 15 },
      { id: 3, message: "to learn more about each warning.", likes: 22 },
    ],
    newPostText: "",
  },
};

export const addNewPost = () => {
  //add post to state and render it
  const newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likes: 0,
  };
  state.profilePage.postData.push(newPost);
  state.profilePage.newPostText = "";
  renderEntireTree(state);
};

export const updateNewPostText = (newPostText) => {
  //set new value in owr state
  state.profilePage.newPostText = newPostText;
  renderEntireTree(state);
};

export const addNewMessage = () => {
  const newMessage = {
    id: 4,
    message: state.dialogsPage.newMessageText,
  };
  state.dialogsPage.messagesData.push(newMessage);
  state.dialogsPage.newMessageText = "";
  renderEntireTree(state);
};

export const updateNewMessageText = (newMessageText) => {
  state.dialogsPage.newMessageText = newMessageText;
  renderEntireTree(state);
};

export default state;
