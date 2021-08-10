import React from "react";
import Link from "next/link";

import styles from "@styles/LeadershipMessage.module.scss";
import { styled } from "@material-ui/core";

const LeadershipCard = ({ href, image, title, children }) => {
  return (
    <Link href={`/message/${href}`}>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <img src={image} alt='title' />
        </div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </Link>
  );
};

export default LeadershipCard;
