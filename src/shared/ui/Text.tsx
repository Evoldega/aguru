import { Text as styles } from "../styles/index";

interface IText {
    content: string;
    variant: string;
}

const Text: React.FC<IText> = ({
    content,
    variant
}) => {
    return(
        <p className={styles[variant]}>{content}</p>
    );
};

export default Text;