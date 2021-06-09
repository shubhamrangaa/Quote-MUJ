import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import styles from "../styles/CommunityPost.module.scss";

const Share = ({ display, url }) => {
  const website = `https://quote-muj.vercel.app/blogs/${url}`;
  return (
    <div className={styles["socials"] + " " + styles[display ? null : "hide"]}>
      <FacebookShareButton
        url={website}
        quote="Check out this article!"
        hashtag="quotemuj"
      >
        <FacebookIcon size={32} />
      </FacebookShareButton>
      <TwitterShareButton
        title="Quote MUJ"
        url={website}
        hashtags={["quotemuj", "manipaluniversityjaipur", "muj"]}
      >
        <TwitterIcon size={32} />
      </TwitterShareButton>
      <LinkedinShareButton url={website} title="Quote MUJ">
        <LinkedinIcon size={32} />
      </LinkedinShareButton>
      <RedditShareButton url={website} title="Quote MUJ">
        <RedditIcon size={32} />
      </RedditShareButton>
      <WhatsappShareButton url={website} title="Quote MUJ">
        <WhatsappIcon size={32} />
      </WhatsappShareButton>
      <TelegramShareButton url={website} title="Quote MUJ">
        <TelegramIcon size={32} />
      </TelegramShareButton>
      <EmailShareButton url={website} subject="Quote MUJ">
        <EmailIcon size={32} />
      </EmailShareButton>
    </div>
  );
};

export default Share;
