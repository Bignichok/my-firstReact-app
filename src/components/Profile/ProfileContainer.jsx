
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { getUserProfileThunkCreator,getUserStatus,updateUserStatus } from "../../redux/profile-reducer";
import Profile from "./Profile";
import {getProfile,getStatus} from '../../selectors/profile-selectors'
import { getIsAuth,getAuthorizedUserId } from "../../selectors/auth-selectors";


class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push('/login')
      }
    }
    this.props.getUserProfileThunkCreator(userId)
    this.props.getUserStatus(userId)
  }
  render() {


    return (
      <div>
        <Profile {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateUserStatus={this.props.updateUserStatus} />
      </div>
    );
  }
}


let mapStateToProps = (state) => ({
  profile: getProfile(state),
  status: getStatus(state),
  authorizedUserId: getAuthorizedUserId(state),
  isAuth: getIsAuth(state)
})


export default compose(connect(mapStateToProps, { getUserProfileThunkCreator,getUserStatus, updateUserStatus }),
  withRouter,
  // withAuthRedirect
)(ProfileContainer)

