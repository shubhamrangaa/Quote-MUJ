import React from "react";
import styles from "../styles/FullWidthPreview.module.scss";

const FullWidthPreview = (props) => {
	return (
		<div className={styles.container}>
			<div className={styles.textContainer}>
				<div className={styles.textHeading}>{props.heading}</div>
				<div className={styles.textBody}>{props.body}</div>
				<div className={styles.textType}>{props.type}</div>
			</div>
			<div className={styles.imageContainer}>
				<img src={props} />
			</div>
		</div>
	);
};

export default FullWidthPreview;
