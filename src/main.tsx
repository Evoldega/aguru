import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

import "@fontsource-variable/open-sans";
import "@fontsource-variable/cairo";
import "@fontsource-variable/roboto";
import "@fontsource-variable/inter";

createRoot(document.getElementById('root')!).render(<App />)
