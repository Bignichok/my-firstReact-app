import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import DialogsContainer from "./components/Dialogs/DialogsContainer.jsx";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";

import { Route } from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App({ store }) {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="app-wrapper__content">
        <Route path="/dialogs" render={() => <DialogsContainer store={store} />} />
        <Route path="/profile" render={() => <ProfileContainer store={store} />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
}

export default App;
