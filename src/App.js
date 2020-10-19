import React from "react";
import { Route } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer.jsx";
import DialogsContainer from "./components/Dialogs/DialogsContainer.jsx";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import NavBar from "./components/NavBar/NavBar.jsx";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Login from "./components/Login/Login.jsx";
import "./App.css";

function App({ store }) {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <NavBar />
      <div className="app-wrapper__content">
        <Route path="/dialogs" render={() => <DialogsContainer store={store} />} />
        <Route
          path="/profile/:userId?"
          render={() => <ProfileContainer store={store} />}
        />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
}

export default App;
