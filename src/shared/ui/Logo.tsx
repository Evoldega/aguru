import styles from "../styles/Logo.module.scss"
import logo from "assets/logo.svg"

function Logo() {
    return(
        <div className={styles.logo}>
            <img src={logo} alt="logo" />
        </div>
    );
};

export default Logo;