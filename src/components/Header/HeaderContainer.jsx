import React, { Component } from "react";
import Header from "./Header";
import {logout} from '../../redux/auth-reducer'
import { connect } from "react-redux";
import {getIsAuth,getLogin} from '../../selectors/auth-selectors'

class HeaderContainer extends Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: getIsAuth(state),
  login: getLogin(state),
});
export default connect(mapStateToProps, { logout })(HeaderContainer);
