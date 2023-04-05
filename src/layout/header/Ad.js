import styles from './styles.module.scss';
import Link from "next/link";

const Ad = () => {
    return (
        <Link href='/browse'>
            <div className={styles.ad} />
        </Link>
    );
};

export default Ad;
