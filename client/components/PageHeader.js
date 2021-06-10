import React from "react";
import PropTypes from "prop-types";

import styles from "../styles/MonthlyNewsletter.module.scss";

const PageHeader = (props) => {
  return (
    <section className={styles.top}>
      <div className={styles.headingcontainer}>
        <h1 className={styles.heading}>
          {props.heading !== undefined
            ? props.heading.slice(0, 1).toUpperCase() +
              props.heading.slice(1).toLowerCase()
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
