import { CircularProgress } from "@mui/material";
import { Loader as styles } from "../styles/index";

const Loader = () => {
    return(
        <div className={styles.loader}>
            <CircularProgress />
        </div>
    );
};

export default Loader;