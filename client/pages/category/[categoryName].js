import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/MonthlyNewsletter.module.scss";

// components
import PageHeader from "../../components/PageHeader";
import TrendingCarousel from "../../components/TrendingCarousel";

const Category = () => {
  const router = useRouter();
  const category = router.query.categoryName;
  return (
    <>
      <PageHeader heading={category} />
      <TrendingCarousel />
    </>
  );
};

export default Category;
