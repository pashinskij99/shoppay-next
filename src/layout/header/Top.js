import styles from './styles.module.scss';
import Image from "next/image";
import {MdSecurity} from "react-icons/md";
import {BsSuitHeart} from "react-icons/bs";
import {RiAccountPinCircleLine, RiArrowDropDownFill} from "react-icons/ri";
import Link from "next/link";
import {useState} from "react";
import UserMenu from "@/layout/header/UserMenu";

const Top = ({country}) => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [visible, setVisible] = useState(false)
    return (
        <div className={styles.top}>
            <div className={styles.top__container}>
                <div></div>
                <ul className={styles.top__list}>
                    <li>
                        <Image
                            width={15}
                            height={15}
                            src={country.flag}
                            alt={country.name}
                        />
                        <span>{country.name} / usd</span>
                    </li>
                    <li>
                        <MdSecurity/>
                        <span>Buyer Protection</span>
                    </li>
                    <li>
                        <span>Customer Service</span>
                    </li>
                    <li>
                        <span>Help</span>
                    </li>
                    <li>
                        <BsSuitHeart/>
                        <Link href="/profile/whishlist">
                            <span>Whishlist</span>
                        </Link>
                    </li>
                    <li
                        onMouseOver={() => setVisible(true)}
                        onMouseLeave={() => setVisible(false)}
                    >
                        {loggedIn
                            ? (<li>
                                <div className={styles.flex}>
                                    <Image width={20} height={20} src="/images/my-image.jpg" alt="profile image"/>
                                    <span>pashinskij99</span>
                                    <RiArrowDropDownFill/>
                                </div>
                            </li>)
                            : (<li>
                                <div className={styles.flex}>
                                    <RiAccountPinCircleLine/>
                                    <span>Account</span>
                                    <RiArrowDropDownFill/>
                                </div>
                            </li>)
                        }
                        {
                            visible ? <UserMenu loggedIn={loggedIn} /> : null
                        }

                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Top;
