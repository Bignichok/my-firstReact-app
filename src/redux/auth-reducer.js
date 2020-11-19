import { Map } from "immutable";
import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

const initialState = Map({
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
});

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

export const getAuthUserData = () => (dispatch) => {
  return authAPI
    .authUser()
    .then((response) => {
      console.log(response);
      if (response.data.resultCode === 0) {
        const { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    })
    .catch((err) => console.log(err));
};

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI
    .loginUser(email, password, rememberMe)
    .then((response) => {
      const data = response.data;
      if (data.resultCode === 0) {
        dispatch(getAuthUserData());
      } else {
        const messages = data.messages;
        const message = messages.length > 0 ? messages[0] : "Some error";
        const action = stopSubmit("login", { _error: message });
        dispatch(action);
      }
    })
    .catch((err) => console.log(err));
};

export const logout = () => (dispatch) => {
  authAPI
    .logoutUser()
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    })
    .catch((err) => console.log(err));
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return state.set('userId', action.payload.userId)
      .set('email', action.payload.email)
      .set('login',action.payload.login)
      .set('isAuth', action.payload.isAuth)

    case TOGGLE_IS_FETCHING:
      return state.set( "isFetching", action.isFetching) ;

    default:
      return state;
  }
};

export default authReducer;
