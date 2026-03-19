import { LoginForm } from "widgets/login-form/ui/LoginForm";
import styles from "pages/login-page/styles/LoginPage.module.scss";

export const LoginPage = () => {
  return(
    <section className={styles.loginPage}>
      <LoginForm />
    </section>
  );
};