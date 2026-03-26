import { CircularProgress } from "@mui/material";
import styles from "./Loader.module.scss";

const Loader = () => {
    return(
        <div className={styles.loader}>
            <CircularProgress />
        </div>
    );
};

export default Loader;