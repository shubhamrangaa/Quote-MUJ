import React from "react";
import { useRouter } from "next/router";
import styles from "../../../styles/MonthlyNewsletter.module.scss";

// components
import HeadlinerMain from "../../../components/HeadlinerMain";
import HeadlinerAside from "../../../components/HeadlinerAside";
import OtherNews from "../../../components/OtherNews";

// fetch top 5 posts and pass them to components

const headlinerData = {
	headline: "MUJ boasts 100% placement year",
	imageMetaData: {
		src: "https://picsum.photos/400/500",
		alt: "Image 1",
		width: 500,
		height: 400,
	},
	content: `Consequat exercitation duis officia laborum amet deserunt consectetur. Proident dolor do elit magna et nisi elit officia consectetur laborum esse. Mollit irure cillum ea laborum laboris proident velit qui qui quis. Exercitation quis dolor ad mollit irure adipisicing.
		
		Ex consequat quis enim exercitation laborum cupidatat id amet consectetur labore nulla veniam et ad. Laboris voluptate duis exercitation non culpa aliqua reprehenderit nisi minim dolore mollit pariatur labore laboris. Sunt velit exercitation id nostrud laborum dolore enim est. Quis aliqua deserunt laboris ut fugiat. Ex enim nisi aute deserunt magna ex. Ut quis dolor incididunt quis velit labore incididunt ad reprehenderit minim pariatur nulla tempor.
  
		Anim est do nostrud proident esse aliquip elit in sint. Excepteur do dolor mollit velit eiusmod ut nulla ea. Commodo aliqua pariatur non in nulla voluptate magna magna eiusmod veniam amet excepteur nulla officia. Fugiat pariatur pariatur ut ea ipsum non laborum do sit ut dolore est ex. Lorem eu veniam ex deserunt occaecat commodo anim minim ex cupidatat anim cillum.
    
    Ex consequat quis enim exercitation laborum cupidatat id amet consectetur labore nulla veniam et ad. Laboris voluptate duis exercitation non culpa aliqua reprehenderit nisi minim dolore mollit pariatur labore laboris. Sunt velit exercitation id nostrud laborum dolore enim est. Quis aliqua deserunt laboris ut fugiat. Ex enim nisi aute deserunt magna ex. Ut quis dolor incididunt quis velit labore incididunt ad reprehenderit minim pariatur nulla tempor.
  
		Anim est do nostrud proident esse aliquip elit in sint. Excepteur do dolor mollit velit eiusmod ut nulla ea. Commodo aliqua pariatur non in nulla voluptate magna magna eiusmod veniam amet excepteur nulla officia. Fugiat pariatur pariatur ut ea ipsum non laborum do sit ut dolore est ex. Lorem eu veniam ex deserunt occaecat commodo anim minim ex cupidatat anim cillum.
		`,
	tags: ["Research", "Career"],
};

const headlinerAsideData = [
	{
		headline: "Organized expert lecture",
		description: "An online Expert Lecture was organized on Life and Literature through MS Teams.",
		author: "random user",
		imageMetaData: {
			src: "https://picsum.photos/200/300",
			alt: "Image 1",
			width: 300,
			height: 200,
		},
	},
	{
		headline: "Healthy lifestyle for Healthy heart.",
		description: "An online Expert Lecture was organized on Life and Literature through MS Teams.",
		author: "random user",
		imageMetaData: {
			src: "https://picsum.photos/200/300",
			alt: "Image 1",
			width: 300,
			height: 200,
		},
	},
	{
		headline: "Enhancing Research Skills and Integrity.",
		description: "An online Expert Lecture was organized on Life and Literature through MS Teams.",
		author: "random user",
		imageMetaData: {
			src: "https://picsum.photos/200/300",
			alt: "Image 1",
			width: 300,
			height: 200,
		},
	},
	{
		headline: "Healthy lifestyle for Healthy heart.",
		description: "An online Expert Lecture was organized on Life and Literature through MS Teams.",
		author: "random user",
		imageMetaData: {
			src: "https://picsum.photos/200/300",
			alt: "Image 1",
			width: 300,
			height: 200,
		},
	},
];

const otherNewsData = [
	{
		heading: "International Virtual Conference on Physical Education and Sports Science.",
		body:
			"Manipal University Jaipur organized the International Virtual Conference on Physical Education and Sports Science (IVCPESS-2021) from 30-31 March 2021.",
		type: "Research",
		image: "https://picsum.photos/300/200",
	},
	{
		heading: "International Virtual Conference on Physical Education and Sports Science.",
		body:
			"Manipal University Jaipur organized the International Virtual Conference on Physical Education and Sports Science (IVCPESS-2021) from 30-31 March 2021.",
		type: "Research",
		image: "https://picsum.photos/300/200",
	},
	{
		heading: "International Virtual Conference on Physical Education and Sports Science.",
		body:
			"Manipal University Jaipur organized the International Virtual Conference on Physical Education and Sports Science (IVCPESS-2021) from 30-31 March 2021.",
		type: "Research",
		image: "https://picsum.photos/300/200",
	},
	{
		heading: "International Virtual Conference on Physical Education and Sports Science.",
		body:
			"Manipal University Jaipur organized the International Virtual Conference on Physical Education and Sports Science (IVCPESS-2021) from 30-31 March 2021.",
		type: "Research",
		image: "https://picsum.photos/300/200",
	},
	{
		heading: "International Virtual Conference on Physical Education and Sports Science.",
		body:
			"Manipal University Jaipur organized the International Virtual Conference on Physical Education and Sports Science (IVCPESS-2021) from 30-31 March 2021.",
		type: "Research",
		image: "https://picsum.photos/300/200",
	},
	{
		heading: "International Virtual Conference on Physical Education and Sports Science.",
		body:
			"Manipal University Jaipur organized the International Virtual Conference on Physical Education and Sports Science (IVCPESS-2021) from 30-31 March 2021.",
		type: "Research",
		image: "https://picsum.photos/300/200",
	},
];

const Newsletter = () => {
	const router = useRouter();
	const month = router.query.month;
	const year = router.query.year;
	return (
		<>
			<section className={styles.top}>
				<div className={styles.headingcontainer}>
					<h1 className={styles.heading}>
						Monthly
						<br />
						Newsletter.
					</h1>
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

			{/* Headliner body */}
			<section>
				{/* todo: style heading */}
				{/* <h2>Headliner</h2> */}
				<div className={styles.headlinerContainer}>
					<HeadlinerMain
						headline={headlinerData.headline}
						content={headlinerData.content}
						imageMetaData={headlinerData.imageMetaData}
						tags={headlinerData.tags}
					/>
					<div className={styles.headlinerAsideContainer}>
						{/* map headlineAside */}
						{headlinerAsideData.map((data) => {
							return (
								<HeadlinerAside headline={data.headline} description={data.description} imageMetaData={data.imageMetaData} author={data.author} />
							);
						})}
					</div>
				</div>
			</section>

			{/* Other News Section */}
			<section>
				{/* todo: style heading */}
				{otherNewsData.map((data, i) => (
					<div key={i.toString()}>
						<OtherNews heading={data.heading} body={data.body} image={data.image} type={data.type} />
					</div>
				))}
			</section>
		</>
	);
};

export default Newsletter;
