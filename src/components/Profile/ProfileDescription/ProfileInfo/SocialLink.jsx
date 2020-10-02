import React from "react";
const SocialLink = ({ socialNetwork, link }) => {
  return (
    <li>
      <p>Social network: {socialNetwork}</p>
      <p> Link: {link}</p>
    </li>
  );
};

export default SocialLink;
