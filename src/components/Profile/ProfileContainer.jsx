
import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfileThunkCreator,getUserStatus,updateUserStatus } from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
// import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
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
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
})


export default compose(connect(mapStateToProps, { getUserProfileThunkCreator,getUserStatus, updateUserStatus }),
  withRouter,
  // withAuthRedirect
)(ProfileContainer)

