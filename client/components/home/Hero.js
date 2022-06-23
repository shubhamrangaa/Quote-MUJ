import Collage from "./Collage";
import CollageCarousel from "./CollageCarousel";
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
    <div className={styles.hero}>
      <div>
        <div className={stars}></div>
        <div className={stars2}></div>
        <div className={stars3}></div>
      </div>
      <div className={styles.heroContainer}>
        <div className={styles.mainContainer}>
          <div className={styles.main}>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                marginBottom: "1rem",
              }}
            >
              <div className={styles.logoImage}>
                <Image
                  className={styles.brandImage}
                  src='/assets/Bioscope.png'
                  alt='logo'
                  width={190}
                  height={190}
                ></Image>
              </div>
              <div className={styles.logoImage}>
                <Image
                  className={styles.brandImage}
                  src='/assets/Quote.png'
                  alt='logo'
                  width={150}
                  height={150}
                  style={{ border: "2px solid white inset " }}
                ></Image>r
              </div>
            </div>
            <p id={styles.intro}>Welcome to the official E-Newsletter of</p>
            <h3 className={styles.heading}>Manipal University Jaipur</h3>
            <Link href={`/monthly/2022/April`}>
              <a id={styles.explore}>Explore May Issue</a>
            </Link>
          </div>
        </div>

        <CollageCarousel />
      </div>
    </div>
  );
};
export default Hero;
