import React, { useState } from "react";
import styles from "../../styles/StoryPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";

const apiURL = process.env.SERVER_URL || "https://quote-muj.herokuapp.com";

export const getStaticPaths = async () => {
  const res = await fetch(`${apiURL}/api/blogs/all`);
  const data = await res.json();

  const paths = data.map((article) => {
    return {
      params: { slug: article.slug },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const res = await fetch(`${apiURL}/api/blogs/${slug}`);
  const data = await res.json();

  return {
    props: { story: data },
  };
};

function FullStory({ story }) {
  const [likes, setLikes] = useState(story.likes);
  const slug = story.slug;
  const addLike = () => {
    axios
      .post(`${apiURL}/api/blogs/add-like`, {
        slug,
      })
      .then((res) => {
        setLikes(res.data.likes);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className={styles.heading}>
        <h6>Bulletin</h6>
        <h1>{story.heading}</h1>
        <ul>
          <li>{story.author}</li>
          {story.categories.map((el) => (
            <li>{el.charAt(0).toUpperCase() + el.slice(1)}</li>
          ))}
          <li>{story.date_created.toString().substring(0, 10)}</li>
          <li>5 mins Read</li>
          <li onClick={addLike}>
            <FontAwesomeIcon
              className={styles.FontAwesomeIcon}
              icon={faThumbsUp}
            />{" "}
            {likes} Likes
          </li>
          <li>
            <FontAwesomeIcon icon={faBookmark} />
          </li>
        </ul>
      </div>
      <div className={styles.storypic}>
        <img src="/images/img.png" alt="story-picture"></img>
      </div>

      <div className={styles.text}>{story.caption}</div>
      <div className={styles.text}>
        <>{ReactHtmlParser(story.article_data.data)}</>
      </div>
    </div>
  );
}

export default FullStory;
