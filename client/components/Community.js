import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CommunityPost from "./CommunityPost";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-regular-svg-icons";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "../styles/Community.module.scss";

const Community = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLatest();
  }, []);

  const fetchLatest = async () => {
    fetch("https://quote-muj.herokuapp.com/api/blogs/all")
      .then((res) => {
        if (!res.ok) throw res;
        return res.json();
      })
      .then((data) => {
        setArticles(data.slice(0, 10));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setArticles([]);
        setLoading(false);
      });
  };

  const fetchCategory = async (category) => {
    setLoading(true);
    fetch(
      `https://quote-muj.herokuapp.com/api/blogs/categories/${category}`
    ).then((res) =>
      res.json().then((data) => {
        setArticles(data.slice(0, 10));
        setLoading(false);
      })
    );
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className={styles.community}>
      <div className={styles.nav}>
        <p id={styles.title}>Categories</p>
        <p className={styles.line}></p>
        <div className={styles.categories}>
          <button className={styles.button} onClick={fetchLatest}>
            Latest
          </button>
          <button
            className={styles.button}
            onClick={(e) => fetchCategory("News")}
          >
            News
          </button>
          <button
            className={styles.button}
            onClick={(e) => fetchCategory("Sports")}
          >
            Sports
          </button>
          <button
            className={styles.button}
            onClick={(e) => fetchCategory("Events")}
          >
            Events
          </button>
          <button
            className={styles.button}
            onClick={(e) => fetchCategory("Research")}
          >
            Research
          </button>
          <button
            className={styles.button}
            onClick={(e) => fetchCategory("Placements")}
          >
            Placements
          </button>
          <button
            className={styles.button}
            onClick={(e) => fetchCategory("Academics")}
          >
            Academics
          </button>
          <button
            className={styles.button}
            onClick={(e) => fetchCategory("Leadership")}
          >
            Leadership
          </button>
          <button
            className={styles.button}
            onClick={(e) => fetchCategory("Accreditation")}
          >
            Accreditation
          </button>
        </div>
      </div>
      <div className={styles.container}>
        {loading ? (
          <Loader
            className={styles.loader}
            type="TailSpin"
            color="#0F0F0F"
            height={100}
            width={100}
          />
        ) : articles.length > 0 ? (
          <Carousel responsive={responsive} showDots={true}>
            {articles.map((el, id) => (
              <CommunityPost
                heading={el.heading}
                article_data={el.article_data}
                caption={el.caption}
                author={el.author}
                likes={el.likes}
                date_created={el.date_created}
                categories={el.categories}
                slug={el.slug}
                key={id}
              />
            ))}
          </Carousel>
        ) : (
          <div>
            <h3>
              No articles!{" "}
              <FontAwesomeIcon
                className={styles.FontAwesomeIcon}
                icon={faFrown}
              />
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Community;
