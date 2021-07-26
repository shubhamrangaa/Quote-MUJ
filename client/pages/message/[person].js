import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import ReactHtmlParser from "react-html-parser";

import { messages } from "../../constants/LeadershipMessage";

import styles from "@styles/StoryPage.module.scss";

function Message() {
	const router = useRouter();
	const { person } = router.query;
	let message = null;
	if (router.isReady) {
		message = messages[person];

		if (!message) router.replace("/");
	}

	return message ? (
		<div>
			<div className={styles.heading}>
				<h2>{message.heading}</h2>
				<ul>
					<div className={styles.metaData}>
						<li>By {message.author}</li>
					</div>
				</ul>
			</div>

			<div className={styles.storypic}>
				{message.image && <Image src={message.image} alt='picture' objectFit='contain' width='500px' height={500}></Image>}
			</div>

			<div className={styles.text}>{message.data && <>{ReactHtmlParser(message.data.replace(" ", "&nbsp;"))}</>}</div>
		</div>
	) : (
		<></>
	);
}

export default Message;
