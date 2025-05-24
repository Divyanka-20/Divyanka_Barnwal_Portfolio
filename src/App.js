import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App({ darkMode, toggleDarkMode }) {
  return (
    <Router>
      <div className={darkMode ? 'dark-mode' : ''} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <main style={{ flex: '1' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            {/* Add more routes here if needed */}
          </Routes>
        </main>

        <Footer darkMode={darkMode}/>
      </div>
    </Router>
  );
}

export default App;
