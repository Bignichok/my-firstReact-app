import React from "react";
import BgImg from "./BgImage/BgImage";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
// import styles from "./Profile.module.css";
import ProfileDescription from "./ProfileDescription/ProfileDescription";

const Profile = ({
  store,
  profile,
  updateUserStatus,
  updateUserPhoto,
  status,
  isOwner,
}) => {
  return (
    <div>
      <BgImg />
      <ProfileDescription
        isOwner={isOwner}
        profile={profile}
        updateUserStatus={updateUserStatus}
        updateUserPhoto={updateUserPhoto}
        status={status}
      />
      <MyPostsContainer store={store} />
    </div>
  );
};

export default Profile;
