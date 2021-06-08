import React from "react";
import styles from "../styles/OtherNews.module.scss";

const OtherNews = (props) => {
	return (
		<div className={styles.container}>
			<div className={styles.textContainer}>
				<div className={styles.textHeading}>{props.heading}</div>
				<div className={styles.textBody}>{props.body}</div>
				<div className={styles.textType}>{props.type}</div>
			</div>
			<div className={styles.imageContainer}>
				<img src={props.image} width={300} height={200} />
			</div>
		</div>
	);
};

export default OtherNews;
