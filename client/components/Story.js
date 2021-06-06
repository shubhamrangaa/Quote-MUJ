import mainstyles from "../styles/AllStories.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React, { useState } from "react";

export default function Story(props) {
  const slug = props.slug;
  const [likes, setLikes] = useState(props.likes);

  let categories = props.categories
    .substring(1, props.categories.length - 1)
    .split(/(?!^)".*?"/g)
    .toString();
  let categoriesArr = categories.substring(1, categories.length - 1).split(",");

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
    <div className={mainstyles.story}>
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
            <li>
              {categoriesArr.map((el) => (
                <button className={mainstyles.button}>{el}</button>
              ))}
            </li>
            <li>{props.date_created.toString().substring(0, 10)}</li>
            <li onClick={addLike}>
              <FontAwesomeIcon
                className={mainstyles.FontAwesomeIconLike}
                icon={faThumbsUp}
              />{" "}
              {likes} Likes
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Image
          className={mainstyles.image}
          src="/images/img.png"
          alt="story picture"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
}
