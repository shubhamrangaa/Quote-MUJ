import mainstyles from "../styles/AllStories.module.scss";
import Image from 'next/image';
import { AiOutlineLike } from 'react-icons/ai';

export default function Story (props) {
    return (
        <div className={mainstyles.story}>
            <div>
                <h3>This is the headline {props.heading}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere purus nec metus ullamcorper hendrerit. Aenean pulvinar convallis cursus. Ut nec tincidunt dui, varius dapibus magna. Nullam congue blandit ligula, eget rutrum augue dignissim sit amet.  {props.description}</p>
                <div className={mainstyles.likesection} >
                    <ul >
                    <li>Random User</li>
                    <li>Category</li>
                    <li>15th June 2021</li>
                    <li><AiOutlineLike className={mainstyles.likeicon} size="1.5em" /></li>
                    <li>5 Likes</li>
                    </ul>
                </div>

            </div>
            <div>
                <Image className={mainstyles.image}
                    src="/img.png"
                    alt="Picture of the author"
                    width={300}
                    height={300}
                />
            </div>

        </div>
    )
}