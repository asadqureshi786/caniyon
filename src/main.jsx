import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// ✅ AOS CSS
import 'aos/dist/aos.css';


// SCSS File
import './assets/css/style.scss'

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
