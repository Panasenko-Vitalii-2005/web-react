import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './styles/main.scss'
import './styles/tw.css'
import App from './App.jsx'
import {ThemeProvider} from "./context/ThemeContext.jsx";
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider initial="light">
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>,
)
