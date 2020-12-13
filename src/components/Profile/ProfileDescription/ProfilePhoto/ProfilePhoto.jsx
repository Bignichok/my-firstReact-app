import React from "react";

import defaultPhoto from "../../../../assets/images/default-avatar.png";

import styles from "./ProfilePhoto.module.css";

const ProfilePhoto = ({ photos, isOwner, updateUserPhoto }) => {
  const onMainPhotoSelected = ({ target }) => {
    if (target.files.length) {
      const photo = target.files[0];
      updateUserPhoto(photo);
    }
  };

  return (
    <div>
      <img
        className={styles.profilePhoto}
        src={photos.small || defaultPhoto}
        alt="avatar"
      />
      {isOwner && (
        <div>
          <input type="file" onChange={onMainPhotoSelected} />
        </div>
      )}
    </div>
  );
};

export default ProfilePhoto;
