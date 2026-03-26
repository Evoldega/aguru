import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './providers/themeProvider';
import { QueryProvider } from './providers/queryProvider';

import './styles/index.scss'

import "@fontsource/open-sans";
import "@fontsource/cairo";
import "@fontsource/roboto";
import "@fontsource/inter";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import App from './App'

createRoot(document.getElementById('root')!).render(
    <QueryProvider>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </QueryProvider>
)