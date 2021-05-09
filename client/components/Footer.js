import styles from "../styles/Home.module.scss";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.left}>
      <h1 className={styles.footerHeading}>The Quote Muj</h1>
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
          <p className={styles.footerpara} p>
            Follow us on social media to continue <br></br> recieving updates
          </p>
        </div>

        <div className={styles.iconsHolder}>
          <a href="#">
            <FontAwesomeIcon
              className={styles.FontAwesomeIcon}
              icon={faFacebook}
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              className={styles.FontAwesomeIcon}
              icon={faLinkedin}
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              className={styles.FontAwesomeIcon}
              icon={faInstagramSquare}
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              className={styles.FontAwesomeIcon}
              icon={faTwitterSquare}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
