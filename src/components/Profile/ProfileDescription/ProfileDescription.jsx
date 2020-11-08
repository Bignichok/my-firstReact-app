import React from "react";
import Preloader from "../../common/Preloader/Preloader";
// import styles from "./ProfileDescription.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
// import ProfileStatus from './ProfileStatus/ProfileStatus'


const ProfileDescription = ({ profile,updateUserStatus,status }) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <ProfilePhoto photos={profile.photos} />
      <ProfileStatusWithHooks updateUserStatus={updateUserStatus} status={status}/>
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
