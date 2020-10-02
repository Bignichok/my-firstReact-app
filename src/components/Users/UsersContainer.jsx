import React, { Component } from "react";
import { connect } from "react-redux";
import {
  follow,
  setUsers,
  unfollow,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
} from "../../redux/users-reducer";
import Users from "./Users";

import Axios from "axios";
import Preloader from "../Preloader/Preloader";

class UsersContainer extends Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
    ).then(({ data }) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
    ).then(({ data }) => {
      this.props.toggleIsFetching(false);
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
      <>
        {this.props.isFetching && <Preloader />}
        {!this.props.isFetching && (
          <Users
            users={users}
            follow={follow}
            unfollow={unfollow}
            currentPage={currentPage}
            totalUsersCount={totalUsersCount}
            pageSize={pageSize}
            onPageChanged={this.onPageChanged}
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
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAc(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAc(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAc(users));
//     },
//     setCurrentPage: (currentPage) => {
//       dispatch(setCurrentPageAc(currentPage));
//     },
//     setTotalUsersCount: (totalUsersCount) => {
//       dispatch(setTotalUsersCountAc(totalUsersCount));
//     },
//     toggleIsFetchingAc: (isFetching) => {
//       dispatch(toggleIsFetchingAc(isFetching));
//     },
//   };
// };

//or

// export default connect(mapStateToProps, {
//   follow: followAc,
//   unfollow: unfollowAc,
//   setUsers: setUsersAc,
//   setCurrentPage: setCurrentPageAc,
//   setTotalUsersCount: setTotalUsersCountAc,
//   toggleIsFetchingAc: toggleIsFetchingAc,
// })(UsersContainer);

//or
export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(UsersContainer);
