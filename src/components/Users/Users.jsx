import React from "react";
import UsersItem from "./UsersItem/UsersItem";
import styles from "./Users.module.css";

const Users = ({
  users,
  follow,
  unfollow,
  currentPage,
  totalUsersCount,
  pageSize,
  onPageChanged,
}) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i += 1) {
    pages.push(i);
  }
  const usersListItems = users.map((user) => {
    return (
      <UsersItem
        key={user.id}
        id={user.id}
        name={user.name}
        status={user.status}
        followed={user.followed}
        smallPhoto={user.photos.small}
        follow={follow}
        unfollow={unfollow}
      />
    );
  });
  return (
    <div>
      <div>
        {pages.map((p) => (
          <button
            type="button"
            key={p + "page"}
            className={currentPage === p ? styles.selectedPage : ""}
            onClick={() => onPageChanged(p)}
          >
            {p}
          </button>
        ))}
      </div>
      <ul>{usersListItems}</ul>
    </div>
  );
};

export default Users;
