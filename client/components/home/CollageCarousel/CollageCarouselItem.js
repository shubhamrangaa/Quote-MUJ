import React from "react";
import styles from "@styles/Hero.module.scss";
const CollageCarouselItem = ({ src, caption = "" }) => {
  return (
    <div>
      <img className={styles.carouselImage} src={src} />
      <p>{caption}</p>
    </div>
  );
};

export default CollageCarouselItem;
