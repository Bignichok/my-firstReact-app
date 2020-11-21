import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getIsAuth } from "../selectors/auth-selectors";

const mapStateToPropsForRedirect = (state) =>{
  return{
  isAuth: getIsAuth(state),
}};

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    //if user not authorized redirect him in login page
    render() {
      if (!this.props.isAuth) return <Redirect to="/login" />;

      return <Component {...this.props} />;
    }
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  );

  return ConnectedAuthRedirectComponent;
};
