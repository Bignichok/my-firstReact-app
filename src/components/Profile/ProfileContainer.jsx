
import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfileThunkCreator } from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfileThunkCreator(userId)
  }
  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfileThunkCreator })(
  WithUrlDataContainerComponent
);
