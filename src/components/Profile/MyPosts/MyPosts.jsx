import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = ({ updateNewPostText, addPost, newPostText, postData }) => {
  const postsElements = postData.map((post) => (
    <Post key={post.id} message={post.message} likes={post.likes} />
  ));

  const onAddPost = () => {
    addPost();
  };

  const onPostChange = (e) => {
    const postMessage = e.target.value;
    updateNewPostText(postMessage); //set every change in our text area to state
  };

  return (
    <div className={styles.myPosts}>
      <textarea
        onChange={onPostChange} //listen changes in our UI
        value={newPostText} //set value from state(BLL)
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <button onClick={onAddPost}>Add Post</button>
      {postsElements}
    </div>
  );
};

export default MyPosts;
