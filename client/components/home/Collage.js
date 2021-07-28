import Image from "next/image";
import styles from "@styles/Collage.module.scss";

export const Collage = () => {
  return (
    <div className={styles.collage}>
      <div id={styles.img1}>
        <img src="/assets/Mn-3P_jMAbU.png" height={145} alt="img1"></img>
      </div>
      <div id={styles.img2}>
        <img src="/assets/Bz3aP1lagp4.png" alt="img2"></img>
      </div>
      <div id={styles.img3}>
        <img src="/assets/image 3.png" width={150} alt="img3"></img>
      </div>
      <div id={styles.img4}>
        <img src="/assets/image 4.png" height={200} alt="img4"></img>
      </div>
      <div id={styles.img5}>
        <img src="/assets/image 4.jpg" width={175} alt="img5"></img>
      </div>
      <div id={styles.img6}>
        <img id={styles.img6} src="/assets/Rectangle.png" height={150} alt="img6"></img>
      </div>
    </div>
  );
};
export default Collage;
