import Collage from "./Collage";
import styles from "@styles/Hero.module.scss";
import Link from "next/link";

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
      <div className={styles.main}>
        <h1 id={styles.title}>We believe in the power of stories</h1>
        <p id={styles.intro}>
          Welcome to the Official Newsletter website of Manipal University
          Jaipur. Find everything latest in our {currentMonth} newsletter!
        </p>
        <Link href={url}>
          <a id={styles.explore}>Explore {currentMonth} Newsletter</a>
        </Link>
      </div>

      <Collage />
    </div>
  );
};
export default Hero;
