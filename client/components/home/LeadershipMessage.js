import React from "react";
import LeadershipCard from "./LeadershipCard";
import styles from "@styles/LeadershipMessage.module.scss";
import { sectionHeading, decorated } from "@styles/Heading.module.scss";
import Link from "next/link";

const LeadershipMessage = () => {
  return (
    <div className={styles.container}>
      <h3 className={decorated + " " + sectionHeading}>
        <span>Leadership Message</span>
      </h3>
      <div className={styles.tray}>
        <LeadershipCard
          href='president'
          image='/assets/og_gkprabhu.jpg'
          title='Dr G. K. Prabhu, President'
        >
          Manipal University Jaipur, MUJ, as it is fondly called has completed
          ten golden years of its establishment. This journey of ten long years
          has been very enriching...
        </LeadershipCard>
        <LeadershipCard
          href='pro_president'
          image='/assets/nnsharma.jpg'
          title='Dr N. N. Sharma, Pro President'
        >
          Manipal University Jaipur is envisaged to be an enduring global center
          of excellence in higher education, and is driven by erudite team...
        </LeadershipCard>
        <LeadershipCard
          href='registrar'
          image='/assets/nbhatnagar.jpg'
          title='Dr. Nitu Bhatnagar, Registrar'
        >
          The Manipal Group has extended its legacy in terms of focused Vision,
          Mission and Values in education, research, and healthcare...
        </LeadershipCard>
        {/* 
        <Link href='/message/pro_president'>
          <div className={styles.secondary}>Pro President's Message</div>
        </Link>
        <Link href='/message/registrar'>
          <div className={styles.secondary}>Registrar's Message</div>
        </Link> */}
      </div>
    </div>
  );
};

export default LeadershipMessage;
