import styles from "../styles/Footer.module.scss";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import months from "../constants/Months";

function Footer() {
  const date = new Date();
  const currentMonth = months[date.getMonth()];
  const currentYear = date.getFullYear();
  const url = `/monthly/${currentYear}/${currentMonth}`;
  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        <a href="/" className={styles.brand}>
          <div className={styles.footerHeadingContainer}>
            <Image
              className={styles.icon}
              src="/assets/Quote.png"
              alt="logo"
              width={48}
              height={44}
            ></Image>
            <h1 className={styles.footerHeading}>Quote Muj</h1>
          </div>
        </a>
        <div>
          <ul className={styles.linksWrapper}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/blogs">Editorials</a>
            </li>
            <li>
              <a href="/category/all">Categories</a>
            </li>
            <li>
              <a href={url}>Monthly Newsletter</a>
            </li>
            <li>
              <a href="/category/Events">Events</a>
            </li>
          </ul>
        </div>

        <div>
          <ul className={styles.linksWrapper}>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/vlogs">Vlogs</a>
            </li>
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
