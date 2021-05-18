import React from 'react'
import styles from "../styles/Create.module.scss";
const create = () => {
	const isLoggedIn = true;
	return (
		<div className={styles.container}>
			{isLoggedIn?(
				<div className={styles.main}>
					epic
				</div>
			):(
				<div>
					Not Logged In
				</div>
			)}
		</div>
	)
}

export default create
