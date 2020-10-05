import Axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import defaultUserPhoto from "../../../assets/images/default-avatar.png";

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
            Axios.delete(
              `https://social-network.samuraijs.com/api/1.0/follow/${id}`,

              {
                withCredentials: true,
                headers: {
                  "API-KEY": "97a59665-8234-4da3-8f8f-77eb6f3dc993",
                },
              }
            ).then((resp) => {
              if (resp.data.resultCode === 0) {
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
            Axios.post(
              `https://social-network.samuraijs.com/api/1.0/follow/${id}`,
              {},
              {
                withCredentials: true,
                headers: {
                  "API-KEY": "97a59665-8234-4da3-8f8f-77eb6f3dc993",
                },
              }
            ).then((resp) => {
              if (resp.data.resultCode === 0) {
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
