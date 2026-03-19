import styles from "../styles/Text.module.scss"

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