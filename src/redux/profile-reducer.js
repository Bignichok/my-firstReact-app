import { profileAPI } from "../api/api";
import { fromJS, Map } from "immutable";
import { v4 as uuidv4 } from "uuid";

// const ADD_NEW_POST_REQUEST = "ADD_NEW_POST_REQUEST";
const ADD_NEW_POST_SUCCESS = "ADD_NEW_POST_SUCCESS";
// const ADD_NEW_POST_ERROR = "ADD_NEW_POST_ERROR";

// const DELETE_POST_REQUEST = "DELETE_POST_REQUEST";
const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
// const DELETE_POST_ERROR = "DELETE_POST_ERROR";

// const SET_USER_PROFILE_REQUEST = "SET_USER_PROFILE_REQUEST";
const SET_USER_PROFILE_SUCCESS = "SET_USER_PROFILE_SUCCESS";
// const SET_USER_PROFILE_ERROR = "SET_USER_PROFILE_ERROR";

// const SET_USER_STATUS_REQUEST = "SET_USER_STATUS_REQUEST";
const SET_USER_STATUS_SUCCESS = "SET_USER_STATUS_SUCCESS";
// const SET_USER_STATUS_ERROR = "SET_USER_STATUS_ERROR";

// const SET_USER_PHOTO_REQUEST = "SET_USER_PHOTO_REQUEST";
const SET_USER_PHOTO_SUCCESS = "SET_USER_PHOTO_SUCCESS";
// const SET_USER_PHOTO_ERROR = "SET_USER_PHOTO_ERROR";

//action creators
export const addPostSuccess = (newPostText) => ({
  type: ADD_NEW_POST_SUCCESS,
  newPostText,
});
export const deletePostSuccess = (postId) => ({
  type: DELETE_POST_SUCCESS,
  postId,
});
export const setUserProfileSuccess = (profile) => ({
  type: SET_USER_PROFILE_SUCCESS,
  profile,
});
export const setUserStatusSuccess = (status) => ({
  type: SET_USER_STATUS_SUCCESS,
  status,
});

export const setUserPhotoSuccess = (photo) => ({ type: SET_USER_PHOTO_SUCCESS, photo });

//thunk creators
export const getUserProfileThunkCreator = (userId) => (dispatch) => {
  profileAPI
    .getUserProfile(userId)
    .then((response) => {
      dispatch(setUserProfileSuccess(response.data));
    })
    .catch((err) => console.log(err));
};

export const getUserStatus = (userId) => (dispatch) => {
  profileAPI
    .getStatus(userId)
    .then((response) => {
      dispatch(setUserStatusSuccess(response.data));
    })
    .catch((err) => console.log(err));
};

export const updateUserStatus = (status) => (dispatch) => {
  profileAPI
    .updateStatus(status)
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setUserStatusSuccess(status));
      }
    })
    .catch((err) => console.log(err));
};

export const updateUserPhoto = (photo) => (dispatch) => {
  profileAPI
    .updatePhoto(photo)
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setUserPhotoSuccess(response.data.data.photos));
      }
    })
    .catch((err) => console.log(err));
};

const initialState = fromJS({
  postData: {
    1: { id: 1, message: "hello", likes: 0 },
    2: { id: 2, message: "Hi", likes: 15 },
    3: { id: 3, message: "to learn more about each warning.", likes: 22 },
  },

  profile: null,
  status: "",
});

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST_SUCCESS: {
      const newPost = Map({
        id: uuidv4(),
        message: action.newPostText,
        likes: 0,
      });

      return state.setIn(["postData", newPost.get("id")], newPost);
    }

    case DELETE_POST_SUCCESS: {
      return state.deleteIn(["postData", action.postId]);
    }

    case SET_USER_PROFILE_SUCCESS: {
      return state.set("profile", action.profile);
    }

    case SET_USER_STATUS_SUCCESS: {
      return state.set("status", action.status);
    }

    case SET_USER_PHOTO_SUCCESS: {
      return state.setIn(["profile", "photos"], action.photo);
    }

    default:
      return state;
  }
};

export default profileReducer;
