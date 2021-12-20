import React, { useEffect, useLayoutEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@styles/MonthlyNewsletter.module.scss";
import { sectionHeading, decorated } from "@styles/Heading.module.scss";
// components
import HeadlinerAside from "@components/HeadlinerAside";
import FullWidthPreview from "@components/FullWidthPreview";

export async function getServerSideProps({ params }) {
	const { month } = params;
	const res = await fetch(`https://quote-muj.herokuapp.com/api/blogs/monthly/${month}`);
	let news = await res.json();
	news = news.sort((a, b) => {
    return new Date(b.date_created) - new Date(a.date_created);
	});

	return { props: { news } };
}

const Newsletter = ({ news }) => {
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
									<FullWidthPreview slug={data.slug} heading={data.heading} body={data.caption} image={image} type={data.type} />
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
					}}>
					No Articles
				</div>
			)}
		</>
	);
};

export default Newsletter;
