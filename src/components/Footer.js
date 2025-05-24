import React from 'react';
import { Container } from 'react-bootstrap';

function Footer({ darkMode }) {
  return (
    <footer
      className={`py-3 mt-auto text-center`}
      style={{
        backgroundColor: darkMode ? '#1f1f1f' : '#e3f2fd',
        color: darkMode ? '#f1f1f1' : '#212529',
        transition: 'background-color 0.3s ease, color 0.3s ease'
      }}
    >
      <Container>
        <small>© {new Date().getFullYear()} Divyanka Barnwal. All rights reserved.</small>
      </Container>
    </footer>
  );
}

export default Footer;
