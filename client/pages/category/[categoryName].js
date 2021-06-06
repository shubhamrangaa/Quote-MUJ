import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/MonthlyNewsletter.module.scss";
import TrendingCarousel from "../../components/TrendingCarousel";

const Category = () => {
	const router = useRouter();
	const category = router.query.categoryName;
	return (
		<>
			<section className={styles.top}>
				<div className={styles.headingcontainer}>
					<h1 className={styles.heading}>{category}</h1>
				</div>
				<div className={styles.rect}>
					<div className={styles.rect__one}></div>
					<div className={styles.rect__two}></div>
					<div className={styles.rect__three}></div>
					<div className={styles.rect__four}></div>
				</div>
			</section>
			<TrendingCarousel />
		</>
	);
};

export default Category;
