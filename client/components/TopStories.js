import styles from "../styles/Topstories.module.scss";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Image from "next/image";
import Divider from '@material-ui/core/Divider';


export default function TopStories(){
    return (
        <div className={styles.TopStories}>
            <h1 class={styles.decorated}><span>Top Stories</span></h1>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Paper className={styles.paper}>    
                        <div className={styles.element}>
                            <img src={'../assets/image1.png'}
                                    alt="Image 1"
                                    width={256}
                                    height={147} />
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
                            <img src={'../assets/image2.png'}
                                    alt="Image 2"
                                    width={523}
                                    height={320} />
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
                            <img src={'../assets/image3.png'}
                                    alt="Image 3"
                                    width={260}
                                    height={161} />
                            <h3>Workshop on The Art of Story Telling</h3>
                            <p>An online workshop cum interactive session on The Art of Story Telling and Getting Published. <br></br> <span className={styles.userName}>by random user</span></p>
                        </div>
                        <Divider />
                        <div className={styles.element}>
                            
                            <h3>Journey of a young Businesswoman</h3>
                            <p>Dept of Economics and Dept of Arts, organized a guest lecture. <br></br> <span className={styles.userName}>by random user</span></p>
                        </div>
                        <Divider />
                        <div className={styles.element}>
                            
                            <h3>Webinar on Art of Mind Control</h3>
                            <p>Abhigya Club of Manipal University Jaipur organized a one hour webinar. <br></br> <span className={styles.userName}>by random user</span></p>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
        
    )
}

