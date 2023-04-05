import styles from './styles.module.scss';
import {BsInstagram, BsPinterest, BsSnapchat, BsTwitter, BsYoutube} from "react-icons/bs";
import {FaFacebookF, FaTiktok} from 'react-icons/fa'

const Socials = () => {
    return (
        <div className={styles.footer__socials}>
            <h3>Stay Connected</h3>
            <ul>
                <li>
                    <a href="/" target="_blank">
                        <FaFacebookF />
                    </a>
                </li>
                <li>
                    <a href="/" target="_blank">
                        <BsInstagram />
                    </a>
                </li>
                <li>
                    <a href="/" target="_blank">
                        <BsTwitter />
                    </a>
                </li>
                <li>
                    <a href="/" target="_blank">
                        <BsYoutube />
                    </a>
                </li>
                <li>
                    <a href="/" target="_blank">
                        <BsPinterest />
                    </a>
                </li>
                <li>
                    <a href="/" target="_blank">
                        <BsSnapchat />
                    </a>
                </li>
                <li>
                    <a href="/" target="_blank">
                        <FaTiktok />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Socials;
