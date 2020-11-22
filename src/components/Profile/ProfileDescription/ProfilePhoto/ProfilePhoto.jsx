import React from "react";
import defaultPhoto from '../../../../assets/images/default-avatar.png'
import styles from "./ProfilePhoto.module.css";
const ProfilePhoto = ({ photos, isOwner }) => {
  
  return (
    <div>
      <img className={styles.profilePhoto} src={photos.small || defaultPhoto} alt="avatar" />
      {isOwner && <div><input type='file'/></div>}
    </div>
  );
};

export default ProfilePhoto;
