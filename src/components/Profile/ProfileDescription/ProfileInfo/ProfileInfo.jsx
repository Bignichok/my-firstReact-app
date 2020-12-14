import React, { useState } from "react";
import SocialLink from "./SocialLink";
// import styles from "./ProfileInfo.module.css";

const ProfileInfo = ({
  aboutMe,
  contacts,
  lookingForAJob,
  lookingForAJobDescription,
  fullName,
  isOwner,
}) => {
  const [editMode, setEditMode] = useState(false);

  const socialLinks = [];
  for (const socialNetwork in contacts) {
    if (contacts[socialNetwork]) {
      socialLinks.push(
        <SocialLink
          key={contacts[socialNetwork]}
          link={contacts[socialNetwork]}
          socialNetwork={socialNetwork}
        />
      );
    }
  }

  return (
    <div>
      <h3>{fullName}</h3>
      <p>{aboutMe}</p>
      {isOwner && <button onClick={() => setEditMode(!editMode)}>Edit links</button>}
      <ul>{socialLinks}</ul>
      <div>
        <p>{lookingForAJob ? "I am looking for a job" : "I have a job"}</p>
        <p>{lookingForAJobDescription}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
