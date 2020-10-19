import React, { Component } from "react";
import { connect } from "react-redux";
import {
  followThunkCreator,
  unFollowThunkCreator,
  setCurrentPage,
  toggleFollowingProgress,
  getUsersThunkCreator
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


class UsersContainer extends Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage,this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber,this.props.pageSize)
  };

  render() {
    const {
      users,
      followThunkCreator,
      unFollowThunkCreator,
      totalUsersCount,
      pageSize,
      currentPage,
      toggleFollowingProgress,
      followingInProgress,
    } = this.props;

    return (
      <>
        {this.props.isFetching && <Preloader />}
        {!this.props.isFetching && (
          <Users
            users={users}
            followThunkCreator={followThunkCreator}
            unFollowThunkCreator={unFollowThunkCreator}
            currentPage={currentPage}
            totalUsersCount={totalUsersCount}
            pageSize={pageSize}
            onPageChanged={this.onPageChanged}
            toggleFollowingProgress={toggleFollowingProgress}
            followingInProgress={followingInProgress}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

// const withRedirect = withAuthRedirect(UsersContainer)

// export default connect(mapStateToProps, {
//   followThunkCreator,
//   unFollowThunkCreator,
//   setCurrentPage,
//   toggleFollowingProgress,
//   getUsers: getUsersThunkCreator,
// })(withRedirect);

export default compose(connect(mapStateToProps, {
  followThunkCreator,
  unFollowThunkCreator,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers: getUsersThunkCreator,
}), withAuthRedirect)(UsersContainer)
