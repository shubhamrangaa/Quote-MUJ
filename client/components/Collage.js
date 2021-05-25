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
      <div id={styles.img4}>
        <Image src="/assets/image 4.png" alt="img4" width={163} height={246} />
      </div>
      <div id={styles.img5}>
        <Image
          src="/assets/UfgeNK-KCuU.png"
          alt="img5"
          width={135}
          height={196}
        />
      </div>
      <div id={styles.img6}>
        <Image
          src="/assets/Rectangle.png"
          alt="img6"
          width={236}
          height={141}
        />
      </div>
    </div>
  );
};
export default Collage;
