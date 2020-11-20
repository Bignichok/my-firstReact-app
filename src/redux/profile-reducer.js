import { profileAPI } from "../api/api";
import {fromJS, Map} from 'immutable'
import { v4 as uuidv4 } from 'uuid';

const ADD_NEW_POST = "ADD-NEW-POST";
const DELETE_POST = "DELETE_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";





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

const initialState = fromJS({
  postData: {
    1:{ id: 1, message: "hello", likes: 0 },
    2:{ id: 2, message: "Hi", likes: 15 },
    3:{ id: 3, message: "to learn more about each warning.", likes: 22 },
  },

  profile: null,
  status: "",
});

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST: {
      const newPost = Map({
        id: uuidv4(),
        message: action.newPostText,
        likes: 0,
      });

      return state.setIn(['postData', newPost.get("id")], newPost)

      // return {
      //   ...state,
      //   postData: [...state.postData, newPost],
      // };
    }

    case DELETE_POST: {
      return state.deleteIn(['postData', action.postId])
      // return {
      //   ...state,
      //   postData: state.postData.filter((post) => post.id !== action.postId),
      // };
    }

    case SET_USER_PROFILE: {
      return state.set("profile", action.profile)
      // return { ...state, profile: action.profile };
    }

    case SET_USER_STATUS: {
      return state.set('status', action.status)
      // return { ...state, status: action.status };
    }

    default:
      return state;
  }
};

export default profileReducer;
