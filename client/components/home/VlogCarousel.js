import styles from "@styles/VlogCarousel.module.scss";
import { sectionHeading } from "@styles/Heading.module.scss";
import ReactPlayer from "react-player/youtube";
import Carousel from "react-material-ui-carousel";

const VlogCarousel = () => {
  var videos = [
    "https://youtu.be/ypxNQTEqNZQ",
    "https://youtube.com/watch?v=vhnhUq8E-ZA",
    "https://youtu.be/gyYgmdx7hDs",
    "https://youtu.be/KqVcZ1tO9JU",
    "https://youtu.be/mZ0PDmokGSA",
    "https://youtube.com/watch?v=oOgpTRs--Do",
    "https://youtube.com/watch?v=0Rh8CTlbLng",
    "https://youtu.be/ZDx_sFG_jok",
  ];

  return (
    <div className={styles.carousel}>
      <h3 className={styles.decorated + " " + sectionHeading}>
        <span>Vlogs & Podcast</span>
      </h3>
      {/* <h2 className={sectionHeading}></h2> */}

      <Carousel
        navButtonsAlwaysVisible={true}
        autoPlay={false}
        cycleNavigation={true}
      >
        {videos.map((vid, id) => (
          // <VideoPlayer key={i} vid={vid} />
          <ReactPlayer key={id} className={styles.player} url={vid} />
        ))}
      </Carousel>
    </div>
  );
};

// function VideoPlayer(props) {
//   return <ReactPlayer className={styles.player} url={props.vid.url} />;
// }
export default VlogCarousel;
