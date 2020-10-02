import React from "react";
import BgImg from "./BgImage/BgImage";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
// import styles from "./Profile.module.css";
import ProfileDescription from "./ProfileDescription/ProfileDescription";

const Profile = ({ store, profile }) => {
  return (
    <div>
      <BgImg />
      <ProfileDescription profile={profile} />
      <MyPostsContainer store={store} />
    </div>
  );
};

export default Profile;
