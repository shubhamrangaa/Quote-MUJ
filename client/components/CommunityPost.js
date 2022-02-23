import React, { useState } from "react";
import Link from "next/link";
import Paper from "@material-ui/core/Paper";
import styles from "@styles/CommunityPost.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { trimString } from "@utils/trimString";
import Share from "@components/Share";
import axios from "axios";

const CommunityPost = (props) => {
  const [show, setShow] = useState(false);
  const [likes, setLikes] = useState(props.likes);

  const handleClick = () => {
    setShow(!show);
  };
  const addLike = (slug) => {
    axios
      .post("https://quote-muj.herokuapp.com/api/blogs/add-like", {
        slug,
      })
      .then((res) => {
        setLikes(res.data.likes);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <Paper elevation={1} className={styles.main}>
        <div>
          <div className={styles.header}>
            <div className={styles.user}>
              <Link href={`/blogs/${props.slug}`}>
                <h5>{trimString(props.heading, 0, 80)}</h5>
              </Link>
            </div>
            <p id={styles.designation}>By {props.author}</p>
          </div>
          <div className={styles.content}>
            {props.caption.length > 120 ? (
              <p>{props.caption.substring(0, 120)}...</p>
            ) : (
              <p>{props.caption}</p>
            )}
          </div>
        </div>
        <div className={styles.buttons}>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <FontAwesomeIcon
              className={styles.FontAwesomeIcon}
              id={styles.likebtn}
              icon={faThumbsUp}
              onClick={(e) => addLike(props.slug)}
            />{" "}
            {likes}
          </div>
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
