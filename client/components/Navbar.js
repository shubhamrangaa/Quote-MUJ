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
				<Link href="/categories">Categories</Link>
				<Link href="/events">Events</Link>
				<Link href="/news">News</Link>
				<Link href="/gallery">Gallery</Link>
			</div>
		</div>
	);
};
export default Navbar;
