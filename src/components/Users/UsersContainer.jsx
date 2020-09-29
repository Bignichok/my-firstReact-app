import React, { Component } from "react";
import { connect } from "react-redux";
import {
  followAc,
  setUsersAc,
  unfollowAc,
  setCurrentPageAc,
  setTotalUsersCountAc,
} from "../../redux/users-reducer";
import Users from "./Users";

import Axios from "axios";

class UsersContainer extends Component {
  componentDidMount() {
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
    ).then(({ data }) => {
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
    ).then(({ data }) => {
      this.props.setUsers(data.items);
    });
  };

  render() {
    const {
      users,
      follow,
      unfollow,
      totalUsersCount,
      pageSize,
      currentPage,
    } = this.props;

    return (
      <Users
        users={users}
        follow={follow}
        unfollow={unfollow}
        currentPage={currentPage}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        onPageChanged={this.onPageChanged}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAc(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAc(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAc(users));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAc(currentPage));
    },
    setTotalUsersCount: (totalUsersCount) => {
      dispatch(setTotalUsersCountAc(totalUsersCount));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
