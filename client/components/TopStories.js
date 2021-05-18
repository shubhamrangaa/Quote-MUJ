import styles from "../styles/Topstories.module.scss";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Image from "next/image";
import Divider from '@material-ui/core/Divider';
import React from 'react';
import TextMobileStepper from '../components/Carousel'
import { styled } from "@material-ui/core";



export default function TopStories(){
	const newsElements = [{
		headline:"Organized expert lecture",
		description:"An online Expert Lecture was organized on Life and Literature through MS Teams.",
		author:"random user",
		imageMetaData:{
			src:"/me.png",
			alt:"Picture required",
			width:100,
			height:100
		}
	},{
		headline:"Healthy lifestyle for Healthy heart.",
		description:"An online Expert Lecture was organized on Life and Literature through MS Teams.",
		author:"random user",
	},{
		headline:"Enhancing Research Skills and Integrity.",
		description:"An online Expert Lecture was organized on Life and Literature through MS Teams.",
		author:"random user",
	},{
		headline:"International Virtual Conference on Physical Education and Sports Science",
		description:"Manipal University Jaipur organized the International Virtual Conference on Physical Education and Sports Science (IVCPESS-2021) from 30-31 March 2021.",
		author:"random user",
		imageMetaData:{
			src:"/me.png",
			alt:"Picture required",
			width:300,
			height:300
		}
	},{
		headline:"Webinar on Trends in food Blogs",
		description:"Speaker of the session started with the new trends in food blogging.",
		author:"random user",
	},{
		headline:"Workshop on The Art of Story Telling",
		description:"An online workshop cum interactive session on The Art of Story Telling and Getting Published",
		author:"random user",
		imageMetaData:{
			src:"/me.png",
			alt:"Picture required",
			width:100,
			height:100
		}
	},{
		headline:"Journey of a young Businesswoman",
		description:"Dept of Economics and Dept of Arts, organized a guest lecture which was very informative.",
		author:"random user",
	},{
		headline:"Webinar on Art of Mind Control",
		description:"Dept of Economics and Dept of Arts, organized a guest lecture which was very informative.",
		author:"random user",
	}]
	const sectionOne = newsElements.slice(0,3);
	const sectionTwo = newsElements.slice(3,5);
	const sectionThree = newsElements.slice(5,8);
    return (
        <div className={styles.TopStories}>
        <div className={styles.fullSection}>
            <h1 class={styles.decorated}><span>Top Stories</span></h1>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Paper className={styles.paper}>
						{sectionOne.map((item,index)=>(
							<>
								<div key={index} className={styles.element}>
									{item.imageMetaData&&(
										<Image src={item.imageMetaData.src}
											alt={item.imageMetaData.alt}
											width={item.imageMetaData.width}
											height={item.imageMetaData.height}
										/>
									)}
									<h3>{item.headline}</h3>
									<p>{item.description}
									<br></br>
									<span className={styles.userName}>by {item.author}</span></p>
								</div>
								{(index!==sectionOne.length-1)&&(
									<Divider />
								)}
							</>
						))}
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                <Paper className={styles.paper}>
						{sectionTwo.map((item,index)=>(
							<>
								<div key={index} className={(index===1)?styles.elementmain2:styles.elementmain}>
									{item.imageMetaData&&(
										<Image src={item.imageMetaData.src}
											alt={item.imageMetaData.alt}
											width={item.imageMetaData.width}
											height={item.imageMetaData.height}
										/>
									)}
									<h3>{item.headline}</h3>
									<p>{item.description}
									<br />
									<span className={styles.userName}>by {item.author}</span></p>
								</div>
								{(index!==sectionTwo.length-1)&&(
									<Divider />
								)}
							</>
						))}

                    </Paper>
                </Grid>
                <Grid item xs={3}>
                <Paper className={styles.paper}>
                        {sectionThree.map((item,index)=>(
							<>
								<div key={index} className={styles.element}>
									{item.imageMetaData&&(
										<Image src={item.imageMetaData.src}
											alt={item.imageMetaData.alt}
											width={item.imageMetaData.width}
											height={item.imageMetaData.height}
										/>
									)}
									<h3>{item.headline}</h3>
									<p>{item.description}
									<br />
									<span className={styles.userName}>by {item.author}</span></p>
								</div>
								{(index!==sectionThree.length-1)&&(
									<Divider />
								)}
							</>
						))}
                    </Paper>
                </Grid>
            </Grid>
            </div>

            <TextMobileStepper />
        </div>
    )
}

