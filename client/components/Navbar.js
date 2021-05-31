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
        <Image
          src="/assets/Quote.png"
          alt="logo"
          width={48}
          height={44}
        ></Image>
      </Link>
      <div className={styles[active ? "mobileContainer" : "container"]}>
        <Link href="/editorial">Editorial</Link>
        <Link href="/learners-point">Learner's Point</Link>
        <Link href="/research">Research</Link>
        <Link href="/stalwart-speaks">Stalwart Speaks</Link>
        <Link href="/bulletin">Bulletin</Link>
        <Link href="/achievers">Achievers</Link>
        <Link href="/upcoming">Upcoming</Link>
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
