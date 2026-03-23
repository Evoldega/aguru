import { Logo as styles } from "../styles/index"
import logo from "assets/logo.svg"

function Logo() {
    return(
        <div className={styles.logo}>
            <img src={logo} alt="logo" />
        </div>
    );
};

export default Logo;