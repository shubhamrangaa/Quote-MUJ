import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-regular-svg-icons";
import styles from "../styles/TrendingCarousel.module.scss";

const data = [
	{
		title: "Webinar on Trends in food Blogs",
		image: "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
		body: "Speaker of the session started with the new trends in food blogging the new trends in food blogging the new trends in food blogging",
		author: "random user",
	},
	{
		title: "Webinar on Trends in food Blogs",
		image: "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60",
		body: "Speaker of the session started with the new trends in food blogging the new trends in food blogging the new trends in food blogging",
		author: "random user",
	},
	{
		title: "Webinar on Trends in food Blogs",
		image: "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
		body: "Speaker of the session started with the new trends in food blogging the new trends in food blogging the new trends in food blogging",
		author: "random user",
	},
	{
		title: "Webinar on Trends in food Blogs",
		image: "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
		body: "Speaker of the session started with the new trends in food blogging the new trends in food blogging the new trends in food blogging",
		author: "random user",
	},
];

const TrendingCarousel = () => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 2,
			slidesToSlide: 1,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
			slidesToSlide: 1,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1,
		},
	};

	return (
		<div className={styles.community}>
			<div className={styles.nav}>
				<div className={styles.title}>
					<FontAwesomeIcon icon={faArrowAltCircleUp} className={styles.faIcon} />
					TRENDING
				</div>
			</div>
			<div className={styles.container}>
				<Carousel responsive={responsive} showDots={true} removeArrowOnDeviceType={["tablet", "mobile"]}>
					{data.map((item, i) => (
						<div style={{ marginLeft: 20, marginRight: 20, marginBottom: 50 }}>
							<div className={styles.indices}>
								{parseInt(i) < 9 ? "0" : null}
								{i + 1}-
							</div>
							<div className={styles.content}>
								<img className={styles.images} src={item.image} draggable={false} />
								<div>
									<div className={styles.heading}>{item.title}</div>
									<div className={styles.body}>{item.body}</div>
									<div className={styles.author}>by {item.author}</div>
								</div>
							</div>
						</div>
					))}
				</Carousel>
			</div>
		</div>
	);
};

export default TrendingCarousel;
