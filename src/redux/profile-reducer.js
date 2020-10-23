import { profileAPI } from "../api/api";

const ADD_NEW_POST = "ADD-NEW-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

const initialState = {
  postData: [
    { id: 1, message: "hello", likes: 0 },
    { id: 2, message: "Hi", likes: 15 },
    { id: 3, message: "to learn more about each warning.", likes: 22 },
  ],

  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST: {
      const newPost = {
        id: 5,
        message: action.newPostText,
        likes: 0,
      };

      return {
        ...state,
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
export const addPostActionCreator = (newPostText) => {
  return { type: ADD_NEW_POST, newPostText };
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
