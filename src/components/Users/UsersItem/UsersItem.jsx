import React from "react";
import { NavLink } from "react-router-dom";
import defaultUserPhoto from "../../../assets/images/default-avatar.png";

const UsersItem = ({
  id,
  name,
  //   location,
  status,
  followed,

  smallPhoto,
  follow,
  unfollow,
}) => {
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
            unfollow(id);
          }}
          type="button"
        >
          Unfollow
        </button>
      ) : (
        <button
          onClick={() => {
            follow(id);
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
