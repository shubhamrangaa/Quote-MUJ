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
      })
      .catch((err) => {
        console.error(err);
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
              By {props.author}
            </li>
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
          src={image ? image : "https://res.cloudinary.com/quote-muj/image/upload/q_40/v1637300211/manipal-1595339469_h298bf.jpg"}
          alt='story picture'
        />
      </div>
    </div>
  );
}
