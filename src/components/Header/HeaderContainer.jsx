import React, { Component } from "react";
import Header from "./Header";
import Axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/auth-reducer";

class HeaderContainer extends Component {
  componentDidMount() {
    Axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true,
    })
      .then((response) => {
        console.log(response);
        if (response.data.resultCode === 0) {
          const { id, email, login } = response.data.data;
          this.props.setAuthUserData(id, email, login);
        }
      })
      .catch((err) => console.log(err));
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);