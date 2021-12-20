import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import styles from "@styles/TrendingCarousel.module.scss";

const SmallWidthPreview = (props) => {
  let image = "";
  try {
    image = JSON.parse(props.image)[0];
  } catch {
    image = props.image;
  }
  return (
    <div style={{ marginLeft: 20, marginRight: 20, marginBottom: 50 }}>
      {props.index !== undefined ? (
        <div className={styles.indices}>
          {parseInt(props.index) < 9 ? "0" : null}
          {props.index + 1}-
        </div>
      ) : null}

      <Link href={`/blogs/${props.slug}`}>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img  src={image} draggable={false} />
          </div>
          <div className={styles.textContainer}>
            <h3 className={styles.heading}>{props.title}</h3>
            <div className={styles.author}>By {props.author}</div>
            <div className={styles.body}>{props.body}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SmallWidthPreview;

SmallWidthPreview.prototype = {
  slug: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
