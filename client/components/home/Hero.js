import Collage from "./Collage";
import styles from "@styles/Hero.module.scss";
import Link from "next/link";
import Image from "next/image";

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
        <Image
          className={styles.brandImage}
          src="/assets/Quote.png"
          alt="logo"
          width={120}
          height={120}
        ></Image>
        <h1 id={styles.title}>MUJ Bioscope</h1>
        <p id={styles.intro}>
          Welcome to the Official Newsletter website of Manipal University
          Jaipur. Find everything latest in our {currentMonth} newsletter!
        </p>
        <Link href={`/monthly/${currentYear}/July`}>
          <a id={styles.explore}>Explore Inaugural Issue</a>
        </Link>
      </div>

      <Collage />
    </div>
  );
};
export default Hero;