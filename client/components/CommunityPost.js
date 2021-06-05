import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import styles from "../styles/CommunityPost.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Share from "../components/Share";

const CommunityPost = () => {
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
            <p id={styles.username}>User</p>
            <p id={styles.designation}>Staff Writer, Mumbai</p>
          </div>
        </div>
        <div className={styles.content}>
          <p>
            Manipal University Jaipur ranks 17th on the list of top 100
            Universities of the world by Times Higher Education Group.
          </p>
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
          <Share display={show} url={" "} />
        </div>
      </Paper>
    </div>
  );
};

export default CommunityPost;
