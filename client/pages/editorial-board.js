import React from "react";
import styles from "../styles/About.module.scss";

const aboutData = [
  {
    name: "Dr. Richa Arora",
    title: "Faculty Coordinator",
    contact: "mailto:example@example.com",
    image: "assets/Editorial/RichaArora.png",
  },
  {
    name: "Dr. Mani Sachdev",
    title: "Faculty Coordinator",
    contact: "mailto:example@example.com",
    image: "assets/Editorial/MahiSachdev.png",
  },
  {
    name: "Dr. Nitu Bhatnagar",
    title: "Faculty Coordinator",
    contact: "mailto:example@example.com",
    image: "assets/Editorial/NituBhatnagar.png",
  },
  {
    name: "Dr. Lucky Vijayvargiya",
    title: "Faculty Coordinator",
    contact: "mailto:example@example.com",
    image: "assets/Editorial/DLucky.png",
  },
  {
    name: "Dr. Subhash Kumar",
    title: "Faculty Coordinator",
    contact: "mailto:example@example.com",
    image: "assets/Editorial/SubhashHanda.png",
  },
  {
    name: "Ms. Shweta Sharma",
    title: "Faculty Coordinator",
    contact: "mailto:example@example.com",
    image: "assets/Editorial/ShwetaSharma.png",
  },
  {
    name: "Ar. Sonali Jain",
    title: "Faculty Coordinator",
    contact: "mailto:example@example.com",
    image: "assets/Editorial/SonaliJain.png",
  },
  {
    name: "Ar. Deepak Singh",
    title: "Faculty Coordinator",
    contact: "mailto:example@example.com",
    image: "assets/Editorial/DeepakSingh.png",
  },
  {
    name: "Mr. Apoorv",
    title: "Faculty Coordinator",
    contact: "mailto:example@example.com",
    image: "assets/Editorial/Appoorv.png",
  },
  {
    name: "Mr. Ankit Mundra",
    title: "Faculty Coordinator",
    contact: "mailto:example@example.com",
    image: "assets/Editorial/AnkitMundra.png",
  },
];

const getRandomImage = () => {
  return `https://source.unsplash.com/random?sig=${Math.random()
    .toString()
    .replace(/\./g, "")
    .slice(1)}`;
};

const studentData = [
  {
    name: "Shubham Ranga",
    title: "3rd year BTech (CSE)",
    contact: "mailto:shubham.199301215@muj.manipal.edu",
    image:
      "https://res.cloudinary.com/shubhamrangaa/image/upload/v1615662977/ProfilePicture-min_eve2rh.jpg",
  },
  {
    name: "Manavendra Sen",
    title: "3rd year BTech (IT)",
    contact: "mailto:manavendra4288@gmail.com",
    image:
      "https://res.cloudinary.com/quote-muj/image/upload/v1626714863/IMG_20210309_193348-01_xberio.jpg",
  },
  {
    name: "Boidushya Bhattacharya",
    title: "2nd year BTech (IT)",
    contact: "mailto:boidushyabhattacharya@gmail.com",
    image:
      "https://res.cloudinary.com/quote-muj/image/upload/v1626714954/BoidushyaBhattacharyay_rbs12t.jpg",
  },
  {
    name: "Vaibhav Garg",
    title: "3rd year BTech (IT)",
    contact: "mailto:vaibhav.199302174@muj.manipal.edu",
    image:
      "https://res.cloudinary.com/quote-muj/image/upload/v1626756922/download_r8rdbn.jpg",
  },
  {
    name: "Kevin Peter",
    title: "4th year BTech (CSE)",
    contact: "mailto:kevzpeterk@gmail.com",
    image:
      "https://res.cloudinary.com/quote-muj/image/upload/v1626718876/Myself_tjvvc8.jpg",
  },
  {
    name: "A Mahi Pritam Reddy",
    title: "4th year BTech (CSE)",
    contact: "mailto:anapalli.189301104@muj.manipal.edu",
    image:
      "https://res.cloudinary.com/quote-muj/image/upload/v1626272359/pritam_baivtv.jpg",
  },
  {
    name: "Krathish Prakash",
    title: "3rd year BTech (IT)",
    contact: "https://www.linkedin.com/in/krathishprakash/",
    image:
      "https://res.cloudinary.com/quote-muj/image/upload/v1626758935/1570116562486_wzviwi.jpg",
  },
];

const about = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>Editorial Board</h2>
      <div className={styles.row}>
        {aboutData.map((item) => {
          return (
            <div className={styles.column}>
              <div className={styles.card}>
                <img src={item.image} alt='Image' className={styles.image} />
                <div className={styles.container}>
                  <h5 className={styles.name}>{item.name}</h5>
                  {/* <br />
                  <br /> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h2 className={styles.heading}>Student Developers</h2>
      <div className={styles.row}>
        {studentData.map((item) => {
          return (
            <div className={styles.column}>
              <div className={styles.card}>
                <img src={item.image} alt='Image' className={styles.image} />
                <div className={styles.container}>
                  <h5 className={styles.name}>{item.name}</h5>
                  <p className={styles.title}>{item.title}</p>
                  {/* <p><button onClick={() => {
										document.location.href = `mailto:${item.contact})`
									}} className={styles.button}>Contact</button></p> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default about;
