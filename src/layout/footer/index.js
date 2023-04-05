import styles from './styles.module.scss';
import Links from "@/layout/footer/Links";
import Socials from "@/layout/footer/Socials";
import NewsLetter from "@/layout/footer/NewsLetter";
import Payment from "@/layout/footer/Payment";
import Copyright from "@/layout/footer/Copyright";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <Links />
                <Socials />
                <NewsLetter />
                <Payment />
                <Copyright />
            </div>
        </footer>
    );
};

export default Footer;
