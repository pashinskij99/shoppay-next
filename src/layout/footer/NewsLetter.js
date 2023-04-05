import styles from './styles.module.scss';
import Link from "next/link";

const NewsLetter = () => {
    return (
        <div className={styles.footer__newsLetter}>
            <h3>Sign up for our newsletter</h3>
            <div className={styles.footer__flex}>
                <input type="text" placeholder="Your email address"/>
                <button className='btn_primary'>Subscribe</button>
            </div>
            <p>
                By clicking the SUBSCRIBE button, you are agreeing to{" "}
                <Link href="">our Privacy & Cookie Policy</Link>
            </p>
        </div>
    );
};

export default NewsLetter;
