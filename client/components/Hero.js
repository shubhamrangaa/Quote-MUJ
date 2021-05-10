import Collage from "./Collage";
import styles from "../styles/Hero.module.scss";

export const Hero = () => {
	return (
		<div className={styles.hero}>
				<p id={styles.title}>We believe in the power of stories</p>
				<p id={styles.intro}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
					accumsan sollicitudin lectus, non tempor mauris sodales sed
				</p>
				<button id={styles.explore}>Explore</button>
		</div>
	);
};
export default Hero;
