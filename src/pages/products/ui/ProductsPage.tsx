import Header from "widgets/products-header/ui/Header";
import styles from "./ProductsPage.module.scss";
import Products from "widgets/products";

const ProductsPage = () => {
    return(
        <section className={styles.productsPage}>
            <Header />
            <Products />
        </section>
    );
};

export default ProductsPage;