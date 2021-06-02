import React from 'react';
import styles from "../styles/StoryPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";

function FullStory( ) {
    return (
        <div>
        <div className={styles.heading}>
            <h6>Bulletin</h6>
            <h1>Some news headline</h1>
            <ul>
                <li>Placements</li>
                <li>April 20, 2020</li>
                <li>5 mins</li>
                <li>Read</li>
                <li><FontAwesomeIcon
                    icon={faThumbsUp}
                /></li>
                <li><FontAwesomeIcon
                    icon={faBookmark}
                /></li>
            </ul>
        </div>
            <Image
                src="/img.png"
                alt="Picture of the author"
                width="100vw"
                height="100vh"
            />

            <div className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor ligula eu turpis lacinia, ut lobortis quam iaculis. Proin eget ipsum quis felis volutpat tincidunt eu a sem. Pellentesque consequat mollis est in pulvinar. Curabitur a malesuada enim. Vivamus nec lectus sodales lorem pretium luctus eu eu orci. Phasellus vehicula laoreet urna sit amet mattis. In blandit nunc consequat convallis viverra. Etiam placerat accumsan blandit. Nunc pulvinar lorem et nisi placerat, nec elementum justo tempor. Vivamus eget sapien eget neque luctus egestas. In scelerisque, velit id scelerisque scelerisque, nunc nisi dictum urna, a malesuada urna nunc sit amet urna. In metus felis, tristique vitae semper in, feugiat et sapien. Pellentesque euismod sollicitudin leo, id sagittis turpis sodales in.
            </div>
            <div className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor ligula eu turpis lacinia, ut lobortis quam iaculis. Proin eget ipsum quis felis volutpat tincidunt eu a sem. Pellentesque consequat mollis est in pulvinar. Curabitur a malesuada enim. Vivamus nec lectus sodales lorem pretium luctus eu eu orci. Phasellus vehicula laoreet urna sit amet mattis. In blandit nunc consequat convallis viverra. Etiam placerat accumsan blandit. Nunc pulvinar lorem et nisi placerat, nec elementum justo tempor. Vivamus eget sapien eget neque luctus egestas. In scelerisque, velit id scelerisque scelerisque, nunc nisi dictum urna, a malesuada urna nunc sit amet urna. In metus felis, tristique vitae semper in, feugiat et sapien. Pellentesque euismod sollicitudin leo, id sagittis turpis sodales in.
            </div>
            <div className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor ligula eu turpis lacinia, ut lobortis quam iaculis. Proin eget ipsum quis felis volutpat tincidunt eu a sem. Pellentesque consequat mollis est in pulvinar. Curabitur a malesuada enim. Vivamus nec lectus sodales lorem pretium luctus eu eu orci. Phasellus vehicula laoreet urna sit amet mattis. In blandit nunc consequat convallis viverra. Etiam placerat accumsan blandit. Nunc pulvinar lorem et nisi placerat, nec elementum justo tempor. Vivamus eget sapien eget neque luctus egestas. In scelerisque, velit id scelerisque scelerisque, nunc nisi dictum urna, a malesuada urna nunc sit amet urna. In metus felis, tristique vitae semper in, feugiat et sapien. Pellentesque euismod sollicitudin leo, id sagittis turpis sodales in.
            </div>



        </div>
    )
}

export default FullStory;