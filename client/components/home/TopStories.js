import styles from "@styles/Topstories.module.scss";
import { sectionHeading, decorated } from "@styles/Heading.module.scss";
import React, { useState, useEffect } from "react";
import HeadlinerAside from "../HeadlinerAside";
import { stripLongString } from "utils/stripLongString";
import axios from "axios";

export default function TopStories() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const { data } = await axios(
      "https://quote-muj.herokuapp.com/api/blogs/all"
    );

    console.log(data);
    // const strippedDesc = data.map((article) => {
    //   const shortText = stripLongString(200, article.caption);
    //   const shortHeading = stripLongString(100, article.heading);

    //   const formattedArticle = {
    //     ...strippedDesc,
    //     image: JSON.parse(data.images)[0],
    //     caption: shortText,
    //     heading: shortHeading,
    //   };
    //   console.log("f", formattedArticle);
    //   return formattedArticle;
    // });
    // console.log(strippedDesc);
    const sortedData = data
      .slice(0, 6)
      .sort(function (a, b) {
        let c = new Date(a.date_created);
        let d = new Date(b.date_created);
        return c - d;
      })
      .reverse();

    console.log("sorted", sortedData);
    setArticles(sortedData);
    setLoading(false);
  };
  return (
    <div className={styles.TopStories}>
      <h3 className={decorated + " " + sectionHeading}>
        <span>Top Stories</span>
      </h3>
      <div className={styles.TopStoriesGrid}>
        {articles.map((data, index) => {
          return (
            <HeadlinerAside
              key={index}
              headline={stripLongString(100, data.heading)}
              description={stripLongString(150, data.caption)}
              image={JSON.parse(data.images)[0]}
              author={data.author}
              slug={data.slug}
            />
          );
        })}
      </div>
      {/* <div className={styles.fullSection}>
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <Paper className={styles.paper}>
              {articles.map(
                (item, index) =>
                  index < 2 && (
                    <div key={index} className={styles.element}>
                      {index === 0 && (
                        <img
                          src={
                            item.images
                              ? JSON.parse(item.images)[0]
                              : "https://picsum.photos/300/200"
                          }
                          alt='img'
                        />
                      )}
                      <Link href={`/blogs/${item.slug}`}>
                        <h3 className={styles.heading}>{item.heading}</h3>
                      </Link>
                      <p className={styles.contenttext}>
                        {item.caption}
                        <br></br>
                      </p>
                    </div>
                  )
              )}
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={styles.paper}>
              {articles.slice(3).map(
                (item, index) =>
                  index < 2 && (
                    <div
                      key={index}
                      className={
                        index === 1 ? styles.elementmain2 : styles.elementmain
                      }
                    >
                      {index === 0 && (
                        <img
                          src={
                            item.images
                              ? JSON.parse(item.images)[0]
                              : "https://picsum.photos/300/200"
                          }
                          alt='img'
                        />
                      )}
                      <Link href={`/blogs/${item.slug}`}>
                        <h3 className={styles.heading}>{item.heading}</h3>
                      </Link>
                      <p className={styles.contenttext}>
                        {item.caption}
                        <br />
                      </p>
                    </div>
                  )
              )}
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={styles.paper}>
              {articles.slice(8).map(
                (item, index) =>
                  index < 2 && (
                    <div key={index} className={styles.element}>
                      {index === 0 && (
                        <img
                          src={
                            item.images
                              ? JSON.parse(item.images)[0]
                              : "https://picsum.photos/300/200"
                          }
                          alt='img'
                          width={256}
                          height={256}
                        />
                      )}
                      <Link href={`/blogs/${item.slug}`}>
                        <h3 className={styles.heading}>{item.heading}</h3>
                      </Link>
                      <p className={styles.contenttext}>
                        {item.caption}
                        <br />
                      </p>
                    </div>
                  )
              )}
            </Paper>
          </Grid>
        </Grid>
      </div> */}
      {/* <TextMobileStepper /> */}
    </div>
  );
}
