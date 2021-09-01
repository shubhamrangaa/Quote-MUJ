// Excuse me for the quality of the code below :)
import React from "react";
import Image from "next/image";

import styles from "../styles/About.module.scss";

const editorial = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>Editors' Desk</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img
          src={
            "https://res.cloudinary.com/quote-muj/image/upload/v1626255709/ef29a5e1-4d8e-4181-bdbc-3fd0f1a5f2e9_syg2gk.jpg"
          }
          alt='picture'
          style={{
            objectFit: "cover",
            borderRadius: "50%",
            margin: "auto",
            textAlign: "center",
          }}
          width={300}
          height={300}
        />
      </div>
      <div className={styles.text}>
        <h4>Dr. Richa Arora</h4>
				<h5>Chairperson, Newsletter MUJ</h5>
				<h5 style={{marginBottom: "2rem"}}>Manipal University Jaipur</h5>
        Dear Readers,
        <br />
        <br />
        Greetings!
        <br />
        <br />
        It gives me immense pleasure to pen down for the inaugural issue of the
        first E-Newsletter of Manipal University Jaipur, <b>MUJ Bioscope</b>,
        during the auspicious decennial celebration of the University.
        <br />
        <br />
        Manipal University Jaipur has completed its ten golden years of
        establishment. During these ten glorious years, the University has
        carved a niche for itself with several golden feathers in its cap. MUJ
        has traversed ten golden years while progressing with focused vision and
        mission through tireless efforts and firm beliefs.
        <br />
        <br />
        MUJ has come a long way in the past so many years and these ten years
        have been quite enriching and rewarding. We are thankful to the
        indomitable spirit of the pioneer pillars of MUJ, who played a vital
        role in taking this University to newer heights.
        <br />
        <br />
        The first issue of the e-newsletter has a lot of interesting campus
        news, happenings and events which are keeping our campus, always abuzz
        with activities. It is the efficiency of our faculty members and staff
        that so many activities of different flavours keep on happening in the
        campus, making the campus full of vibrant colours. The newsletter will
        be published monthly keeping all of us apprised about the major events
        and activities of the University.
        <br />
        <br />
        I hope you enjoy the newsletter and will also send us your opinions and
        suggestions to improve it further.
        <br />
        <br />
        Happy Reading!!
        <br />
        {/* <br />
        Best Regards, */}
        {/* <br />
        <br />
        Dr Richa Arora
        <br />
        <br />
        Chairperson, Newsletter MUJ */}
      </div>
    </div>
  );
};

export default editorial;
