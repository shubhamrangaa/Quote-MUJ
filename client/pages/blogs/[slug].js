import React from "react";
import styles from "../../styles/StoryPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import ReactHtmlParser from "react-html-parser";

export const getStaticPaths = async () => {
  const res = await fetch("https://quote-muj.herokuapp.com/api/blogs/all");
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
  const res = await fetch(`https://quote-muj.herokuapp.com/api/blogs/${slug}`);
  const data = await res.json();

  return {
    props: { story: data },
  };
};

function FullStory({ story }) {
  return (
    <div>
      <div className={styles.heading}>
        <h6>Bulletin</h6>
        <h1>{story.heading}</h1>
        <ul>
          <li>{story.author}</li>
          <li>{story.categories}</li>
          <li>{story.date_created.toString().substring(0, 10)}</li>
          <li>5 mins Read</li>
          <li>
            <FontAwesomeIcon icon={faThumbsUp} />
          </li>
          <li>
            <FontAwesomeIcon icon={faBookmark} />
          </li>
        </ul>
      </div>
      <Image src="/img.png" alt="story picture" width="100vw" height="100vh" />

      <div className={styles.text}>{story.caption}</div>
      <div className={styles.text}>
        <>{ReactHtmlParser(story.article_data.data)}</>
      </div>
    </div>
  );
}

export default FullStory;
