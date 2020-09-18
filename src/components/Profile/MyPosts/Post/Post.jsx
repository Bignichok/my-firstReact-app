import React from "react";
import styles from "./post.module.css";

const Post = ({ message, likes }) => {
  return (
    <div className={styles.post}>
      <img
        src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg"
        alt="avatar"
      />
      <h3>Post 1</h3>
      <p>{message}</p>
      <div>
        <span>{likes}Likes</span>
      </div>
    </div>
  );
};

export default Post;
