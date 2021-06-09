import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import styles from "../styles/CommunityPost.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Share from "../components/Share";

const CommunityPost = (props) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <Paper elevation={1} className={styles.main}>
        <div className={styles.header}>
          <div className={styles.profile}>
            <FontAwesomeIcon
              className={styles.FontAwesomeIconProfile}
              icon={faUserCircle}
            />
          </div>
          <div className={styles.user}>
            <p id={styles.username}>{props.author}</p>
            <p id={styles.designation}>Staff Writer, Mumbai</p>
          </div>
        </div>
        <div className={styles.content}>
          <p>{props.caption.substring(0, 120)}...</p>
        </div>
        <div className={styles.buttons}>
          <FontAwesomeIcon
            className={styles.FontAwesomeIcon}
            icon={faBookmark}
          />
          <FontAwesomeIcon
            className={styles.FontAwesomeIcon}
            icon={faShareAlt}
            onClick={handleClick}
          />
          <Share display={show} url={props.slug} />
        </div>
      </Paper>
    </div>
  );
};

export default CommunityPost;
