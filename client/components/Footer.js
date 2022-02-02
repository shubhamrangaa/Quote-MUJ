import styles from "../styles/Footer.module.scss";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { EmailRounded } from "@material-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import months from "../constants/Months";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const date = new Date();
  const currentMonth = months[date.getMonth()];
  const currentYear = date.getFullYear();
  const url = `/monthly/${currentYear}/${currentMonth}`;
  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        <a href='/' className={styles.brand}>
          <div className={styles.footerHeadingContainer}>
            <div style={{
              backgroundColor: "white",
              borderRadius: "50%",
              padding: "0.2rem",
              overflow: "hidden",
              aspectRatio: "1/1",
            }}>
              <Image
                className={styles.icon}
                src='/assets/Bioscope.png'
                alt='logo'
                width={80}
                height={80}
              ></Image>
            </div>
            
            <h1 className={styles.footerHeading}>MUJ Bioscope</h1>
          </div>
        </a>
        <div>
          <ul className={styles.linksWrapper}>
            <li>
              <a href='/'>Home</a>
            </li>
            {/* <li>
              <a href='/blogs'>News</a>
            </li> */}
            <li>
              <a href='/category/all'>Categories</a>
            </li>
            <li>
              <a href={url}>Monthly Newsletter</a>
            </li>
          </ul>
        </div>

        <div>
          <ul className={styles.linksWrapper}>
            <li>
              <a href='/category/Events'>Upcoming Events</a>
            </li>
            <li>
              <a href='/editorial-board'>Editorial Board</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.right}>
        <div>
          <p className={styles.footerpara}>Follow us:</p>
        </div>

        <div className={styles.iconsHolder}>
          <a
            href='https://www.facebook.com/manipal.university'
            target='_blank'
            rel='noopener'
            className={styles.iconsWrapper}
            style={{background: "#3b5998", color:"#fff"}}
          >
            <FontAwesomeIcon
              className={styles.FontAwesomeIcon}
              icon={faFacebook}
            />
          </a>
          <a
            target='_blank'
            rel='noopener'
            href='https://www.linkedin.com/school/manipal-university-jaipur/'
            className={styles.iconsWrapper}
            style={{background: "#0072b1", color:"#fff"}}
          >
            <FontAwesomeIcon
              className={styles.FontAwesomeIcon}
              icon={faLinkedinIn}
            />
          </a>
          <a
            href='https://www.instagram.com/jaipurmanipal/'
            target='_blank'
            rel='noopener'
            className={styles.iconsWrapper}
            style={{background: "#E1306C", color:"#fff"}}
          >
            <FontAwesomeIcon
              className={styles.FontAwesomeIcon}
              icon={faInstagram}
            />
          </a>
          <a
            href='https://twitter.com/Jaipur_Manipal'
            target='_blank'
            rel='noopener'
            className={styles.iconsWrapper}
            style={{background: "#1DA1F2", color:"#fff"}}
          >
            <FontAwesomeIcon
              className={styles.FontAwesomeIcon}
              icon={faTwitter}
            />
          </a>
          <a
            href='https://www.youtube.com/channel/UCFbeX4UJyd4fHTCnCVGob_Q'
            target='_blank'
            rel='noopener'
            className={styles.iconsWrapper}
            style={{background: "#e52d27", color:"#fff"}}
          >
            <FontAwesomeIcon
              className={styles.FontAwesomeIcon}
              icon={faYoutube}
            />
          </a>
        </div>
        <div className={styles.contactWrapper}>
          Contact us:
          <a href='tel:01413999100'>
            <FontAwesomeIcon
              style={{
                fontSize: "16px",
                width: "16px",
                height: "16px",
                marginRight: "0.5rem",
              }}
              icon={faPhone}
            />
            0141 - 3999100
          </a>
          <a href='mailto:mujbioscope@jaipur.manipal.edu'>
            <EmailRounded
              style={{
                fontSize: "16px",
                width: "16px",
                height: "16px",
                marginRight: "0.5rem",
              }}
            />
            mujbioscope@jaipur.manipal.edu
          </a>
          
        </div>
      </div>
    </div>
  );
}

export default Footer;
