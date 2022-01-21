import React from "react";
import styles from "@styles/MonthlyNewsletter.module.scss";
import { sectionHeading, decorated } from "@styles/Heading.module.scss";
import moment from "moment";

// components
import HeadlinerAside from "@components/HeadlinerAside";
import FullWidthPreview from "@components/FullWidthPreview";

export async function getServerSideProps({ query }) {
  const { month, year, range } = query;

  const monthNumber = moment().month(month).format("M") - 1;
  const res = await fetch(`https://quote-muj.herokuapp.com/api/blogs/all`);
  let news = await res.json();

  news = news.sort((a, b) => {
    return new Date(b.date_created) - new Date(a.date_created);
  });

	// range denotes the 
  if (!range) {
    news = news.filter((article) => {
      return new Date(article.date_created).getMonth() == monthNumber;
    });
  } else {
    let totalArticles = [];
    for (let index = monthNumber; index <= (Number(monthNumber) + Number(range) - 1); index++) {
      totalArticles.push(...news.filter((article) => {
        return new Date(article.date_created).getMonth() == index % 12;
      }));
		}
		news = totalArticles;
  }

	news = news.sort((a, b) => {
    return new Date(b.date_created) - new Date(a.date_created);
	});

  return { props: { news } };
}

const Newsletter = ({ news }) => {
  const headlinerData = news.slice(0, 3);
  const headlinerAsideData = news.slice(3, 4);
  const otherNewsData = news.slice(5);
  return (
    <>
      {Object.keys(news).length ? (
        <div>
          <section className={styles.top}>
            <div className={styles.headingcontainer}>
              <h1 className={styles.heading}>Monthly Newsletter</h1>
            </div>
          </section>

          {/* Headliner body */}

          <section>
            <div className={styles.subHeadingContainer}>
              <h3 className={decorated + " " + sectionHeading}>
                <span>Headlines</span>
              </h3>
            </div>
            <div className={styles.headlinerContainer}>
              {headlinerData.map((data, id) => {
                return (
                  <HeadlinerAside
                    key={id}
                    headline={data.heading}
                    description={data.caption.slice(0, 150) + "..."}
                    image={data.images ? JSON.parse(data.images)[0] : null}
                    author={data.author}
                    slug={data.slug}
                  />
                );
              })}
              <div className={styles.headlinerAsideContainer}>
                {/* map headlineAside */}
                {headlinerAsideData.map((data, id) => {
                  return (
                    <HeadlinerAside
                      key={id}
                      headline={data.heading}
                      description={data.caption.slice(0, 150) + "..."}
                      image={data.images ? JSON.parse(data.images)[0] : null}
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
              let image = "";
              try {
                image = JSON.parse(data.images)[0];
              } catch (e) {
                image = data.images;
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
