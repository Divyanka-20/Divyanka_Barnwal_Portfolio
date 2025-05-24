import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const iconSize = 36;

const contactItems = [
  {
    icon: <FaEnvelope size={iconSize} color="#D44638" />,
    label: 'Email',
    content: 'barnwaldivyanka20@gmail.com',
    href: null,
  },
  {
    icon: <FaGithub size={iconSize} color="#333" />,
    label: 'GitHub',
    content: 'View my GitHub',
    href: 'https://github.com/Divyanka-20',
  },
  {
    icon: <FaLinkedin size={iconSize} color="#0A66C2" />,
    label: 'LinkedIn',
    content: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/divyanka-barnwal-71bb54292/',
  },
  {
    icon: <FaMapMarkerAlt size={iconSize} color="#ff6b6b" />,
    label: 'Location',
    content: 'Asansol, West Bengal, India',
    href: 'https://maps.app.goo.gl/Ncxkb1F28cH5Ge4o7',
  },
];

const styles = {
  header: {
    fontWeight: '800',
    fontSize: '2.75rem',
    marginBottom: '2.5rem',
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.75rem',
  },
  cardHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 25px rgba(0, 123, 255, 0.2)',
  },
  label: {
    fontWeight: '700',
    fontSize: '1.25rem',
  },
  content: {
    fontWeight: '600',
    fontSize: '1.1rem',
    color: '#007bff',
    textDecoration: 'none',
  },
  contentPlain: {
    color: '#333',
    fontWeight: '600',
    fontSize: '1.1rem',
  },
};

function Contact() {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <Container className="my-5">
      <h1 style={styles.header}>CONTACT ME</h1>
      <Row>
        {contactItems.map(({ icon, label, content, href }, idx) => (
          <Col md={6} className="mb-4" key={label}>
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
              <div>{icon}</div>
              <div style={styles.label}>{label}</div>
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.content}
                >
                  {content}
                </a>
              ) : (
                <span style={styles.contentPlain}>{content}</span>
              )}
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Contact;
