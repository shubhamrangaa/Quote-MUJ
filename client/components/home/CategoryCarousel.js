import React, { useState, useEffect } from "react";
// components
import Loader from "react-loader-spinner";
import Carousel from "react-multi-carousel";
import CommunityPost from "../CommunityPost";

// styles
import "react-multi-carousel/lib/styles.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "@styles/CategoryCarousel.module.scss";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-regular-svg-icons";

// constants
import CATEGORY_LIST from "../../constants/CategoryList";

const CategoryCarousel = () => {
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
        console.error(err);
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
        <h3 id={styles.title}>Categories</h3>
        {/* <p className={styles.line}></p> */}
        <div className={styles.categories}>
          <button className={styles.button} onClick={fetchLatest}>
            Latest
          </button>
          {CATEGORY_LIST.map((category, id) => {
            return (
              <button
                key={id}
                className={styles.button}
                onClick={(e) => fetchCategory(category)}
              >
                {category === "Sports" ? "Extra-curricular" : category}
              </button>
            );
          })}
        </div>
      </div>
      <div className={styles.container}>
        {loading ? (
          <Loader
            className={styles.loader}
            type='TailSpin'
            color='#0F0F0F'
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

export default CategoryCarousel;
