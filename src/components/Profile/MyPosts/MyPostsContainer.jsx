import React from "react";
import MyPosts from "./MyPosts";
import {
  addPostActionCreator,
  onPostActionCreator,
} from "../../../redux/profile-reducer";

const MyPostsContainer = ({ store }) => {
  const addPost = () => {
    store.dispatch(addPostActionCreator()); //we are rendering new post
  };

  const onPostChange = (postMessage) => {
    store.dispatch(onPostActionCreator(postMessage)); //set every change in our text area to state
  };

  const state = store.getState();

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      newPostText={state.profilePage.newPostText}
      postData={state.profilePage.postData}
    />
  );
};

export default MyPostsContainer;
