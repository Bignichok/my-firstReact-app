import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

import {
  getUserProfileThunkCreator,
  getUserStatus,
  updateUserStatus,
  updateUserPhoto,
} from "../../redux/profile-reducer";
import { getProfile, getStatus } from "../../selectors/profile-selectors";
import { getIsAuth, getAuthorizedUserId } from "../../selectors/auth-selectors";

import Profile from "./Profile";

class ProfileContainer extends Component {
  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState) {
    const prevUserId = prevProps.match.params.userId;
    const nextUserId = this.props.match.params.userId;
    if (prevUserId !== nextUserId) {
      this.refreshProfile();
    }
  }

  refreshProfile = () => {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfileThunkCreator(userId);
    this.props.getUserStatus(userId);
  };

  render() {
    return (
      <div>
        <Profile
          {...this.props}
          isOwner={!this.props.match.params.userId}
          profile={this.props.profile}
          status={this.props.status}
          updateUserStatus={this.props.updateUserStatus}
          updateUserPhoto={this.props.updateUserPhoto}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: getProfile(state),
  status: getStatus(state),
  authorizedUserId: getAuthorizedUserId(state),
  isAuth: getIsAuth(state),
});

export default compose(
  connect(mapStateToProps, {
    getUserProfileThunkCreator,
    getUserStatus,
    updateUserStatus,
    updateUserPhoto,
  }),
  withRouter
  // withAuthRedirect
)(ProfileContainer);
