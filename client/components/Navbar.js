import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.scss";
import burger from "../styles/Hamburger.module.scss";
import months from "../constants/Months";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className={styles.header}>
      {!active && (
        <Link href='/' className={styles.brand}>
          <div className={styles.brandName}>
            {/* <Image
            className={styles.brandImage}
            src="/assets/Quote.png"
            alt="logo"
            width={48}
            height={48}
          ></Image> */}
            MUJ Bioscope
          </div>
        </Link>
      )}
      <div className={styles[active ? "mobileContainer" : "container"]}>
        <Link href='/'>Home</Link>
        {/* <Link href='/blogs'>News</Link> */}
        <Link href='/category/all'>Categories</Link>
        <Link href='/editorial'>Editors' Desk</Link>
        <Link href='/category/accreditation'>Rankings and Accreditation</Link>
        <Link href='/category/upcoming-events'>Upcoming Events</Link>
        <NavDropdown title='Archives'>
          <NavDropdown.Item href='/monthly/2022/July'>
            July 2022 Issue
          </NavDropdown.Item>
          <NavDropdown.Item href='/monthly/2022/June'>
            June 2022 Issue
          </NavDropdown.Item>
          <NavDropdown.Item href='/monthly/2022/May'>
            May 2022 Issue
          </NavDropdown.Item>
          <NavDropdown.Item href='/monthly/2022/April'>
            April 2022 Issue
          </NavDropdown.Item>
          <NavDropdown.Item href='/monthly/2022/March'>
            March 2022 Issue
          </NavDropdown.Item>
          <NavDropdown.Item href='/monthly/2022/February'>
            February 2022 Issue
          </NavDropdown.Item>
          <NavDropdown.Item href='/monthly/2022/January'>
            January 2022 Issue
          </NavDropdown.Item>
          <NavDropdown.Item href='/monthly/2021/December'>
            December 2021 Issue
          </NavDropdown.Item>
          <NavDropdown.Item href='/monthly/2021/November'>
            November 2021 Issue
          </NavDropdown.Item>
          <NavDropdown.Item href='/monthly/2021/October'>
            October 2021 Issue
          </NavDropdown.Item>
          <NavDropdown.Item href='/monthly/2021/September'>
            September 2021 Issue
          </NavDropdown.Item>
        </NavDropdown>
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
