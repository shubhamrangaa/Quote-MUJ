import React from "react";
import CollageCarouselItem from "./CollageCarouselItem";
import Carousel from "react-material-ui-carousel";
import styles from "@styles/Hero.module.scss";
const CollageCarousel = () => {
  const images = [
    "/assets/collage/19.jpg",
    "/assets/collage/12.jpg",
    "/assets/collage/14.jpg",
    "/assets/collage/15.jpg",
    "/assets/collage/16.jpg",
    "/assets/collage/17.jpg",
    "/assets/collage/18.png",
    "/assets/collage/20.jpg",
    "/assets/collage/21.jpg",
    "/assets/collage/22.jpg",
    "/assets/collage/23.jpg",
    "/assets/collage/7.jpg",
    "/assets/collage/8.jpg",
    "/assets/collage/9.jpg",
    "/assets/collage/10.jpg",
    "/assets/collage/1.jpg",
    "/assets/collage/2.jpg",
    "/assets/collage/3.jpg",
    "/assets/collage/4.jpg",
    // "/assets/collage/5.jpg",
    "/assets/collage/6.jpg",
  ];
  return (
    <div className={styles.carousel}>
      <Carousel>
        {images.map((image, i) => (
          <CollageCarouselItem
            indicators={false}
            fullHeightHover
            key={i}
            src={image}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default CollageCarousel;
