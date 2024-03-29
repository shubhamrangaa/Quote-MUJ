import React from "react";
import styles from "../styles/FullWidthPreview.module.scss";
import Link from "next/link";

const FullWidthPreview = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <Link href={`/blogs/${props.slug}`}>
          <div className={styles.textHeading}>{props.heading}</div>
        </Link>
        <div className={styles.textBody}>{props.body}</div>
        <div className={styles.textType}>{props.type}</div>
      </div>

      <img
        className={styles.imageContainer}
        src={props.image ? props.image : "https://res.cloudinary.com/quote-muj/image/upload/q_40/v1637300211/manipal-1595339469_h298bf.jpg"}
      />
    </div>
  );
};

export default FullWidthPreview;
