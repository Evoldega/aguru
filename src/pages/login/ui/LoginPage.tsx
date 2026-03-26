import LoginForm from "widgets/login-form/index";
import styles from "./LoginPage.module.scss";

export const LoginPage = () => {
  return(
    <section className={styles.loginPage}>
      <LoginForm />
    </section>
  );
};