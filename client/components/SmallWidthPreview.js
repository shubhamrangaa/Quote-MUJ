import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import styles from "@styles/TrendingCarousel.module.scss";

const SmallWidthPreview = (props) => {
	return (
		<div style={{ marginLeft: 20, marginRight: 20, marginBottom: 50 }}>
			{props.index !== undefined ? (
				<div className={styles.indices}>
					{parseInt(props.index) < 9 ? "0" : null}
					{props.index + 1}-
				</div>
			) : null}

			<Link href={`/blogs/${props.slug}`}>
				<div className={styles.content}>
					<img
						className={styles.images}
						src={props.image ? props.image : "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"}
						draggable={false}
					/>
					<div>
						<h3 className={styles.heading}>{props.title}</h3>
						<div className={styles.body}>{props.body}</div>
						<div className={styles.author}>By {props.author}</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default SmallWidthPreview;

SmallWidthPreview.prototype = {
	image: PropTypes.string,
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
};
