import styles from "@styles/Topstories.module.scss";
import { sectionHeading, decorated } from "@styles/Heading.module.scss";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import TextMobileStepper from "../Carousel";

export default function TopStories() {
  // const newsElements = [
  //   {
  //     headline: "Organized expert lecture",
  //     description:
  //       "An online Expert Lecture was organized on Life and Literature through MS Teams.",
  //     author: "random user",
  //     imageMetaData: {
  //       src: "/assets/image1.png",
  //       alt: "Image 1",
  //       width: 256,
  //       height: 147,
  //     },
  //   },
  //   {
  //     headline: "Healthy lifestyle for Healthy heart.",
  //     description:
  //       "An online Expert Lecture was organized on Life and Literature through MS Teams.",
  //     author: "random user",
  //   },
  //   {
  //     headline: "Enhancing Research Skills and Integrity.",
  //     description:
  //       "An online Expert Lecture was organized on Life and Literature through MS Teams.",
  //     author: "random user",
  //   },
  //   {
  //     headline:
  //       "International Virtual Conference on Physical Education and Sports Science",
  //     description:
  //       "Manipal University Jaipur organized the International Virtual Conference on Physical Education and Sports Science (IVCPESS-2021) from 30-31 March 2021.",
  //     author: "random user",
  //     imageMetaData: {
  //       src: "/assets/image2.png",
  //       alt: "Image 2",
  //       width: 523,
  //       height: 320,
  //     },
  //   },
  //   {
  //     headline: "Webinar on Trends in food Blogs",
  //     description:
  //       "Speaker of the session started with the new trends in food blogging.",
  //     author: "random user",
  //   },
  //   {
  //     headline: "Workshop on The Art of Story Telling",
  //     description:
  //       "An online workshop cum interactive session on The Art of Story Telling and Getting Published",
  //     author: "random user",
  //     imageMetaData: {
  //       src: "/assets/image3.png",
  //       alt: "Image 3",
  //       width: 260,
  //       height: 160,
  //     },
  //   },
  //   {
  //     headline: "Journey of a young Businesswoman",
  //     description:
  //       "Dept of Economics and Dept of Arts, organized a guest lecture which was very informative.",
  //     author: "random user",
  //   },
  //   {
  //     headline: "Webinar on Art of Mind Control",
  //     description:
  //       "Dept of Economics and Dept of Arts, organized a guest lecture which was very informative.",
  //     author: "random user",
  //   },
  // ];
  // const sectionOne = newsElements.slice(0, 3);
  // const sectionTwo = newsElements.slice(3, 5);
  // const sectionThree = newsElements.slice(5, 8);

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
        console.log(data);
      })
    );
  };
  return (
    <div className={styles.TopStories}>
      <h2 className={decorated + " " + sectionHeading}>
        <span>Top Stories</span>
      </h2>
      <div className={styles.fullSection}>
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <Paper className={styles.paper}>
              {articles.map(
                (item, index) =>
                  index < 3 && (
                    <>
                      <div key={index} className={styles.element}>
                        {index === 0 && (
                          <img
                            src={
                              item.images
                                ? item.images
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
                    </>
                  )
              )}
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={styles.paper}>
              {articles.slice(3).map(
                (item, index) =>
                  index < 2 && (
                    <>
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
                                ? item.images
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
                    </>
                  )
              )}
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={styles.paper}>
              {articles.slice(5).map(
                (item, index) =>
                  index < 3 && (
                    <>
                      <div key={index} className={styles.element}>
                        {index === 0 && (
                          <img
                            src={
                              item.images
                                ? item.images
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
                    </>
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
