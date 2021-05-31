import mainstyles from "../styles/AllStories.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

export default function Story(props) {
  return (
    <div className={mainstyles.story}>
      <div className={mainstyles.container}>
        <p className={mainstyles.heading}>{props.heading}</p>
        <p className={mainstyles.caption}>{props.caption}</p>
        <div className={mainstyles.details}>
          <ul>
            <li>
              <FontAwesomeIcon
                className={mainstyles.FontAwesomeIcon}
                icon={faUserCircle}
              />{" "}
              {props.author}
            </li>
            <li>
              <button className={mainstyles.button}>{props.categories}</button>
            </li>
            <li>{props.date_created.toString().substring(0, 10)}</li>
            <li>
              <FontAwesomeIcon
                className={mainstyles.FontAwesomeIconLike}
                icon={faThumbsUp}
              />{" "}
              {props.likes} Likes
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Image
          className={mainstyles.image}
          src="/img.png"
          alt="Picture of the author"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
}
