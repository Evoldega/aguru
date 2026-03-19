import MuiButton from "@mui/material/Button";
import styles from "../styles/Button.module.scss";

interface IButton {
    variant?: "text" | "outlined" | "contained";
    type?: "button" | "submit" | "reset";
    style?: React.CSSProperties;
    disabled?: boolean;
    content: React.ReactNode;
    [key: string]: any;
}

const Button: React.FC<IButton> = ({
    variant = "contained",
    type = "button",
    style,
    disabled = false,
    content,
    ...restProps
}) => {
    return(
      <MuiButton 
        className={disabled ? "" : styles.button}
        type={type} 
        variant={variant}
        sx={style}
        disabled={disabled}
        {...restProps}
      >
        {content}
      </MuiButton>
    );
};

export default Button;