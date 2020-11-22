import React, { Component } from "react";
import { Route, withRouter, BrowserRouter } from "react-router-dom";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import store from "./redux/redux-store";
import { initializeApp } from "./redux/app-reducer";
import { getInitialized } from "./selectors/app-selectors.js";
import HeaderContainer from "./components/Header/HeaderContainer.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Preloader from "./components/common/Preloader/Preloader.js";
import withSuspense from "./hoc/withSuspense";
import "./App.css";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer.jsx")
);
const UsersContainer = React.lazy(() =>
  import("./components/Users/UsersContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const Login = React.lazy(() => import("./components/Login/Login.jsx"));

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
            <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
            <Route
              path="/profile/:userId?"
              render={withSuspense(ProfileContainer)}
            />
            <Route path="/users" render={withSuspense(UsersContainer)} />
            <Route path="/login" render={withSuspense(Login)} />
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({ initialized: getInitialized(state) });

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const MainApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer store={store} />
      </Provider>
    </BrowserRouter>
  );
};
export default MainApp;
