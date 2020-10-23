import React from "react";
import { Field, reduxForm } from "redux-form";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";
import {requiredField,maxLengthCreator} from '../../../utils/validators'
import { Textarea } from "../../common/FromsControls/FormsControls";

const maxLength30 = maxLengthCreator(30)

const MyPostsForm = (props) => {
  return(
  <form onSubmit={props.handleSubmit}>
    <div>
        <Field component={Textarea} name="newPostText" placeholder="Write your post" validate={[requiredField,maxLength30]}/>
    </div>
    <button>Add Post</button>
  </form>
  )
}

const MyPostsFormRedux = reduxForm({form:"postsAddPostText"})(MyPostsForm)

const MyPosts = ({ addPost, postData }) => {
  const postsElements = postData.map((post) => (
    <Post key={post.id} message={post.message} likes={post.likes} />
  ));

  const onAddPost = (values) => {
    addPost(values.newPostText);
  };



  return (
    <div className={styles.myPosts}>
      <MyPostsFormRedux onSubmit={onAddPost}/>
      {postsElements}
    </div>
  );
};

export default MyPosts;
