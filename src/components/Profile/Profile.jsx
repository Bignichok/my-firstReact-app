import React from "react";
import BgImg from "./BgImage/BgImage";
import MyPosts from "./MyPosts/MyPosts";
// import styles from "./Profile.module.css";
import ProfileDescription from "./ProfileDescription/ProfileDescription";

const Profile = ({ profilePage, dispatch }) => {
  console.log(dispatch);
  return (
    <div>
      <BgImg />
      <ProfileDescription />
      <MyPosts
        newPostText={profilePage.newPostText}
        postData={profilePage.postData}
        dispatch={dispatch}
      />
    </div>
  );
};

export default Profile;
