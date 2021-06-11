import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

// styles
import styles from "@styles/Headliner.module.scss";

const HeadlinerMain = (props) => {
  const { headline, image, content, tags, slug } = props;
  return (
    <div className={styles.headlinerMainContainer}>
      <img src={image ? image : "https://picsum.photos/300/200"} />
      <Link href={`/blogs/${slug}`}>
        <a>{headline}</a>
      </Link>
      <p className={styles.content}>{content}</p>
      {tags.map((tag, id) => {
        return (
          <p key={id} className={styles.tags}>
            {tag}
          </p>
        );
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
