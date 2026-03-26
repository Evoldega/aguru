import type { ReactNode } from 'react';
import type {} from '@mui/x-data-grid/themeAugmentation';

import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme({
  components: {
    MuiPaginationItem: {
      styleOverrides: { // Стили для элементов пагинации
        root: {
          '&.Mui-selected': {
            backgroundColor: '#242EDB',
            color: 'white',
          },
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        columnSeparator: { // Разделитель между столбцами
          display: 'none',
        },
        columnHeaderTitle: { // Заголовки столбцов
          fontFamily: "Cairo, system-ui, sans-serif",
          fontWeight: 700,
          fontSize: '16px',
          color: '#B2B3B9',
          letterSpacing: 0,
          lineHeight: '30px',
        },
      },
    },
    MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
          },
          containedPrimary: {
            backgroundColor: "#242EDB",
            '&:hover': {
              backgroundColor: "#797FEA",
            },
          },

          contained: {
            backgroundColor: "#242EDB",
          },

          textPrimary: {
            color: "#242EDB",
          }
        },
      },
    },
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};