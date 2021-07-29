import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-regular-svg-icons";
import styles from "../styles/TrendingCarousel.module.scss";

import SmallWidthPreview from "./SmallWidthPreview";

const TrendingCarousel = ({ news: data }) => {
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
				{/* <FontAwesomeIcon icon={faArrowAltCircleUp} className={styles.faIcon} style={{f}} size={16} fontSize={16} /> */}
				<div className={styles.title}>
					TRENDING
				</div>
			</div>
			<div className={styles.container}>
				<Carousel responsive={responsive} showDots={true} removeArrowOnDeviceType={["tablet", "mobile"]}>
					{data.map((item, i) => {
						let image = ""
						try {
							image = JSON.parse(item.images)[0];
						} catch (e) {
							image = item.images
						}
						return (
							<SmallWidthPreview slug={item.slug} title={item.heading} image={image} body={item.caption.slice(0, 150) + "..."} author={item.author} index={i} key={i} />
						)
					})}
				</Carousel>
			</div>
		</div>
	);
};

export default TrendingCarousel;
