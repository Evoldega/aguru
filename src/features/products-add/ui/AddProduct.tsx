import { useState } from "react";

import { 
  Dialog, 
  Button, 
  DialogActions, 
  DialogContent, 
  TextField, 
  DialogTitle,
  Snackbar,
  Alert,
} from "@mui/material";

import styles from "./AddProducts.module.scss"

import Text from 'shared/ui/Text/Text';

import plus from 'assets/plus_rounded.svg';

import { useAddProductStore } from "../model/useAddProductStore";


export const AddProduct = () => {

  const [snackBarIsOpen, setSnackBarIsOpen] = useState(false);

  const { isOpen, setIsOpen } = useAddProductStore();

  return(
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className={styles.addButton}
        variant="contained"
      >
        <div className={styles.buttonContent}>
          <img 
            src={plus}
            alt="plus"
          />
          <Text
            content="Добавить"
            variant="regular2"    
          />
        </div>
      </Button>
      <Dialog 
        open={isOpen} 
        onClose={() => setIsOpen(false)}
      >
        <div className={styles.dialog}>
          <DialogTitle>Добавление товара</DialogTitle>
          <DialogContent>
            <div className={styles.inputs}>
              <TextField variant="standard" required label="Наименование" />
              <TextField variant="standard" label="Цена" />
              <TextField variant="standard" label="Вендор" />
              <TextField variant="standard" label="Артикул" />            
            </div>
          </DialogContent>
          <DialogActions className={styles.actions}>
            <Button 
              variant="contained" 
              type="submit"
              onClick={() => {
                setSnackBarIsOpen(true);
                setIsOpen(false);
              }} 
            >
              Добавить
            </Button>
            <Button 
              onClick={() => setIsOpen(false)} 
              color="error"
            >
              Отмена
            </Button>
          </DialogActions>
        </div>
      </Dialog>
      <Snackbar 
        open={snackBarIsOpen} 
        autoHideDuration={5000}
        anchorOrigin={{vertical: 'bottom', horizontal: 'center' }}
        onClose={() => setSnackBarIsOpen(false)}
      >
        <Alert
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Товар успешно добавлен
        </Alert>
      </Snackbar>
    </>
  );
};