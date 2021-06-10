import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../styles/AllCategory.module.scss";

// components
import Loader from "react-loader-spinner";
import SmallWidthPreview from "../../components/SmallWidthPreview";
import PageHeader from "../../components/PageHeader";

const all = () => {
  const [loading, setLoading] = useState(true);
  const [categoryWiseArticles, setCategoryWiseArticles] = useState([]);

  // list of categories
  const categoryList = ["Sports", "Research", "News", "Events"];

  const fetchCategoryWisePosts = async (category) => {
    fetch(
      `https://quote-muj.herokuapp.com/api/blogs/categories/${category}`
    ).then((res) =>
      res.json().then((data) => {
        setCategoryWiseArticles((prev) =>
          prev.concat({
            category: `${category}`,
            article: {
              ...(data.length === 0 ? { caption: "no post" } : { ...data[0] }),
            },
          })
        );
      })
    );
  };

  useEffect(() => {
    setLoading(true);
    categoryList.forEach((category) => {
      fetchCategoryWisePosts(category);
    });
    setLoading(false);
  }, []);

  return (
    <>
      <PageHeader heading="All Categories" />
      <div className={styles.allCategoryContainer}>
        {/* category pills  */}
        <section>
          <div className={styles.nav} style={{ paddingRight: "1.5rem" }}>
            <div className={styles.categories}>
              <button
                className={styles.button}
                // onClick={fetchLatest}
              >
                Latest
              </button>
              {categoryList.map((category) => {
                return (
                  <button
                    key={category}
                    className={styles.button}
                    // onClick={(e) => fetchCategory(category)}
                  >
                    {category.slice(0, 1).toUpperCase() +
                      category.slice(1).toLowerCase()}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* 1 post per category */}
        <div>
          {loading ? (
            <Loader
              className={styles.loader}
              type="TailSpin"
              color="#0F0F0F"
              height={100}
              width={100}
            />
          ) : (
            <div className={styles.postContainer}>
              {categoryWiseArticles.length > 0 ? (
                categoryWiseArticles.map((el, id) => {
                  return (
                    <div>
                      {/* category heading */}
                      <div className={styles.postHeading}>
                        <p>{el.category}</p>

                        {/* Link to all posts from the category */}
                        <Link href={"/category/" + el.category}>View all</Link>
                      </div>

                      {/* if n>1 > use map */}
                      <SmallWidthPreview
                        title={el.article.heading}
                        body={el.article.caption.slice(0, 150) + "..."}
                        type={el.article.categories}
                        author={el.article.author}
                        // remove sample image in production
                        image={
                          el.article.image
                            ? el.article.image
                            : "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
                        }
                        key={id}
                      />
                    </div>
                  );
                })
              ) : (
                <div>
                  <h3>No articles! </h3>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default all;
