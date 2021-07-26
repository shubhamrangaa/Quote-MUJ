import React from "react";
import styles from "@styles/LeadershipMessage.module.scss";
import { sectionHeading, decorated } from "@styles/Heading.module.scss";

const LeadershipMessage = () => {
	return (
		<div className={styles.container}>
			<h3 className={decorated + " " + sectionHeading}>
				<span>Leadership Message</span>
			</h3>
			<div className={styles.tray}>
				<div className={styles.secondary}>President's Message</div>
				<div className={styles.secondary}>Pro President's Message</div>
				<div className={styles.secondary}>Registrar's Message</div>
			</div>
		</div>
	);
};

export default LeadershipMessage;
