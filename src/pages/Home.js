import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';
import profilePic from './Image.jpg';
import '../App.css';

const styles = {
  heading: {
    fontWeight: '800',
    fontSize: '2.75rem',
    marginBottom: '2.5rem',
    textAlign: 'center',
    color: '#222',
    letterSpacing: '0.05em',
  },
  card: {
    padding: '2rem',
    borderRadius: '20px',
    border: 'none',
    boxShadow: '0 6px 30px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  cardHover: {
    transform: 'translateY(-6px)',
    boxShadow: '0 10px 40px rgba(0, 123, 255, 0.15)',
  },
  image: {
    width: '200px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '50%',
    border: '4px solid #007bff',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  },
  text: {
    fontSize: '1.1rem',
    color: '#333',
    fontWeight: '500',
    lineHeight: '1.8',
  },
  iconRow: {
    marginTop: '1.25rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '1.25rem',
  },
  iconLink: {
    color: '#333',
    fontSize: '1.75rem',
    transition: 'color 0.3s ease, transform 0.3s ease',
  },
  iconHover: {
    color: '#0A66C2',
    transform: 'scale(1.1)',
  },
};

function Home() {
  const [hover, setHover] = React.useState(false);
  const [iconHover, setIconHover] = React.useState(null);

  // Set page title
  useEffect(() => {
    document.title = 'Divyanka Barnwal';
  }, []);

  return (
    <Container className="my-5">
      <h1 style={styles.heading}>WELCOME TO MY PORTFOLIO</h1>
      <Card
        style={{ ...styles.card, ...(hover ? styles.cardHover : {}) }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Row className="align-items-center">
          <Col md={4} className="text-center mb-4 mb-md-0">
            <Image
              src={profilePic}
              alt="Divyanka Barnwal"
              fluid
              style={styles.image}
            />
            <div style={styles.iconRow}>
              <a
                href="https://github.com/Divyanka-20"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...styles.iconLink,
                  ...(iconHover === 'github' ? styles.iconHover : {}),
                }}
                onMouseEnter={() => setIconHover('github')}
                onMouseLeave={() => setIconHover(null)}
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/divyanka-barnwal-71bb54292/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...styles.iconLink,
                  ...(iconHover === 'linkedin' ? styles.iconHover : {}),
                }}
                onMouseEnter={() => setIconHover('linkedin')}
                onMouseLeave={() => setIconHover(null)}
              >
                <FaLinkedin />
              </a>
             
            </div>
          </Col>
          <Col md={8}>
            <p style={styles.text}>
              Hello! I’m <strong>Divyanka Barnwal</strong>, a passionate <strong>Full Stack Web Developer</strong><br />
              specializing in Python, React, JavaScript, and UI design along with Backend Technologies like PHP, Oracle.
              I love building clean, responsive, and user-friendly web applications.
            </p>
            <p style={styles.text}>
              I’m currently pursuing my BCA and enjoy learning new technologies and frameworks.
              This portfolio showcases my projects, skills, and contact information.
            </p>
            <p style={styles.text}>
              When I’m not coding, I enjoy exploring new tech trends, reading, and traveling.
            </p>

          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default Home;
