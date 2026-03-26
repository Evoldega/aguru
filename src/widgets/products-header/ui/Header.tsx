import { ProductsSearch } from "features/products-search/index";
import Text from "shared/ui/Text/Text";
import styles from "./Header.module.scss";

const Header = () => {
  return(
    <header className={styles.header}>
      <div className={styles.title}>
        <Text
          content="Товары"
          variant="h2"
        />        
      </div>

      <ProductsSearch />
    </header>
  );
};

export default Header;