const ADD_NEW_POST = "ADD-NEW-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
  postData: [
    { id: 1, message: "hello", likes: 0 },
    { id: 2, message: "Hi", likes: 15 },
    { id: 3, message: "to learn more about each warning.", likes: 22 },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST:
      const newPost = {
        id: 5,
        message: state.newPostText,
        likes: 0,
      };
      state.postData.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newPostText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return { type: ADD_NEW_POST };
};
export const onPostActionCreator = (postMessage) => {
  return { type: UPDATE_NEW_POST_TEXT, newPostText: postMessage };
};
export default profileReducer;
