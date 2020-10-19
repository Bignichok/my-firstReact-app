import React from "react";
import BgImg from "./BgImage/BgImage";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
// import styles from "./Profile.module.css";
import ProfileDescription from "./ProfileDescription/ProfileDescription";


const Profile = ({ store, profile,updateUserStatus,status }) => {

  
  return (
    <div>
      <BgImg />
      <ProfileDescription  profile={profile} updateUserStatus={updateUserStatus} status={status} />
      <MyPostsContainer store={store} />
    </div>
  );
};

export default Profile;
