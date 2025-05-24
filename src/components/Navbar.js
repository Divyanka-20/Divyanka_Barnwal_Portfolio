import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, Form } from 'react-bootstrap';

function Navigation({ darkMode, toggleDarkMode }) {
  const location = useLocation();

  return (
    <Navbar
      expand="lg"
      bg={darkMode ? 'dark' : 'light'}
      variant={darkMode ? 'dark' : 'light'}
      className="mb-4"
    >
      <Container fluid className="d-flex justify-content-between align-items-center">

        {/* Left: Brand */}
        <Navbar.Brand
          as={Link}
          to="/"
          style={{
            ffontFamily: 'Georgia, serif', 
            fontSize: '1.8rem', 
            fontWeight: 'bold', 
            color: darkMode ? '#fff' : '#000' 
          }}
        >
          Divyanka Barnwal
        </Navbar.Brand>

        {/* Right: Theme Toggle + Hamburger */}
        <div className="d-flex align-items-center">
          {/* Theme Toggle always visible */}
          <Form style={{ marginRight: '12px' }}>

            <Form.Check
              type="switch"
              id="theme-switch"
              label={darkMode ?  "🌙" : "☀️"}
              checked={darkMode}
              onChange={toggleDarkMode}
              style={{ display: 'flex', alignItems: 'center' }}
            />
          </Form>

          {/* Hamburger Toggle */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>

        {/* Collapsible Nav Links */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav activeKey={location.pathname}>
            <Nav.Link as={Link} to="/" eventKey="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" eventKey="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/projects" eventKey="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/contact" eventKey="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
