import React, { useEffect, useLayoutEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@styles/MonthlyNewsletter.module.scss";

// components
import HeadlinerMain from "@components/HeadlinerMain";
import HeadlinerAside from "@components/HeadlinerAside";
import FullWidthPreview from "@components/FullWidthPreview";
import axios from "axios";

// fetch top 5 posts and pass them to components

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export async function getStaticProps({ params }) {
  const { month } = params;
  const res = await fetch(
    `https://quote-muj.herokuapp.com/api/blogs/monthly/${month}`
  );
  const news = await res.json();
  //   console.log(news);
  return { props: { news } };
}

const Newsletter = ({ news }) => {
  // console.log(news)
  const { query } = useRouter();
  const { year, month } = query;
  const headlinerData = news.slice(0, 1)[0];
  const headlinerAsideData = news.slice(1, 4);
  const otherNewsData = news.slice(5);
  return (
    <>
      {Object.keys(news).length ? (
        <div>
          <section className={styles.top}>
            <div className={styles.headingcontainer}>
              <h1 className={styles.heading}>
                Monthly
                <br />
                Newsletter.
              </h1>
              <h2 className={styles.monthyear}>
                {month} {year}
              </h2>
            </div>
            <div className={styles.rect}>
              <div className={styles.rect__one}></div>
              <div className={styles.rect__two}></div>
              <div className={styles.rect__three}></div>
              <div className={styles.rect__four}></div>
            </div>
          </section>

          {/* Headliner body */}

          <section>
            {/* todo: style heading */}
            {/* <h2 className={sectionHeading}>Headliners</h2> */}
            <div className={styles.subHeadingContainer}>
              <div className={styles.subHeadingLine} />
              <h2 className={styles.subHeadingText}>Headliners</h2>
              <div className={styles.subHeadingLine} />
            </div>
            <div className={styles.headlinerContainer}>
              <HeadlinerMain
                headline={headlinerData.heading}
                content={headlinerData.caption}
                image={headlinerData.images}
                tags={headlinerData.categories}
                slug={headlinerData.slug}
              />
              <div className={styles.headlinerAsideContainer}>
                {/* map headlineAside */}
                {headlinerAsideData.map((data, id) => {
                  // console.log(headlinerAsideData);
                  return (
                    <HeadlinerAside
                      key={id}
                      headline={data.heading}
                      description={data.caption}
                      image={data.images}
                      author={data.author}
                      slug={data.slug}
                    />
                  );
                })}
              </div>
            </div>
          </section>

          {/* Other News Section */}
          <section>
            <div className={styles.subHeadingContainer}>
              <div className={styles.subHeadingLine} />
              <h2 className={styles.subHeadingText}>Other News</h2>
              <div className={styles.subHeadingLine} />
            </div>
            {/* todo: style heading */}
            {otherNewsData.map((data, i) => {
              //   console.log(data);
              return (
                <div key={i.toString()}>
                  <FullWidthPreview
                    heading={data.heading}
                    body={data.caption}
                    image={data.images}
                    type={data.type}
                  />
                </div>
              );
            })}
            <div className={styles.viewAllButton}>Explore all topics</div>
          </section>
        </div>
      ) : (
        <div
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          No Articles
        </div>
      )}
    </>
  );
};

export default Newsletter;
