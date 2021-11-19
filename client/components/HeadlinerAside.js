import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

// styles
import styles from "@styles/Headliner.module.scss";

// HeadlinerAside acts like a card, use map()
const HeadlinerAside = (props) => {
	const { headline, image, description, author, slug } = props;
	return (
		<div className={styles.headlinerAsideContainer}>
			<div className={styles.imageContainer}>
				<img src={image ? image : "https://res.cloudinary.com/quote-muj/image/upload/q_40/v1637300211/manipal-1595339469_h298bf.jpg"} />
			</div>
			<div>
				<Link href={`/blogs/${slug}`}>
					<a>{headline}</a>
				</Link>
				<p className={styles.author}>By {author}</p>
				<p className={styles.description}>{description}</p>
			</div>
		</div>
	);
};

HeadlinerAside.prototype = {
	headline: PropTypes.string.isRequired,
	imageMetaData: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

export default HeadlinerAside;
