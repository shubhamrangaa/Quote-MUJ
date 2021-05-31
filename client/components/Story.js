import mainstyles from "../styles/AllStories.module.scss";
import Image from "next/image";
import { AiOutlineLike } from "react-icons/ai";

export default function Story(props) {
  return (
    <div className={mainstyles.story}>
      <div>
        <h3>{props.heading}</h3>
        <p>{props.caption}</p>
        <div className={mainstyles.likesection}>
          <ul>
            <li>Author: {props.author}</li>
            <li>Category: {props.categories}</li>
            <li>{props.date_created}</li>
            <li>
              <AiOutlineLike className={mainstyles.likeicon} size="1.5em" />
            </li>
            <li>{props.likes} Likes</li>
          </ul>
        </div>
      </div>
      <div>
        <Image
          className={mainstyles.image}
          src="/img.png"
          alt="Picture of the author"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}
