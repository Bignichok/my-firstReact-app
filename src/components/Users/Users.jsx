import React from "react";
import UsersItem from "./UsersItem/UsersItem";
import Pagination from "../common/Pagination/Pagination";


const Users = ({
  users,
  followThunkCreator,
  unFollowThunkCreator,
  currentPage,
  totalUsersCount,
  pageSize,
  onPageChanged,
  toggleFollowingProgress,
  followingInProgress,
}) => {

  return (
    <div>
      <Pagination currentPage={currentPage} onPageChanged={onPageChanged} pageSize={pageSize} totalUsersCount={totalUsersCount}/>
      <ul>{users.map((user) => 
      <UsersItem
        key={user.get("id")}
        id={user.get('id')}
        name={user.get('name')}
        status={user.get('status')}
        followed={user.get('followed')}
        smallPhoto={user.getIn(['photos','small'])}
        followThunkCreator={followThunkCreator}
        unFollowThunkCreator={unFollowThunkCreator}
        toggleFollowingProgress={toggleFollowingProgress}
        followingInProgress={followingInProgress}
      />
    )}</ul>
    </div>
  );
};

export default Users;
