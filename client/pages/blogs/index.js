import React, { useState, useEffect } from "react";
import styles from "../../styles/Topstories.module.scss";
import mainstyles from "../../styles/AllStories.module.scss";
import Story from "../../components/Story";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Link from "next/link";

export default function AllStories() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    fetch("https://quote-muj.herokuapp.com/api/blogs/all").then((res) =>
      res.json().then((data) => {
        setArticles(data);
        setLoading(false);
      })
    );
  };
  const DisplayArticles = () => {
    return articles.length > 0 ? (
      <div>
        {articles.map((el, id) => (
          <Story
            heading={el.heading}
            article_data={el.article_data}
            caption={el.caption}
            author={el.author}
            likes={el.likes}
            date_created={el.date_created}
            categories={el.categories}
            slug={el.slug}
            id={id}
          />
        ))}
      </div>
    ) : (
      <div>
        <h3>[Error]:404</h3>
      </div>
    );
  };

  return (
    <div className={mainstyles.storieswrapper}>
      <h1 className={styles.decorated}>
        <span>All Stories</span>
      </h1>
      {loading ? (
        <Loader
          className={mainstyles.loader}
          type="TailSpin"
          color="#0F0F0F"
          height={100}
          width={100}
        />
      ) : (
        <DisplayArticles />
      )}
    </div>
  );
}
