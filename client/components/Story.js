import mainstyles from "@styles/AllStories.module.scss";
import Link from "next/link";
import axios from "axios";
import React, { useState } from "react";
import { trimString } from "../utils/trimString";

export default function Story(props) {
  const slug = props.slug;
  const [likes, setLikes] = useState(props.likes);
  const date = new Date(props.date_created).toString().substring(3, 15);
  let image;
  try {
    image = JSON.parse(props.image)[0];
  } catch {
    image = props.image;
  }

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
      <div className={mainstyles.contentContainer}>
        <Link href={`/blogs/${props.slug}`}>
          <a className={mainstyles.heading}>
            <h3>{props.heading}</h3>
          </a>
        </Link>
        <p className={mainstyles.caption}>
          {trimString(props.caption, 0, 400)}
        </p>
        <div className={mainstyles.details}>
          <ul>
            <li>
              {/* <FontAwesomeIcon
                className={mainstyles.FontAwesomeIcon}
                icon={faUserCircle}
              /> */}
              By {props.author},
            </li>
            <li>{date}</li>
            {/* <li onClick={addLike}>
              <FontAwesomeIcon
                className={mainstyles.FontAwesomeIconLike}
                icon={faThumbsUp}
              />{" "}
              {likes} Likes
            </li> */}
            <li className={mainstyles.categoryContainer}>
              {props.categories.map((el, id) => (
                <Link href={`/category/${el}`} key={id}>
                  <a className={mainstyles.button}>
                    {el.charAt(0).toUpperCase() + el.slice(1)}
                  </a>
                </Link>
              ))}
            </li>
          </ul>
        </div>
      </div>
      <div className={mainstyles.imageContainer}>
        <img
          src={image ? image : "https://picsum.photos/300/200"}
          alt='story picture'
        />
      </div>
    </div>
  );
}
