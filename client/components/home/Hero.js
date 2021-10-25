import Collage from "./Collage";
import styles from "@styles/Hero.module.scss";
import Link from "next/link";
import Image from "next/image";
import { stars, stars2, stars3 } from "../../styles/StarBackground.module.scss";

export const Hero = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  const currentMonth = months[date.getMonth()];
  const currentYear = date.getFullYear();
  const url = `/monthly/${currentYear}/${currentMonth}`;

  return (
    <div className={styles.hero} style={{ paddingBottom: "rem" }}>
      <div>
        <div className={stars}></div>
        <div className={stars2}></div>
        <div className={stars3}></div>
      </div>

      <div className={styles.main}>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginBottom: "1rem",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "50%",
              width: "190px",
              height: "190px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0.5rem",
              overflow: "hidden",
            }}
          >
            <Image
              className={styles.brandImage}
              src='/assets/Bioscope.png'
              alt='logo'
              width={190}
              height={190}
            ></Image>
          </div>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "50%",
              width: "190px",
              height: "190px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0.5rem",
              overflow: "hidden",
            }}
          >
            <Image
              className={styles.brandImage}
              src='/assets/Quote.png'
              alt='logo'
              width={150}
              height={150}
              style={{ border: "2px solid white inset " }}
            ></Image>
          </div>
        </div>
        <p id={styles.intro}>Welcome to the official E-Newsletter of</p>
        <h3 className={styles.heading}>Manipal University Jaipur</h3>
        <Link href={`/monthly/${currentYear}/July`}>
          <a id={styles.explore}>Explore Inaugural Issue</a>
        </Link>
      </div>

      <Collage />
    </div>
  );
};
export default Hero;
