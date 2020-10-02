import React from "react";
import styles from "./ProfilePhoto.module.css";
const ProfilePhoto = ({ photos }) => {
  return (
    <div>
      <img className={styles.profilePhoto} src={photos.small} alt="avatar" />
    </div>
  );
};

export default ProfilePhoto;
