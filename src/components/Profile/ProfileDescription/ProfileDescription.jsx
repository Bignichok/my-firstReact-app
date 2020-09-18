import React from "react";
// import styles from "./ProfileDescription.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";

const ProfileDescription = () => {
  return (
    <div>
      <ProfilePhoto />
      <ProfileInfo />
    </div>
  );
};

export default ProfileDescription;
