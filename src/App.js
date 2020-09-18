import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import Profile from "./components/Profile/Profile.jsx";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import { Route } from "react-router-dom";

function App({ state, addNewPost, updateNewPostText }) {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="app-wrapper__content">
        <Route
          path="/dialogs"
          render={() => <Dialogs dialogsPage={state.dialogsPage} />}
        />
        <Route
          path="/profile"
          render={() => (
            <Profile
              profilePage={state.profilePage}
              addNewPost={addNewPost}
              updateNewPostText={updateNewPostText}
            />
          )}
        />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
}

export default App;
