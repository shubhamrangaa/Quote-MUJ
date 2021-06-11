import styles from "@styles/VlogCarousel.module.scss";
import ReactPlayer from "react-player";
import Carousel from "react-material-ui-carousel";

const VlogCarousel = () => {
  var videos = [
    {
      url: "https://www.youtube.com/watch?v=vhnhUq8E-ZA",
    },
    {
      url: "https://www.youtube.com/watch?v=YT4GQQRHHBQ",
    },
    {
      url: "https://www.youtube.com/watch?v=oOgpTRs--Do",
    },
    {
      url: "https://www.youtube.com/watch?v=0Rh8CTlbLng",
    },
  ];

  return (
    <div className={styles.carousel}>
      <p>Vlogs & Podcast</p>

      <Carousel
        navButtonsAlwaysVisible={true}
        autoPlay={false}
        cycleNavigation={false}
      >
        {videos.map((vid, i) => (
          <VideoPlayer key={i} vid={vid} />
        ))}
      </Carousel>
    </div>
  );
};

function VideoPlayer(props) {
  return <ReactPlayer className={styles.player} url={props.vid.url} />;
}
export default VlogCarousel;
