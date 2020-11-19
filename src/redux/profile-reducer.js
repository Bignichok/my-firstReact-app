import { profileAPI } from "../api/api";
import {Map} from 'immutable'
import { v4 as uuidv4 } from 'uuid';

const ADD_NEW_POST = "ADD-NEW-POST";
const DELETE_POST = "DELETE_POST";
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
        id: uuidv4(),
        message: action.newPostText,
        likes: 0,
      };

      return {
        ...state,
        postData: [...state.postData, newPost],
      };
    }

    case DELETE_POST: {
      return {
        ...state,
        postData: state.postData.filter((post) => post.id !== action.postId),
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
export const addPostActionCreator = (newPostText) => ({
  type: ADD_NEW_POST,
  newPostText,
});
export const deletePostActionCreator = (postId) => ({ type: DELETE_POST, postId });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });

//thunk creators
export const getUserProfileThunkCreator = (userId) => (dispatch) => {
  profileAPI
    .getUserProfile(userId)
    .then((response) => {
      dispatch(setUserProfile(response.data));
    })
    .catch((err) => console.log(err));
};

export const getUserStatus = (userId) => (dispatch) => {
  profileAPI
    .getStatus(userId)
    .then((response) => {
      dispatch(setUserStatus(response.data));
    })
    .catch((err) => console.log(err));
};

export const updateUserStatus = (status) => (dispatch) => {
  profileAPI
    .updateStatus(status)
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
      }
    })
    .catch((err) => console.log(err));
};

export default profileReducer;
