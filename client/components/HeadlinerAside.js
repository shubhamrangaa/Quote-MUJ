import React from "react";
import PropTypes from "prop-types";

// styles
import styles from "../styles/Headliner.module.scss";

// HeadlinerAside acts like a card, use map()
const HeadlinerAside = (props) => {
	const { headline, image, description, author } = props;
	return (
		<div className={styles.headlinerAsideContainer}>
			<img src={image ? image : "https://picsum.photos/300/200"} />
			<div>
				<h3>{headline}</h3>
				<p className={styles.description}>{description}</p>
				<p className={styles.author}>By {author}</p>
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
