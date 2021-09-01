import Image from "next/image";
import styles from "@styles/Collage.module.scss";

export const Collage = () => {
  return (
    <div className={styles.collage}>
      <div id={styles.img1}>
        <img src="/assets/collage/1.jpg" height={400} alt="img1"></img>
      </div>
      <div id={styles.img2}>
        <img src="/assets/collage/2.jpg" height={250} alt="img2"></img>
      </div>
      <div id={styles.img3}>
        <img src="/assets/collage/3.jpg" height={250} alt="img3"></img>
      </div>
      <div id={styles.img4}>
        <img src="/assets/collage/4.jpg" height={250} alt="img4"></img>
      </div>
      {/* <div id={styles.img5}>
        <img src="/assets/collage/5.jpg" height={200} alt="img5"></img>
      </div> */}
      <div id={styles.img6}>
        <img src="/assets/collage/6.jpg" height={250} alt="img6"></img>
      </div>
    </div>
  );
};
export default Collage;