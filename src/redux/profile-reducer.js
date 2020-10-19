import { profileAPI } from "../api/api";

const ADD_NEW_POST = "ADD-NEW-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

const initialState = {
  postData: [
    { id: 1, message: "hello", likes: 0 },
    { id: 2, message: "Hi", likes: 15 },
    { id: 3, message: "to learn more about each warning.", likes: 22 },
  ],
  newPostText: "",
  profile: null,
  status: "",
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

    case SET_USER_STATUS: {
      return { ...state, status: action.status };
    }

    default:
      return state;
  }
};

//action creators
export const addPostActionCreator = () => {
  return { type: ADD_NEW_POST };
};
export const onPostActionCreator = (postMessage) => {
  return { type: UPDATE_NEW_POST_TEXT, newPostText: postMessage };
};
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });

//thunk creators
export const getUserProfileThunkCreator = (userId) => {
  return (dispatch) => {
    profileAPI
      .getUserProfile(userId)
      .then((response) => {
        dispatch(setUserProfile(response.data));
      })
      .catch((err) => console.log(err));
  };
};

export const getUserStatus = (userId) => {
  return (dispatch) => {
    profileAPI
      .getStatus(userId)
      .then((response) => {
        dispatch(setUserStatus(response.data));
      })
      .catch((err) => console.log(err));
  };
};

export const updateUserStatus = (status) => {
  return (dispatch) => {
    profileAPI
      .updateStatus(status)
      .then((response) => {
        if (response.data.resultCode === 0) {
          dispatch(setUserStatus(status));
        }
      })
      .catch((err) => console.log(err));
  };
};

export default profileReducer;
