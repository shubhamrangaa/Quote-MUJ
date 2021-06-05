import Collage from "./Collage";
import styles from "../styles/Hero.module.scss";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.main}>
        <p id={styles.title}>We believe in the power of stories</p>
        <p id={styles.intro}>
          Welcome to the Official Newsletter website of Manipal University
          Jaipur. Find everything latest in our May newsletter!
        </p>
        <Link href="/monthly/2021/may" id={styles.explore}>
          Explore May Newsletter
        </Link>
      </div>

      <Collage />
    </div>
  );
};
export default Hero;
