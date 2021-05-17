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
        <Link href="/learners-point">Learner's Point</Link>
        <Link href="/research">Research</Link>
        <Link href="/stalwart-speaks">Stalwart Speaks</Link>
        <Link href="/bulletin">Bulletin</Link>
        <Link href="/achievers">Achievers</Link>
        <Link href="/upcoming">Upcoming</Link>
      </div>
    </div>
  );
};
export default Navbar;
