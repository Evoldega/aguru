import Text from "shared/ui/Text";
import styles from "widgets/products-header/styles/Header.module.scss";

const Header = () => {
  return(
    <header className={styles.header}>
      <Text
        content="Товары"
        variant="h2"
      />
    </header>
  );
};

export default Header;