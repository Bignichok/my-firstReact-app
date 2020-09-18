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
  state.profilePage.newPostText = newPostText;
  renderEntireTree(state);
};

export default state;
