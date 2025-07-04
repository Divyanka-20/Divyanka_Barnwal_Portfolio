import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { FaLaptopCode, FaRocket, FaLeaf, FaBuilding, FaBus, FaTshirt } from 'react-icons/fa';

const iconSize = 36;

const projects = [
  {
    icon: <FaTshirt size={iconSize} color="#ffc107" />,
    title: 'GarmentGrid Clothing Website',
    description: 'Dynamic PHP & MySQL-based eCommerce site for clothing with category filters, session cart, search, responsive design, and AJAX-powered features.',
    link: 'https://github.com/Divyanka-20/GarmentGrid',
  },
  {
    icon: <FaBus size={iconSize} color="#fd7e14" />,
    title: 'Bus Ticket Booking System',
    description: 'Web-based ticket booking system using HTML, CSS, and JavaScript with seat tracking, fare calculation, and booking history stored via LocalStorage.',
    link: 'https://github.com/Divyanka-20/Bus-Ticket-Booking-System',
  },
  {
    icon: <FaBuilding size={iconSize} color="#6f42c1" />,
    title: 'PG Life Clone (Internshala Web Dev Project)',
    description: 'Responsive web app for students to find PG accommodations. Features user login, city-based filters, and PG detail pages. Developed during Internshala training.',
    link: 'https://github.com/Divyanka-20/PG_Life',
  },
  {
    icon: <FaLaptopCode size={iconSize} color="#007bff" />,
    title: 'Portfolio Website',
    description: 'A multipage portfolio built with React, Bootstrap, and theme toggle functionality.',
    link: 'https://github.com/Divyanka-20/Divyanka_Barnwal_Portfolio',
  },
  {
    icon: <FaRocket size={iconSize} color="#ff6b6b" />,
    title: 'Interview Prep Hub',
    description: 'A React app for coding interview questions, experiences, and community engagement.',
    link: 'https://github.com/yourusername/interview-prep-hub',
  },
  {
    icon: <FaLeaf size={iconSize} color="#28a745" />,
    title: 'Indian Wildlife Project',
    description: 'A JSP & MySQL based web project showcasing Indian wildlife with booking features.',
    link: 'https://github.com/yourusername/indian-wildlife-project',
  },
];
const styles = {
  header: {
    fontWeight: '800',
    fontSize: '2.75rem',
    marginBottom: '2rem',
    textAlign: 'center',
    color: '#222',
    letterSpacing: '0.05em',
  },
  card: {
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    borderRadius: '16px',
    padding: '1.5rem',
    border: 'none',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    height: '100%',
    background: '#fdfdfd',
  },
  cardHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 25px rgba(0, 123, 255, 0.2)',
  },
  icon: {
    marginBottom: '1rem',
  },
  title: {
    fontWeight: '700',
    fontSize: '1.5rem',
  },
  description: {
    fontSize: '1rem',
    marginBottom: '1rem',
    color: '#555',
  },
  link: {
    marginTop: 'auto',
    fontWeight: '600',
    fontSize: '1rem',
    color: '#007bff',
    textDecoration: 'none',
  },
};

function Projects() {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <Container className="my-5">
      <h1 style={styles.header}>MY PROJECTS</h1>
      <Row>
        {projects.map((project, idx) => (
          <Col md={4} key={idx} className="mb-4">
            <Card
              style={{
                ...styles.card,
                ...(hoveredIndex === idx ? styles.cardHover : {}),
              }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              tabIndex={0}
              onFocus={() => setHoveredIndex(idx)}
              onBlur={() => setHoveredIndex(null)}
            >
              <div style={styles.icon}>{project.icon}</div>
              <Card.Title style={styles.title}>{project.title}</Card.Title>
              <Card.Text style={styles.description}>{project.description}</Card.Text>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
              >
                View on GitHub →
              </a>
            </Card>
          </Col>
        ))}
      </Row>
      
     </Container>
  );
}

export default Projects;
