import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.scss'; 
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
