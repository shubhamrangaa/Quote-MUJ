import styles from "@styles/VlogCarousel.module.scss";
import { sectionHeading } from "@styles/Heading.module.scss";
import ReactPlayer from "react-player/youtube";
import Carousel from "react-material-ui-carousel";

const VlogCarousel = () => {
  var videos = [
    {
      url: "https://youtube.com/watch?v=vhnhUq8E-ZA",
    },
    {
      url: "https://youtu.be/hTXLTOeogz8",
    },
    {
      url: "https://youtube.com/watch?v=oOgpTRs--Do",
    },
    {
      url: "https://youtube.com/watch?v=0Rh8CTlbLng",
    },
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
          <ReactPlayer key={id} className={styles.player} url={vid.url} />
        ))}
      </Carousel>
    </div>
  );
};

// function VideoPlayer(props) {
//   return <ReactPlayer className={styles.player} url={props.vid.url} />;
// }
export default VlogCarousel;
