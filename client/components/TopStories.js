import styles from "../styles/Topstories.module.scss";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Image from "next/image";
import Divider from '@material-ui/core/Divider';
import React from 'react';
import TextMobileStepper from '../components/Carousel'



export default function TopStories(){
    return (
        <div className={styles.TopStories}>
        <h1 class={styles.decorated}><span>Top Stories</span></h1>
        <div className={styles.fullSection}>
            
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Paper className={styles.paper}>    
                        <div className={styles.element}>
                            <Image src="/me.png"
                                    alt="Picture required"
                                    width={100}
                                    height={100} />
                            <h3>Organized expert lecture</h3>
                            <p>An online Expert Lecture was organized on Life and Literature through MS Teams. <br></br> <span className={styles.userName}>by random user</span></p>
                        </div>
                        <Divider />
                        <div className={styles.element}>
                            
                            <h3>Healthy lifestyle for Healthy heart.</h3>
                            <p>An online Expert Lecture was organized on Life and Literature through MS Teams. <br></br> <span className={styles.userName}>by random user</span></p>
                        </div>
                        <Divider />
                        <div className={styles.element}>
                            
                            <h3>Enhancing Research Skills and Integrity.</h3>
                            <p>An online Expert Lecture was organized on Life and Literature through MS Teams. <br></br> <span className={styles.userName}>by random user</span></p>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                <Paper className={styles.paper}>    
                        <div className={styles.elementmain}>
                            <Image src="/me.png"
                                    alt="Picture required"
                                    width={300}
                                    height={280} />
                            <h3>International Virtual Conference on Physical Education and Sports Science</h3>
                            <p>Manipal University Jaipur organized the International Virtual Conference on Physical Education and Sports Science (IVCPESS-2021) from 30-31 March 2021. <br></br> <span className={styles.userName}>by random user</span></p>
                        </div>
                        <Divider />
                        <div className={styles.elementmain2}>
                            
                            <h3>Webinar on Trends in food Blogs</h3>
                            <p>Speaker of the session started with the new trends in food blogging. <br></br> <span className={styles.userName}>by random user</span></p>
                        </div>
                        
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                <Paper className={styles.paper}>    
                        <div className={styles.element}>
                            <Image src="/me.png"
                                    alt="Picture required"
                                    width={100}
                                    height={100} />
                            <h3>Workshop on The Art of Story Telling</h3>
                            <p>An online workshop cum interactive session on The Art of Story Telling and Getting Published. <br></br> <span className={styles.userName}>by random user</span></p>
                        </div>
                        <Divider />
                        <div className={styles.element}>
                            
                            <h3>Journey of a young Businesswoman</h3>
                            <p>Dept of Economics and Dept of Arts, organized a guest lecture which was very informative. <br></br> <span className={styles.userName}>by random user</span></p>
                        </div>
                        <Divider />
                        <div className={styles.element}>
                            
                            <h3>Webinar on Art of Mind Control</h3>
                            <p>Dept of Economics and Dept of Arts, organized a guest lecture which was very informative. <br></br> <span className={styles.userName}>by random user</span></p>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
            </div>

            <TextMobileStepper />
            
        </div>
        
    )
}

