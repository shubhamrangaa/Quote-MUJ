import React, { useState } from "react";
import styles from "../../styles/StoryPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import readTime from "../../utils/useReadTime";

// const apiURL = process.env.SERVER_URL;
// const apiURL = "https://quote-muj.herokuapp.com";
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
  const date = new Date(story.date_created).toString().substring(3, 15);
  const read = readTime(story.article_data.data);
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
        <h2>{story.heading}</h2>
        <ul>
          <div className={styles.metaData}>
            <li>By {story.author}</li>

            <li>{date}</li>
            <li>{read}</li>
            <li onClick={addLike}>
              <FontAwesomeIcon
                className={styles.FontAwesomeIcon}
                icon={faThumbsUp}
              />{" "}
              {likes} Likes
            </li>
          </div>
        </ul>
      </div>
      {story.images !== "" ? (
        <div className={styles.storypic}>
          <img src={story.images} alt="story-picture"></img>
        </div>
      ) : null}

      {/* <div className={styles.text}>{story.caption}</div> */}
      <div className={styles.text}>
        <>{ReactHtmlParser(story.article_data.data)}</>
      </div>
      <div className={styles.categories}>
        <p>Topics</p>
        <ul>
          {story.categories.map((el) => (
            <li>
              <button className={styles.button}>
                {el.charAt(0).toUpperCase() + el.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FullStory;
