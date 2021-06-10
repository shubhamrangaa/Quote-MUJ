import mainstyles from "../styles/AllStories.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React, { useState } from "react";

export default function Story(props) {
  const slug = props.slug;
  const [likes, setLikes] = useState(props.likes);
  const date = new Date(props.date_created).toString().substring(3, 15);

  const addLike = () => {
    axios
      .post("https://quote-muj.herokuapp.com/api/blogs/add-like", {
        slug,
      })
      .then((res) => {
        setLikes(res.data.likes);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={mainstyles.story} key={props.id}>
      <div className={mainstyles.container}>
        <Link href={`/blogs/${props.slug}`}>
          <a className={mainstyles.heading}>{props.heading}</a>
        </Link>
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
            <li>{date}</li>
            <li onClick={addLike}>
              <FontAwesomeIcon
                className={mainstyles.FontAwesomeIconLike}
                icon={faThumbsUp}
              />{" "}
              {likes} Likes
            </li>
            <li>
              {props.categories.map((el, id) => (
                <button className={mainstyles.button} key={id}>
                  {el.charAt(0).toUpperCase() + el.slice(1)}
                </button>
              ))}
            </li>
          </ul>
        </div>
      </div>
      <div className={mainstyles.image}>
        <img
          src={props.image ? props.image : "/images/img.png"}
          alt="story picture"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
}
