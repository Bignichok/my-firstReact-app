import React from "react";
import SocialLink from "./SocialLink";
// import styles from "./ProfileInfo.module.css";

const ProfileInfo = ({
  aboutMe,
  contacts,
  lookingForAJob,
  lookingForAJobDescription,
  fullName,
}) => {
  const socialLinks = [];

  for (const socialNetwork in contacts) {
    if (contacts[socialNetwork]) {
      socialLinks.push(
        <SocialLink
          key={contacts[socialNetwork]}
          socialNetwork={socialNetwork}
          link={contacts[socialNetwork]}
        />
      );
    }
  }

  return (
    <div>
      <h3>{fullName}</h3>
      <p>{aboutMe}</p>
      <ul>{socialLinks}</ul>
      <div>
        <p>{lookingForAJob ? "I am looking for a job" : "I have a job"}</p>
        <p>{lookingForAJobDescription}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
