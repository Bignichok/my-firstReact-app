import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import HeaderContainer from "./components/Header/HeaderContainer.jsx";
import DialogsContainer from "./components/Dialogs/DialogsContainer.jsx";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import NavBar from "./components/NavBar/NavBar.jsx";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Login from "./components/Login/Login.jsx";
import { initializeApp } from "./redux/app-reducer";

import "./App.css";
import Preloader from "./components/common/Preloader/Preloader.js";
import { getInitialized } from "./selectors/app-selectors.js";

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    } else {
      return (
        <div className="app-wrapper">
          <HeaderContainer />
          <NavBar />
          <div className="app-wrapper__content">
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={() => <Login />} />
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({ initialized:getInitialized(state) });

export default compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);
