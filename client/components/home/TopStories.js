import styles from "@styles/Topstories.module.scss";
import { sectionHeading, decorated } from "@styles/Heading.module.scss";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import TextMobileStepper from "../Carousel";

export default function TopStories() {
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
  return (
    <div className={styles.TopStories}>
      <h3 className={decorated + " " + sectionHeading}>
        <span>Top Stories</span>
      </h3>
      <div className={styles.fullSection}>
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <Paper className={styles.paper}>
              {articles.map(
                (item, index) =>
                  index < 3 && (
                    <div key={index} className={styles.element}>
                      {index === 0 && (
                        <img
                          src={
                            item.images
                              ? JSON.parse(item.images)[0]
                              : "https://picsum.photos/300/200"
                          }
                          alt="img"
                          // width={256}
                          // height={256}
                        />
                      )}
                      <Link href={`/blogs/${item.slug}`}>
                        <h3 className={styles.heading}>{item.heading}</h3>
                      </Link>

                      <p className={styles.contenttext}>
                        {item.caption}
                        <br></br>
                      </p>
                      {/* <span className={styles.userName}>
                          by {item.author}
                        </span> */}
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
                          alt="img"
                          // width={256}
                          // height={256}
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
              {articles.slice(5).map(
                (item, index) =>
                  index < 3 && (
                    <div key={index} className={styles.element}>
                      {index === 0 && (
                        <img
                          src={
                            item.images
                              ? JSON.parse(item.images)[0]
                              : "https://picsum.photos/300/200"
                          }
                          alt="img"
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
      </div>
      <TextMobileStepper />
    </div>
  );
}
