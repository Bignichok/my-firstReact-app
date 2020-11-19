import { getAuthUserData } from "./auth-reducer";
import {Map} from 'immutable'
const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

const initialState = Map({
  initialized: false,
});

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return state.set("initialized", true)

    default:
      return state;
  }
};

export const InitializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => (dispatch) => {
  Promise.all([dispatch(getAuthUserData())]).then(() => dispatch(InitializedSuccess()));
};

export default appReducer;
