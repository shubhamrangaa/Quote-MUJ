import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../styles/AllCategory.module.scss";

// components
import Loader from "react-loader-spinner";
import SmallWidthPreview from "../../components/SmallWidthPreview";
import PageHeader from "../../components/PageHeader";

// constants
import CATEGORY_LIST from "../../constants/CategoryList";

const all = () => {
  const [loading, setLoading] = useState(true);
  const [categoryWiseArticles, setCategoryWiseArticles] = useState([]);

  const fetchCategoryWisePosts = async (category) => {
    setLoading(true);
    const res = await fetch(
      `https://quote-muj.herokuapp.com/api/blogs/categories/${category}`
    );
    const data = await res.json();
    setCategoryWiseArticles((prev) =>
      prev.concat({
        category: `${category}`,
        article: {
          ...(data.length === 0 ? { caption: "no post" } : { ...data[0] }),
        },
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    CATEGORY_LIST.forEach(async (category) => {
      await fetchCategoryWisePosts(category);
    });
  }, []);

  return (
    <>
      <PageHeader heading='All Categories' />
      <div className={styles.allCategoryContainer}>
        <div>
          {loading ? (
            <Loader
              className={styles.loader}
              type='TailSpin'
              color='#0F0F0F'
              height={100}
              width={100}
            />
          ) : (
            <div className={styles.postContainer}>
              {categoryWiseArticles.length > 0 ? (
                categoryWiseArticles.map((el, id) => {
                  return (
                    <div key={id}>
                      {/* category heading */}
                      <div className={styles.postHeading}>
                        <p>
                          {el.category === "Sports"
                            ? "Extra-curricular"
                            : el.category}
                        </p>

                        {/* Link to all posts from the category */}
                        <Link href={"/category/" + el.category}>View all</Link>
                      </div>

                      {/* if n>1 > use map */}
                      <SmallWidthPreview
                        slug={el.article.slug}
                        title={el.article.heading}
                        body={el.article.caption.slice(0, 150) + "..."}
                        type={el.article.categories}
                        author={el.article.author}
                        // remove sample image in production
                        image={el.article.images}
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
