import React, { useState } from "react";
import styles from "@styles/StoryPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import readTime from "../../utils/useReadTime";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ReactPlayer from "react-player";

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
  let images;
  try {
    images = JSON.parse(story.images);
  } catch {
    images = [story.images];
  }
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
                size={16}
                className={styles.FontAwesomeIcon}
                icon={faThumbsUp}
              />{" "}
              {likes} Likes
            </li>
          </div>
        </ul>
      </div>
      {story.images !== "" ? (
        story.images.length !== 1 ? (
          <Carousel
            additionalTransfrom={0}
            arrows
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 1,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
            }}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {images.map((item, id) => (
              <div className={styles.storypic} key={id}>
                <img src={item} alt="story-picture"></img>
              </div>
            ))}
          </Carousel>
        ) : (
          <div className={styles.storypic}>
            <img src={images[0]} alt="story-picture"></img>
          </div>
        )
      ) : null}

      {/* <div className={styles.text}>{story.caption}</div> */}
      <div className={styles.text}>
        <>{ReactHtmlParser(story.article_data.data?.replace(' ', '&nbsp;'))}</>
      </div>
      <div className={styles.categories}>
        {story.videos ? (
          <div className={styles.playerWrapper}>
            <ReactPlayer
              className={styles.reactPlayer}
              url={story.videos}
              width="100%"
              height="100%"
            />
          </div>
        ) : null}
        <ul>
          {story.categories.map((el, id) => (
            <li key={id}>
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
