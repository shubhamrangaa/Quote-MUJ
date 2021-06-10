import styles from "../styles/Topstories.module.scss";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Image from "next/image";
import Link from "next/link";
import Divider from "@material-ui/core/Divider";
import React , {useState, useEffect} from "react";
import TextMobileStepper from "../components/Carousel";

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
        console.log(data)
      })
    );
  };
  return (
    <div className={styles.TopStories}>
      <h1 className={styles.decorated}>
        <span>Top Stories</span>
      </h1>
      <div className={styles.fullSection}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Paper className={styles.paper}>
              {articles.map((item, index) => (
                index < 3 && 
                <>
                  <div key={index} className={styles.element}>
                    {item.imageMetaData && (
                      <Image
                        src={item.images}
                        alt="img"
                        width={100}
                        height={100}
                      />
                    )}
                    <h3>{item.heading}</h3>
                    <p className={styles.caption}>
                      {item.caption}
                      <br></br>
                    </p>
                    <span className={styles.userName}>by {item.author}</span>
                  </div>
                  {index !== 2  && <Divider />}
                </>
              ))}
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={styles.paper}>
              {articles.map((item, index) => (
                index <2  &&
                <>
                  <div
                    key={index}
                    className={
                      index === 1 ? styles.elementmain2 : styles.elementmain
                    }
                  >
                    {item.imageMetaData && (
                      <Image
                        src={item.imageMetaData.src}
                        alt={item.imageMetaData.alt}
                        width={item.imageMetaData.width}
                        height={item.imageMetaData.height}
                      />
                    )}
                    <h3>{item.heading}</h3>
                    <p >
                      {item.caption}
                      <br />
                      <span className={styles.userName}>by {item.author}</span>
                    </p>
                  </div>
                  {index !== 1  && <Divider />}
                </>
              ))}
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={styles.paper}>
              {articles.map((item, index) => (
                index <3 &&
                <>
                  <div key={index} className={styles.element}>
                    {item.imageMetaData && (
                      <Image
                        src={item.imageMetaData.src}
                        alt={item.imageMetaData.alt}
                        width={item.imageMetaData.width}
                        height={item.imageMetaData.height}
                      />
                    )}
                    <h3>{item.heading}</h3>
                    <p className={styles.caption}>
                      {item.caption}
                      <br />
                      
                    </p>
                    <span className={styles.userName}>by {item.author}</span>
                  </div>
                  {index !== 2 && <Divider />}
                </>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </div>
      <TextMobileStepper />
    </div>
  );
}
