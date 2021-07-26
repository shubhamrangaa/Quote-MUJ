import React from "react";
import styles from "@styles/LeadershipMessage.module.scss";
import { sectionHeading, decorated } from "@styles/Heading.module.scss";
import Link from "next/link";

const LeadershipMessage = () => {
	return (
		<div className={styles.container}>
			<h3 className={decorated + " " + sectionHeading}>
				<span>Leadership Message</span>
			</h3>
			<div className={styles.tray}>
				<Link href='/message/president'>
					<div className={styles.secondary}>President's Message</div>
				</Link>
				<Link href='/message/pro_president'>
					<div className={styles.secondary}>Pro President's Message</div>
				</Link>
				<Link href='/message/registrar'>
					<div className={styles.secondary}>Registrar's Message</div>
				</Link>
			</div>
		</div>
	);
};

export default LeadershipMessage;
