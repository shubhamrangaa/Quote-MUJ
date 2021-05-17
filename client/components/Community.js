import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CommunityPost from "./CommunityPost";
import styles from "../styles/Community.module.scss";

const Community = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className={styles.community}>
      <div className={styles.nav}>
        <p id={styles.title}>Community</p>
        <p className={styles.line}></p>
        <div className={styles.categories}>
          <button className={styles.button}>Latest</button>
          <button className={styles.button}>News</button>
          <button className={styles.button}>Sports</button>
          <button className={styles.button}>Events</button>
          <button className={styles.button}>Research</button>
        </div>
      </div>
      <div className={styles.container}>
        <Carousel responsive={responsive} showDots={true}>
          <CommunityPost />
          <CommunityPost />
          <CommunityPost />
          <CommunityPost />
          <CommunityPost />
        </Carousel>
      </div>
    </div>
  );
};

export default Community;
