import styles from "../styles/Footer.module.scss";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";

function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.left}>
			<Link href="/">
				<div className={styles.footerHeadingContainer}>
					<Image
						className={styles.icon}
						src="/assets/Quote.png"
						alt="logo"
						width={48}
						height={44}
					></Image>
					<h1 className={styles.footerHeading}>
						Quote Muj
					</h1>
				</div>
			</Link>
				<div>
					<ul>
						<li><Link href="/">Home</Link></li>
						<li><Link href="/">About</Link></li>
						<li><Link href="/">Podcasts</Link></li>
						<li><Link href="/">Vlogs</Link></li>
						<li><Link href="/">Browse</Link></li>
					</ul>
				</div>

				<div>
					<ul>
						<li><Link href="/">Categories</Link></li>
						<li><Link href="/">About</Link></li>
						<li><Link href="/">Browse</Link></li>
					</ul>
				</div>
			</div>
			<div className={styles.right}>
				<div>
					<p className={styles.footerpara}>
						Follow us on social media to continue <br></br> recieving updates
					</p>
				</div>

				<div className={styles.iconsHolder}>
					<a href="#" className={styles.iconsWrapper}>
						<FontAwesomeIcon
							className={styles.FontAwesomeIcon}
							icon={faFacebook}
						/>
					</a>
					<a href="#" className={styles.iconsWrapper}>
						<FontAwesomeIcon
							className={styles.FontAwesomeIcon}
							icon={faLinkedinIn}
						/>
					</a>
					<a href="#" className={styles.iconsWrapper}>
						<FontAwesomeIcon
							className={styles.FontAwesomeIcon}
							icon={faInstagram}
						/>
					</a>
					<a href="#" className={styles.iconsWrapper}>
						<FontAwesomeIcon
							className={styles.FontAwesomeIcon}
							icon={faTwitter}
						/>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Footer;
