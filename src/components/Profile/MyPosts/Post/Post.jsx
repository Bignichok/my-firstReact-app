import React from "react";
import styles from "./post.module.css";

const Post = ({post,onDeletePost}) => {
  const message = post.get('message');
  const likes = post.get('likes');
  const postId = post.get('id')
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
      <button onClick={()=>onDeletePost(postId)}>Delete</button>
    </div>
  );
};



export default Post;
