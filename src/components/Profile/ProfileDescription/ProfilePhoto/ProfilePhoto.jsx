import React from "react";
import styles from "./ProfilePhoto.module.css";
const ProfilePhoto = () => {
  return (
    <div>
      <img
        className={styles.profilePhoto}
        src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg"
        alt="avatar"
      />
    </div>
  );
};

export default ProfilePhoto;
