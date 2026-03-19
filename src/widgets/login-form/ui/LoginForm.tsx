import { Auth } from "features/auth/ui/Auth";
import styles from "../styles/LoginForm.module.scss";
import Logo from "shared/ui/Logo";
import Text from "shared/ui/Text";
import Link from "@mui/material/Link";

export const LoginForm = () => {
  return (
    <section className={styles.loginForm}>
      <div className={styles.container}>
        <Logo />
        <div className={styles.header}>
          <Text 
            content="Добро пожаловать!"
            variant="h1"
          />
          <Text 
            content="Пожалуйста, авторизируйтесь"
            variant="secondary1"
          />
        </div>
        <Auth />
        <div className={styles.footer}>
          <Text 
            content="Нет аккаунта?"
            variant="regular1"
          />
          <Link 
            href="#" 
            underline="always" 
            className={styles.link}
          >
            Создать
          </Link>
        </div>
      </div>

    </section>
  );
};