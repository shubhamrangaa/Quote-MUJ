import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.scss";
import burger from "../styles/Hamburger.module.scss";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className={styles.header}>
      <Link href="/">
        <a>
          <Image
            src="/assets/Quote.png"
            alt="logo"
            width={48}
            height={44}
          ></Image>
        </a>
      </Link>
      <div className={styles[active ? "mobileContainer" : "container"]}>
        <Link href="/">Home</Link>
        <Link href="/blogs">Editorial</Link>
        <Link href="/category/categories">Categories</Link>
        <Link href="/category/upcoming">Events</Link>
        <Link href="/monthly/2021/may">Monthly Newsletter</Link>
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
