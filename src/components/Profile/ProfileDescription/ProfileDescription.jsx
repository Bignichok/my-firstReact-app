import React from "react";
import Preloader from "../../Preloader/Preloader";
// import styles from "./ProfileDescription.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";

const ProfileDescription = ({ profile }) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <ProfilePhoto photos={profile.photos} />
      <ProfileInfo
        fullName={profile.fullName}
        aboutMe={profile.aboutMe}
        contacts={profile.contacts}
        lookingForAJob={profile.lookingForAJob}
        lookingForAJobDescription={profile.lookingForAJobDescription}
      />
    </div>
  );
};

export default ProfileDescription;
