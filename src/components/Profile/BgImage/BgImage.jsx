import React from "react";
import styles from "./BgImage.module.css";

const BgImg = () => {
  return (
    <img
      className={styles.bgImg}
      alt="bg"
      src="https://uploads-ssl.webflow.com/5e96913c9bac7c0b5cb3391c/5f44a7398c0cdf460857e744_img-image.jpg"
    ></img>
  );
};

export default BgImg;
