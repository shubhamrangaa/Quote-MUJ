import styles from "@styles/VlogCarousel.module.scss";
import { sectionHeading } from "@styles/Heading.module.scss";
import ReactPlayer from "react-player/youtube";
import Carousel from "react-material-ui-carousel";

const VlogCarousel = () => {
  var videos = [
    "https://youtu.be/B7e_vFQYdS8"
    "https://www.youtube.com/watch?v=fnagbpRJi3I",
    "https://www.youtube.com/watch?v=m-5oE1zNshU",
    "https://www.youtube.com/watch?v=G7yYMG2cROg",
    "https://www.youtube.com/watch?v=TwMmF_D8EzI",
    "https://youtu.be/iBWV99n5GZI",
    "https://www.youtube.com/watch?v=g0r1LbqO48E&t=2s",
    "https://www.youtube.com/watch?v=nhFQ_pWbPL8",
    "https://www.youtube.com/watch?v=5kkHl8ogj9Q",
    "https://www.youtube.com/watch?v=rPT6lX6RuHQ",
    "https://www.youtube.com/watch?v=L0OAww5aNsw",
    "https://youtu.be/xua-Ua4HOEg",
    "https://youtu.be/mxIfBOQKA7Q",
    "https://youtu.be/ETXtf8p0cPI",
    "https://youtu.be/Kyk0d21b6AA",
    "https://youtu.be/FZ7DvMyyqnY",
    "https://youtu.be/D_1MkqtyZLg",
    "https://youtu.be/T_BSKlB9xNQ",
    "https://youtu.be/85_EQ9fKiD8",
    "https://youtu.be/p7FUcLCZvAo",
    "https://youtu.be/qsoDCH1bfXw",
    "https://youtu.be/SH7iPxMB2mw",
    "https://youtu.be/bzr91FtwzxQ",
    "https://youtu.be/wrdFP29arGQ",
    "https://youtu.be/okyDzoh3cCg",
    "https://youtu.be/oRdaHGtNCKw",
    "https://youtu.be/j6c4FXwTbq4",
    "https://youtu.be/A7sz78WXuqw",
    "https://youtu.be/HbcnhIW2hwU",
    "https://youtu.be/lX_T7jTsavY",
    "https://youtu.be/DX-ac8NJbOY",
    "https://youtu.be/OdmyN0VdP5E",
    "https://youtu.be/mJvVXE6AfZ4",
    "https://youtu.be/qYgGZ3WTN7w",
    "https://youtu.be/w05btlb-j-M",
    "https://youtu.be/oBoQKi78QR0",
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
        IndicatorIcon={false}
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
