import styles from "./Text.module.scss";

interface IText {
    content: string;
    variant: string;
    [key: string]: any;
}

const Text: React.FC<IText> = ({
    content,
    variant,
    ...restProps
}) => {
    return(
        <p className={styles[variant]} {...restProps}>{content}</p>
    );
};

export default Text;