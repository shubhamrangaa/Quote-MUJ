import React, { useEffect, useLayoutEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@styles/MonthlyNewsletter.module.scss";
import { sectionHeading, decorated } from "@styles/Heading.module.scss";
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
  const headlinerData = news.slice(0, 3);
  const headlinerAsideData = news.slice(3, 4);
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
                {/* {month} {year} */}
                {/* i want to die */}
                Inaugural Issue
              </h2>
            </div>
          </section>

          {/* Headliner body */}

          <section>
            {/* todo: style heading */}
            {/* <h2 className={sectionHeading}>Headliners</h2> */}
            <div className={styles.subHeadingContainer}>
              <h3 className={decorated + " " + sectionHeading}>
                <span>Headlines</span>
              </h3>
            </div>
            <div className={styles.headlinerContainer}>
				{headlinerData.map((data, id) => {
					// console.log(headlinerAsideData);
					return (
						<HeadlinerAside
							key={id}
							headline={data.heading}
							description={data.caption.slice(0, 150) + "..."}
							image={JSON.parse(data.images)[0]}
							author={data.author}
							slug={data.slug}
						/>
					);
				})}
              <div className={styles.headlinerAsideContainer}>
                {/* map headlineAside */}
                {headlinerAsideData.map((data, id) => {
                  // console.log(headlinerAsideData);
                  return (
                    <HeadlinerAside
                      key={id}
                      headline={data.heading}
                      description={data.caption.slice(0, 150) + "..."}
                      image={JSON.parse(data.images)[0]}
                      author={data.author}
                      slug={data.slug}
                    />
                  );
                })}
              </div>
            </div>
          </section>

          {/* More News Section */}
          <section>
            <div className={styles.subHeadingContainer}>
              <h3 className={decorated + " " + sectionHeading}>
                <span>More News</span>
              </h3>
            </div>
            {otherNewsData.map((data, i) => {
              let image = ""
              try {
                image = JSON.parse(data.images)[0];
              } catch (e) {
                image = data.images
              }
              return (
                <div key={i.toString()}>
                  <FullWidthPreview
                    slug={data.slug}
                    heading={data.heading}
                    body={data.caption}
                    image={image}
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
