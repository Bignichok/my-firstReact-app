const ADD_NEW_POST = "ADD-NEW-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

const initialState = {
  postData: [
    { id: 1, message: "hello", likes: 0 },
    { id: 2, message: "Hi", likes: 15 },
    { id: 3, message: "to learn more about each warning.", likes: 22 },
  ],
  newPostText: "",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newPostText,
      };
    }
    case ADD_NEW_POST: {
      const newPost = {
        id: 5,
        message: state.newPostText,
        likes: 0,
      };

      return {
        ...state,
        newPostText: "",
        postData: [...state.postData, newPost],
      };
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }

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
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export default profileReducer;
