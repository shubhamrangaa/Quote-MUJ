import React from 'react';
import { useRouter } from "next/router";
import styles from "../../../styles/MonthlyNewsletter.module.scss";

const Newsletter = () => {
	const router = useRouter()
	const month = router.query.month;
	const year = router.query.year;
	return (
		<>
			<section className={styles.top}>
				<div className={styles.headingcontainer}>
					<h1 className={styles.heading}>Monthly<br/>Newsletter.</h1>
					<h1 className={styles.monthyear}>
						{month} {year}
					</h1>
				</div>
				<div className={styles.rect}>
					<div className={styles.rect__one}></div>
					<div className={styles.rect__two}></div>
					<div className={styles.rect__three}></div>
					<div className={styles.rect__four}></div>
				</div>
			</section>
		</>
	)
}

export default Newsletter
