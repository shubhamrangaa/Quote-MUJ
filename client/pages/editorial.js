import React from "react";
import ReactHtmlParser from "react-html-parser";

import styles from "../styles/About.module.scss";

import { editorialNewsletter } from "../constants/Editorial";

const editorial = () => {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.heading}>Editorial Newsletter</h2>
			<div style={{ fontSize: "1.2rem", margin: "1rem", marginBottom: "5rem" }}>
				Dear Readers,
				<br />
				<br />
				Greetings!
				<br />
				<br />
				It gives me immense pleasure to pen down for the inaugural issue of the first e- Newsletter of Manipal University Jaipur, <b>MUJ Bioscope</b>,
				during the auspicious decennial celebration of the University.
				<br />
				<br />
				Manipal University Jaipur has completed its ten golden years of establishment. During these ten glorious years, the University has carved a
				niche for itself with several golden feathers in its cap. MUJ has traversed ten golden years while progressing with focused vision and mission
				through tireless efforts and firm beliefs.
				<br />
				<br />
				MUJ has come a long way in the past so many years and these ten years have been quite enriching and rewarding. We are thankful to the
				indomitable spirit of the pioneer pillars of MUJ, who played a vital role in taking this University to newer heights.
				<br />
				<br />
				The first issue of the e-newsletter has a lot of interesting campus news, happenings and events which are keeping our campus, always abuzz
				with activities. It is the efficiency of our faculty members and staff that so many activities of different flavours keep on happening in the
				campus, making the campus full of vibrant colours. The newsletter will be published monthly keeping all of us apprised about the major events
				and activities of the University.
				<br />
				<br />
				I hope you enjoy the newsletter and will also send us your opinions and suggestions to improve it further.
				<br />
				<br />
				Happy Reading!!
				<br />
				<br />
				Best Regards,
				<br />
				<br />
				Dr Richa Arora
				<br />
				<br />
				Chairperson, Newsletter MUJ
			</div>
		</div>
	);
};

export default editorial;
