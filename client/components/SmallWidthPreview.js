import React from "react";
import PropTypes from "prop-types";

import styles from "../styles/TrendingCarousel.module.scss";

const SmallWidthPreview = (props) => {
  return (
    <div style={{ marginLeft: 20, marginRight: 20, marginBottom: 50 }}>
      {props.index !== undefined ? (
        <div className={styles.indices}>
          {parseInt(props.index) < 9 ? "0" : null}
          {props.index + 1}-
        </div>
      ) : null}

      <div className={styles.content}>
        {props.image ? (
          <img className={styles.images} src={props.image} draggable={false} />
        ) : null}
        <div>
          <div className={styles.heading}>{props.title}</div>
          <div className={styles.body}>{props.body}</div>
          <div className={styles.author}>by {props.author}</div>
        </div>
      </div>
    </div>
  );
};

export default SmallWidthPreview;

SmallWidthPreview.prototype = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
