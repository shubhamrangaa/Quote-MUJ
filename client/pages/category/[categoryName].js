import React from "react";
import { useRouter } from "next/router";
import styles from "@styles/MonthlyNewsletter.module.scss";

// components
import PageHeader from "@components/PageHeader";
import HeadlinerMain from "@components/HeadlinerMain";
import HeadlinerAside from "@components/HeadlinerAside";
import FullWidthPreview from "@components/FullWidthPreview";
import TrendingCarousel from "@components/TrendingCarousel";

export async function getServerSideProps({ params }) {
	let { categoryName } = params;
	categoryName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

	let res = await fetch(`https://quote-muj.herokuapp.com/api/blogs/categories/${categoryName}`);
	if (categoryName === "Upcoming-events") {
		res = await fetch(`https://quote-muj.herokuapp.com/api/blogs/categories/Upcoming`);
	}
	const news = await res.json();

	let sortedNews = news
		.sort(function (a, b) {
			let c = new Date(a.date_created);
			let d = new Date(b.date_created);
			return c - d;
		})
		.reverse();

	let sortedByLikesNews = news.sort((a, b) => {
		return a.likes - b.likes;
	});
	return { props: { sortedNews, sortedByLikesNews } };
}

const Category = ({ sortedNews, sortedByLikesNews }) => {
	const { query } = useRouter();
	let { categoryName } = query;
	categoryName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
	sortedNews = sortedNews.map((item) => {
		try {
			return {
				...item,
				images: item.images ? JSON.parse(item.images)[0] : null,
			};
		} catch {
			return {
				...item,
				images: item.images,
			};
		}
	});
	const headlinerData = sortedNews.slice(0, 30);
	const headlinerAsideData = sortedNews.slice(3, 4);
	return (
		<>
			{Object.keys(sortedNews).length ? (
				<div>
					{/* biggest off in history */}
					<PageHeader heading={categoryName === "Accreditation" ? "Ranking & \n Accreditation" : categoryName} />
					<section>
						{/* todo: style heading */}
						{/* <h2>Headliner</h2> */}
						<div className={styles.headlinerContainer}>
							{headlinerData.map((data, index) => {
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
							{/* <div className={styles.headlinerAsideContainer}>
								
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
							</div> */}
						</div>
					</section>
					<TrendingCarousel news={sortedByLikesNews} />
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
					}}>
					No Articles
				</div>
			)}
		</>
	);
};

export default Category;
