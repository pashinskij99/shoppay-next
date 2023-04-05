import styles from './styles.module.scss'
import Ad from "@/layout/header/Ad";
import Top from "@/layout/header/Top";
import Main from "@/layout/header/Main";

const Header = () => {
    return <div className={styles.header}>
        <Ad />
        <Top />
        <Main />
    </div>
}

export default Header
