import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import { composeWithDevTools } from "redux-devtools-extension";

import thunkMiddleware from "redux-thunk";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import { usersReducer } from "./users-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
