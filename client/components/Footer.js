import styles from '../styles/Home.module.scss'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer(){
    return <div className={styles.footer}>
    

    <div className={styles.left}>
   
    <div><ul>
            <li>Home</li>
            <li>About</li>
            <li>Podcasts</li>
            <li>Vlog</li>
            <li>Browse</li>
        </ul></div>
        
        <div><ul>
            <li>Categories</li>
            <li>About</li>
            <li>Browse</li>
        </ul></div>
    </div>
    <div className={styles.right}>
    <div><p className={styles.footerpara} p>Follow us on social media to continue <br></br> recieving updates</p></div>

    

    <div className={styles.iconsHolder}><a href="#"><FontAwesomeIcon className={styles.FontAwesomeIcon} icon={faFacebook} /></a>
    <a href="#"><FontAwesomeIcon className={styles.FontAwesomeIcon} icon={faLinkedin} /></a>
    <a href="#"><FontAwesomeIcon className={styles.FontAwesomeIcon} icon={faInstagramSquare} /></a>
    <a href="#"><FontAwesomeIcon className={styles.FontAwesomeIcon} icon={faTwitterSquare} /></a>
    </div>

    </div>


    
    

    </div>
}

export default Footer;