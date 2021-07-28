import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.scss";
import burger from "../styles/Hamburger.module.scss";
import months from "../constants/Months";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className={styles.header}>
      <Link href="/" className={styles.brand}>
        <a>
          <Image
            className={styles.brandImage}
            src="/assets/Quote.png"
            alt="logo"
            width={48}
            height={44}
          ></Image>
        </a>
      </Link>
      <div className={styles[active ? "mobileContainer" : "container"]}>
        <Link href="/">Home</Link>
        <Link href="/blogs">News</Link>
        <Link href="/category/all">Categories</Link>
        <Link href="/category/Events">Upcoming Events</Link>
      </div>
      <button
        className={
          burger["hamburger"] +
          " " +
          burger["hamburger--spin"] +
          " " +
          burger[active ? "is-active" : null]
        }
        onClick={handleClick}
      >
        <span className={burger["hamburger-box"]}>
          <span className={burger["hamburger-inner"]}></span>
        </span>
      </button>
    </div>
  );
};
export default Navbar;
