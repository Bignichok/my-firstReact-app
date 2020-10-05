import React from "react";
import { NavLink } from "react-router-dom";
import defaultUserPhoto from "../../../assets/images/default-avatar.png";
import { usersAPI } from "../../../api/api";

const UsersItem = ({ id, name, status, followed, smallPhoto, follow, unfollow }) => {
  return (
    <li>
      <h2>{name}</h2>
      <div>
        <NavLink to={`/profile/${id}`}>
          <img
            src={smallPhoto === null ? defaultUserPhoto : smallPhoto}
            alt={name}
            width="40px"
          />
        </NavLink>
      </div>
      <p>{status}</p>
      <p>
        <span>{"location.city"}</span> <span>{"location.country"}</span>{" "}
      </p>
      {followed ? (
        <button
          onClick={() => {
            usersAPI.unfollowUser(id).then((data) => {
              if (data.resultCode === 0) {
                unfollow(id);
              }
            });
          }}
          type="button"
        >
          Unfollow
        </button>
      ) : (
        <button
          onClick={() => {
            usersAPI.followUser(id).then((data) => {
              if (data.resultCode === 0) {
                follow(id);
              }
            });
          }}
          type="button"
        >
          Follow
        </button>
      )}
    </li>
  );
};

export default UsersItem;
