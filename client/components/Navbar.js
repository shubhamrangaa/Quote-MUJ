import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.scss";

export const Navbar = () => {
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
      <div>
        <Link href="/editorial">Editorial</Link>
        <Link href="/academics">Academics</Link>
        <Link href="/research">Research</Link>
        <Link href="/sports">Sports</Link>
        <Link href="/culturual">Cultural</Link>
        <Link href="/events">Events</Link>
        <Link href="/news">News</Link>
        <Link href="/gallery">Gallery</Link>
      </div>
    </div>
  );
};
export default Navbar;
