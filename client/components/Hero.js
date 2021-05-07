import Collage from "./Collage";
import styles from "../styles/Hero.module.css";

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div>
        <p id={styles.title}>We believe in the power of stories</p>
        <p id={styles.intro}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          accumsan sollicitudin lectus, non tempor mauris sodales sed
        </p>
        <button id={styles.explore}>Explore</button>
      </div>
    </div>
  );
};
export default Hero;
