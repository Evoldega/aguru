import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from "../model/useAuthStore";
import { useRememberMeStore } from "../model/useRememberMeStore";
import { 
  Divider, 
  FormControl, 
  OutlinedInput, 
  Tooltip, 
  FormControlLabel, 
  FormHelperText, 
  Checkbox, 
  InputAdornment,
  Snackbar,
  Alert,
} from "@mui/material";

import person from "assets/person.svg";
import visibility from "assets/visibility.svg";
import visibilityOff from "assets/visibility_off.svg";
import cross from "assets/cross.svg";
import lock from "assets/lock.svg";


import styles from "./Auth.module.scss"
import Button from "shared/ui/Button/Button";
import Text from "shared/ui/Text/Text";
import Loader from "shared/ui/Loader/Loader";

export const Auth = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formIsValid, setFormIsValid] = useState(true);

  const navigate = useNavigate();
  
  const { loading, error, login, reset } = useAuthStore();
  const { rememberMe, setRememberMe } = useRememberMeStore();

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!!!userName || !!!password) {
      setFormIsValid(false);
      return;
    }

    await login(userName, password, rememberMe);
    navigate('/', { replace: true });
  };

  return (
    <div className={styles.form}>
      <div className={styles.inputWrapper}>
        <div className={styles.inputGroup}>
          <Text
            variant="label"
            content="Логин"
          />
          <FormControl fullWidth variant="outlined">
            <OutlinedInput
              className={styles.input}
              error={!!!userName && !formIsValid}
              id="login"
              startAdornment={
                <InputAdornment className={styles.startadornment} position="start">
                  <img src={person} alt="person" />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment 
                  className={styles.endadornment} 
                  position="end"
                >
                  {
                    userName &&
                    <Tooltip title="Очистить" placement="top">
                      <img onClick={() => setUserName("")} src={cross} alt="cross" />
                    </Tooltip>
                  }
                </InputAdornment>
              }
              autoComplete="current-login"
              onChange={e => setUserName(e.target.value)}
              size="small"
              placeholder="Пользователь"
              value={userName}
            />
            <div className={styles.helpertext}>
              { 
                !!!userName && 
                !formIsValid && 
                <FormHelperText>Введите логин</FormHelperText>
              }              
            </div>

          </FormControl>
        </div>

        <div className={styles.inputGroup}>
          <Text
            variant="label"
            content="Пароль"
          />
          <FormControl fullWidth variant="outlined">
            <OutlinedInput
              className={styles.input}
              error={!!!password && !formIsValid}
              id="password"
              type={showPassword ? 'text' : 'password'}
              startAdornment={
                <InputAdornment className={styles.startadornment} position="start">
                  <img src={lock} alt="lock"/>
                </InputAdornment>  
              }
              endAdornment={
                <InputAdornment className={styles.endadornment} position="end">
                    { 
                      password && 
                      <Tooltip title="Очистить" placement="top">
                        <img onClick={() => setPassword("")} src={cross} alt="cross"/>
                      </Tooltip>
                    }
                    <Tooltip title={showPassword ? "Скрыть пароль" : "Показать пароль"} placement="top">
                      <img 
                        onClick={() => setShowPassword(!showPassword)} 
                        src={showPassword ? visibilityOff : visibility} 
                      />
                    </Tooltip>
                </InputAdornment>
              }
              autoComplete="current-password"
              onChange={e => setPassword(e.target.value)}
              size="small"
              placeholder="Пароль"
              value={password}
            />
            <div className={styles.helpertext}>
              { 
                !!!password &&
                !formIsValid &&
                <FormHelperText>Введите пароль</FormHelperText>
              }
            </div>
          </FormControl>
        </div>
        <FormControlLabel
          label="Запомнить данные"
          className={styles.checkbox}
          control={
            <Checkbox
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              color="primary"
            />
          }
        />
      </div>

      <Button
        type="submit"
        onClick={handleSubmit}
        disabled={loading}
        style={{
          borderRadius: "12px",
          width: "399px",
          minHeight: "54px"
        }}
        content={
          <Text
            variant="bold1"
            content="Войти"
          />
        } 
      />

      <Divider>
        <Text 
          content="или"
          variant="secondary1"
        />
      </Divider>

      <Snackbar 
        open={!!error} 
        autoHideDuration={5000}
        anchorOrigin={{vertical: 'bottom', horizontal: 'center' }}
        onClose={reset}
      >
        <Alert
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {error}
        </Alert>
      </Snackbar>

      {loading && <Loader />}
    </div>
  );
};