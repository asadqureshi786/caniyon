import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Preloader from './components/Preloader.jsx';

// AOS CSS
import 'aos/dist/aos.css';
// SCSS File
import './assets/css/style.scss';
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

function Main() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Preloader onFinish={() => setIsLoading(false)} />}
      {!isLoading && <App />}
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
