import mainstyles from "../styles/AllStories.module.scss";
import Image from 'next/image';

export default function Story (props) {
    return (
        <div className={mainstyles.story}>
            <div>
                <h3>This is the headline {props.heading}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere purus nec metus ullamcorper hendrerit. Aenean pulvinar convallis cursus. Ut nec tincidunt dui, varius dapibus magna. Nullam congue blandit ligula, eget rutrum augue dignissim sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin iaculis nunc eget porttitor lacinia. {props.description}</p>
            </div>
            <div>
                <Image
                    src="/img.png"
                    alt="Picture of the author"
                    width={300}
                    height={300}
                />
            </div>
        </div>
    )
}