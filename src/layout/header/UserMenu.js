import styles from './styles.module.scss';
import Image from "next/image";
import Link from "next/link";

const UserMenu = ({loggedIn}) => {
    return (
        <div className={styles.menu}>
            <h4>Welcome to Shoppay!</h4>
            {!loggedIn ? (
                <div className={styles.flex}>
                    <img className={styles.menu__img} width={30} height={30} src='/images/my-image.jpg' alt='my photo' />
                    <div className={styles.col}>
                        <span>Welcome Back</span>
                        <h3>Pashinskij99</h3>
                        <span>Sign out</span>
                    </div>
                </div>
            ) : (
                <div className={styles.flex}>
                    <button className="btn_primary">Register</button>
                    <button className="btn_outlined">Login</button>
                </div>
            )}
            <ul>
                <li>
                    <Link href='/profile'>Account</Link>
                </li>
                <li>
                    <Link href='/profile/orders'>My Orders</Link>
                </li>
                <li>
                    <Link href='/profile/messages'>Message Center</Link>
                </li>
                <li>
                    <Link href='/profile/address'>Address</Link>
                </li>
                <li>
                    <Link href='/profile/whishlist'>Whishlist</Link>
                </li>
            </ul>
        </div>
    );
};

export default UserMenu;
