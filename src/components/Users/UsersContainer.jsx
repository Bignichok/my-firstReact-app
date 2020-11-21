import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  followThunkCreator,
  unFollowThunkCreator,
  setCurrentPage,
  toggleFollowingProgress,
  getUsersThunkCreator
} from "../../redux/users-reducer";
import {getUsers,
getPageSize,
getTotalUsersCount,
getCurrentPage,
getIsFetching,
getFollowingInProgress} from '../../selectors/users-selectors'
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";




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
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};


export default compose(connect(mapStateToProps, {
  followThunkCreator,
  unFollowThunkCreator,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers: getUsersThunkCreator,
}))(UsersContainer)