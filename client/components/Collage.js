import Image from "next/image";
import styles from "../styles/Collage.module.scss";

export const Collage = () => {
  return (
    <div className={styles.collage}>
      <div id={styles.img1}>
        <Image
          src="/assets/Mn-3P_jMAbU.png"
          alt="img1"
          width={153}
          height={190}
        />
      </div>
      <div id={styles.img2}>
        <Image
          src="/assets/Bz3aP1lagp4.png"
          alt="img2"
          width={219}
          height={145}
        />
      </div>
      <div id={styles.img3}>
        <Image src="/assets/image 3.png" alt="img3" width={128} height={160} />
      </div>
      <div>
        <img id={styles.img4} src="/assets/image 4.png" alt="img4"></img>
      </div>
      <div id={styles.img5}>
        <img id={styles.img5} src="/assets/UfgeNK-KCuU.png" alt="img5"></img>
      </div>
      <div id={styles.img6}>
        <img id={styles.img6} src="/assets/Rectangle.png" alt="img6"></img>
      </div>
    </div>
  );
};
export default Collage;
