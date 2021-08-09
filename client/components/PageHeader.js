import React from "react";
import PropTypes from "prop-types";

import styles from "../styles/MonthlyNewsletter.module.scss";

const PageHeader = (props) => {
  return (
    <section className={styles.top}>
      <div className={styles.headingcontainer}>
        <h1 className={styles.heading}>
          {/* bruh moment intensifies */}
          {props.heading !== undefined
            ? props.heading.split(" ").map((word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()).join(" ")
            : "heading"}
        </h1>
      </div>
      <div className={styles.rect}>
        <div className={styles.rect__one}></div>
        <div className={styles.rect__two}></div>
        <div className={styles.rect__three}></div>
        <div className={styles.rect__four}></div>
      </div>
    </section>
  );
};

export default PageHeader;

PageHeader.prototype = {
  heading: PropTypes.string.isRequired,
};
