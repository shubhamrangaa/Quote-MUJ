import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

// styles
import styles from "../styles/Headliner.module.scss";

const HeadlinerMain = (props) => {
  const { headline, imageMetaData, content, tags } = props;

  return (
    <div className={styles.headlinerMainContainer}>
      <img
        src={imageMetaData.src}
        width={imageMetaData.width}
        height={imageMetaData.height}
        alt={imageMetaData.alt}
      />
      <h2>{headline}</h2>
      <p className={styles.content}>{content}</p>
      {tags.map((tag) => {
        return <p className={styles.tags}>{tag}</p>;
      })}
    </div>
  );
};

HeadlinerMain.prototype = {
  headline: PropTypes.string.isRequired,
  imageMetaData: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
};
export default HeadlinerMain;
