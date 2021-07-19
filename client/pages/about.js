import React from "react";
import styles from "../styles/About.module.scss";

const aboutData = [
	{
		name:"Ar. Sonali Jain",
		title:"Faculty Coordinator",
		contact:"mailto:example@example.com",
		image:"https://res.cloudinary.com/quote-muj/image/upload/v1626255710/827610ef-619e-4f5b-a454-d6d2140c025c_frlnnx.jpg"
	},
	{
		name: "Dr. Nitu Bhatnagar",
		title: "Faculty Coordinator",
		contact: "mailto:example@example.com",
		image: "https://res.cloudinary.com/quote-muj/image/upload/v1626255709/875125d8-49ab-4dff-b2ab-5c29c999ac3e_fnyunv.jpg"
	},
	{
		name: "Dr. Mani Sachdev",
		title: "Faculty Coordinator",
		contact: "mailto:example@example.com",
		image: "https://res.cloudinary.com/quote-muj/image/upload/v1626255709/697fc7bf-5059-4590-8122-636f92543ef4_vrwdd8.jpg"
	},
	{
		name: "Ms. Shweta Sharma",
		title: "Faculty Coordinator",
		contact: "mailto:example@example.com",
		image: "https://res.cloudinary.com/quote-muj/image/upload/v1626255709/754bf274-dcc7-4dd8-8864-fe995ac612e7_gloqio.jpg"
	},
	{
		name: "Ar. Deepak Singh",
		title: "Faculty Coordinator",
		contact: "mailto:example@example.com",
		image: "https://res.cloudinary.com/quote-muj/image/upload/v1626255708/8e2f246a-2a9d-4f58-aff7-5a6b77eda25d_re19bf.jpg"
	},
	{
		name: "Dr. Lucky Vijayvargiya",
		title: "Faculty Coordinator",
		contact: "mailto:example@example.com",
		image: "https://res.cloudinary.com/quote-muj/image/upload/v1626255708/a9d34e6f-9424-4993-abac-d09d187a12e0_wngoi6.jpg"
	},
	{
		name: "Dr. Richa Arora",
		title: "Faculty Coordinator",
		contact: "mailto:example@example.com",
		image: "https://res.cloudinary.com/quote-muj/image/upload/v1626255709/ef29a5e1-4d8e-4181-bdbc-3fd0f1a5f2e9_syg2gk.jpg"
	},
	{
		name: "Dr. Ankit Mudra",
		title: "Faculty Coordinator",
		contact: "mailto:example@example.com",
		image: "https://res.cloudinary.com/quote-muj/image/upload/v1626259492/Ankit_Mundra_fkkrth.jpg"
	},
	{
		name: "Mr. Apoorv",
		title: "Faculty Coordinator",
		contact: "mailto:example@example.com",
		image: "https://res.cloudinary.com/quote-muj/image/upload/v1626259242/7891124530_profile_pic_kuwbl6.jpg"
	}
]

const getRandomImage = () => {
	return `https://source.unsplash.com/random?sig=${Math.random().toString().replace(/\./g, "").slice(1)}`
}

const studentData = [
	{
		name: "Shubham Ranga",
		title: "3rd year BTech (CSE)",
		contact: "mailto:example@example.com",
		image: getRandomImage()
	},
	{
		name:"Manavendra Sen",
		title: "3rd year BTech (IT)",
		contact: "mailto:manavendra4288@gmail.com",
		image: "https://res.cloudinary.com/quote-muj/image/upload/v1626714863/IMG_20210309_193348-01_xberio.jpg"
	},
	{
		name: "Boidushya Bhattacharya",
		title: "2nd year BTech (IT)",
		contact: "mailto:boidushyabhattacharya@gmail.com",
		image: "https://res.cloudinary.com/quote-muj/image/upload/v1626714954/BoidushyaBhattacharyay_rbs12t.jpg"
	},
	{
		name: "Vaibhav Garg",
		title: "3rd year BTech (IT)",
		contact: "mailto:example@example.com",
		image: getRandomImage()
	},
	{
		name: "Kevin Peter",
		title: "4th year BTech (CSE)",
		contact: "mailto:example@example.com",
		image: getRandomImage()
	},
	{
		name: "A Mahi Pritam Reddy",
		title: "4th year BTech (CSE)",
		contact: "mailto:example@example.com",
		image: getRandomImage()
	},
	{
		name: "Pritam Reddy",
		title: "3rd year BTech (CSE)",
		contact: "mailto:example@example.com",
		image: "https://res.cloudinary.com/quote-muj/image/upload/v1626272359/pritam_baivtv.jpg"
	}
]

const about = () => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.heading}>Faculty Coordinators</h1>
			<div className={styles.row}>
				{aboutData.map(item=>{
					return(
						<div className={styles.column}>
							<div className={styles.card}>
								<img src={item.image} alt="Image" className={styles.image} />
								<div className={styles.container}>
									<h3 className={styles.name}>{item.name}</h3>
									<p className={styles.title}>{item.title}</p>
									<p><button onClick={()=>{
										document.location.href = item.contact
									}} className={styles.button}>Contact</button></p>
								</div>
							</div>
						</div>
					)
				})}
			</div>
			<h1 className={styles.heading}>Student Developers</h1>
			<div className={styles.row}>
				{studentData.map(item => {
					return (
						<div className={styles.column}>
							<div className={styles.card}>
								<img src={item.image} alt="Image" className={styles.image} />
								<div className={styles.container}>
									<h3 className={styles.name}>{item.name}</h3>
									<p className={styles.title}>{item.title}</p>
									<p><button onClick={() => {
										document.location.href = `mailto:${item.contact})`
									}} className={styles.button}>Contact</button></p>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default about
