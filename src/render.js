import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import {
  addNewPost,
  updateNewPostText,
  addNewMessage,
  updateNewMessageText,
} from "./redux/state";

const renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addNewPost={addNewPost}
          updateNewPostText={updateNewPostText}
          addNewMessage={addNewMessage}
          updateNewMessageText={updateNewMessageText}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

export default renderEntireTree;
