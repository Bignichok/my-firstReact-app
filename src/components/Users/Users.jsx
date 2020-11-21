import React from "react";
import UsersItem from "./UsersItem/UsersItem";
import Pagination from "./Pagination";


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
        key={user.id}
        id={user.id}
        name={user.name}
        status={user.status}
        followed={user.followed}
        smallPhoto={user.photos.small}
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
