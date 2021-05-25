import React, { useState } from 'react';
import styles from "../styles/Topstories.module.scss";
import mainstyles from "../styles/AllStories.module.scss";
import Story from '../components/Story'



export default function AllStories( ) {
    return (
       <div className={mainstyles.storieswrapper}>
           <h1 className={styles.decorated}><span>All Stories</span></h1>
            <Story
            heading={""}
            />

       </div>
    )
}