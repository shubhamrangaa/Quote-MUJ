import React from "react";
import { useRouter } from "next/router";
import styles from "@styles/MonthlyNewsletter.module.scss";

// components
import PageHeader from "@components/PageHeader";
import HeadlinerMain from "@components/HeadlinerMain";
import HeadlinerAside from "@components/HeadlinerAside";
import FullWidthPreview from "@components/FullWidthPreview";
import TrendingCarousel from "@components/TrendingCarousel";

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export async function getStaticProps({ params }) {
  let { categoryName } = params;
  categoryName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
  //   console.log(categoryName);

  let res = await fetch(
    `https://quote-muj.herokuapp.com/api/blogs/categories/${categoryName}`
  );
  console.log(categoryName);
  if (categoryName === "Upcoming-events") {
    res = await fetch(
      `https://quote-muj.herokuapp.com/api/blogs/categories/Upcoming`
    );
    console.log("hello");
  }
  const news = await res.json();
  //   console.log(news);
  return { props: { news } };
}

const Category = ({ news }) => {
  const { query } = useRouter();
  let { categoryName } = query;
  //   console.log(categoryName);
  categoryName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
  news = news.map((item) => {
    try {
      return {
        ...item,
        images: JSON.parse(item.images)[0],
      };
    } catch {
      return {
        ...item,
        images: item.images,
      };
    }
  });
  const headlinerData = news.slice(0, 1)[0];
  const headlinerAsideData = news.slice(1, 4);
  const otherNewsData = news.slice(5);
  return (
    <>
      {Object.keys(news).length ? (
        <div>
          {/* biggest off in history */}
          <PageHeader
            heading={
              categoryName === "Accreditation"
                ? "Ranking & \n Accreditation"
                : categoryName
            }
          />
          <section>
            {/* todo: style heading */}
            {/* <h2>Headliner</h2> */}
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
                {headlinerAsideData.map((data, index) => {
                  return (
                    <HeadlinerAside
                      key={index}
                      headline={data.heading}
                      description={data.caption.slice(0, 150) + "..."}
                      image={data.images}
                      author={data.author}
                      slug={data.slug}
                    />
                  );
                })}
              </div>
            </div>
          </section>
          <TrendingCarousel news={news} />
          {/* More News Section */}
          {/* <section>
						<div className={styles.subHeadingContainer}>
							<div className={styles.subHeadingLine} />
							<div className={styles.subHeadingText}>More News</div>
							<div className={styles.subHeadingLine} />
						</div>
						{otherNewsData.map((data, i) => (
							<div key={i.toString()}>
								<FullWidthPreview heading={data.heading} body={data.body} image={data.images} type={data.type} />
							</div>
						))}
						<div className={styles.viewAllButton}>Explore all topics</div>
					</section> */}
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

export default Category;
