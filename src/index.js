import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function Root() {
  const [darkMode, setDarkMode] = useState(() => {
    // Load saved preference or default false
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return <App darkMode={darkMode} toggleDarkMode={toggleDarkMode} />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);
