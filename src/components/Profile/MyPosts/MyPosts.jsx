import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

//myPosts

const MyPosts = ({ postData, newPostText, dispatch }) => {
  const postsElements = postData.map((post) => (
    <Post key={post.id} message={post.message} likes={post.likes} />
  ));

  const textAreaRef = React.createRef(); //creating ref for text area

  const buttonHandler = () => {
    dispatch({ type: "ADD-NEW-POST" }); //we are rendering new post
  };

  const onPostChange = () => {
    const postMessage = textAreaRef.current.value;
    dispatch({ type: "UPDATE-NEW-POST-TEXT", newPostText: postMessage }); //set every change in our text area to state
  };

  return (
    <div className={styles.myPosts}>
      <textarea
        onChange={onPostChange} //listen changes in our UI
        value={newPostText} //set value from state(BLL)
        ref={textAreaRef}
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <button onClick={buttonHandler}>Add Post</button>
      {postsElements}
    </div>
  );
};

export default MyPosts;
