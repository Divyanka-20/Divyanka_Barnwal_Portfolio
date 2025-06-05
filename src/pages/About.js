import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FaEye, FaDownload, FaGithub, FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaPhp, FaDatabase, FaPaintBrush } from 'react-icons/fa';
import { SiC, SiCplusplus, SiMysql, SiOracle, SiBootstrap } from 'react-icons/si';
import { DiJava } from 'react-icons/di';
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
  sectionResume: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '16px',
    boxShadow: '0 6px 30px rgba(5, 74, 69, 0.1)',
    marginBottom: '2rem',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'default',
  },
  sectionResumeHover: {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 40px rgba(7, 101, 109, 0.25)',
  },
  sectionSkills: {
    padding: '2rem',
    marginBottom: '2rem',
  },
  resumeButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.25rem',
    marginTop: '1rem',
  },
  button: {
    padding: '0.6rem 1.5rem',
    fontSize: '1rem',
    fontWeight: '600',
    borderRadius: '30px',
    backgroundColor: '#a3d2ca',
    color: '#054a45',
    border: '1px solid #8ac7be',
    transition: 'background-color 0.3s ease, color 0.3s ease, transform 0.3s ease',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#07656d',
    color: '#e0f2f1',
    transform: 'scale(1.05)',
  },
  skillBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '1rem',
    padding: '0.5rem 1rem',
    margin: '0.5rem',
    borderRadius: '30px',
    backgroundColor: '#ffffff',
    color: '#054a45',
    border: '1.5px solid #054a45',
    transition: 'background-color 0.3s ease, color 0.3s ease, transform 0.3s ease',
    cursor: 'default',
  },
  skillBadgeHover: {
    backgroundColor: '#07656d',
    color: '#e0f2f1',
    transform: 'scale(1.05)',
  },
};

const skills = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'PHP', icon: <FaPhp /> },
  { name: 'Oracle', icon: <SiOracle /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'UI Design', icon: <FaPaintBrush /> },
  { name: 'Bootstrap', icon: <SiBootstrap /> },
  { name: 'GitHub', icon: <FaGithub /> },
  { name: 'Database', icon: <FaDatabase /> },
  { name: 'C Programming', icon: <SiC /> },
  { name: 'C++', icon: <SiCplusplus /> },
  { name: 'Java', icon: <DiJava /> },
];

function About() {
  const [resumeHover, setResumeHover] = React.useState(false);
  const [viewBtnHover, setViewBtnHover] = React.useState(false);
  const [downloadBtnHover, setDownloadBtnHover] = React.useState(false);
  const [skillHoverIndex, setSkillHoverIndex] = React.useState(null);

  return (
    <Container className="my-5">
      <h1 style={styles.heading}>ABOUT ME</h1>

      <div
        style={{
          ...styles.sectionResume,
          ...(resumeHover ? styles.sectionResumeHover : {}),
        }}
        onMouseEnter={() => setResumeHover(true)}
        onMouseLeave={() => setResumeHover(false)}
      >
        <p>
          I’m <strong>Divyanka Barnwal</strong>, a <strong>Full Stack Web Developer</strong> with strong skills in front-end and back-end technologies.
          My passion lies in building responsive, interactive, and modern web applications. I am currently pursuing a BCA
          and always eager to learn and grow in the tech space.
        </p>

        <div style={styles.resumeButtons}>
          <Button
            href="/resume.pdf"
            target="_blank"
            style={{
              ...styles.button,
              ...(viewBtnHover ? styles.buttonHover : {}),
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
            onMouseEnter={() => setViewBtnHover(true)}
            onMouseLeave={() => setViewBtnHover(false)}
          >
            <FaEye style={{ color: 'black' }} />
            View Resume
          </Button>

          <Button
            href="/resume.pdf"
            download
            style={{
              ...styles.button,
              ...(downloadBtnHover ? styles.buttonHover : {}),
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
            onMouseEnter={() => setDownloadBtnHover(true)}
            onMouseLeave={() => setDownloadBtnHover(false)}
          >
            <FaDownload style={{ color: 'black' }} />
            Download Resume
          </Button>
        </div>
      </div>

      <div style={styles.sectionSkills}>
        <h2 className="mb-3 text-center">SKILLS</h2>
        <div className="d-flex flex-wrap justify-content-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              style={{
                ...styles.skillBadge,
                ...(skillHoverIndex === index ? styles.skillBadgeHover : {}),
              }}
              onMouseEnter={() => setSkillHoverIndex(index)}
              onMouseLeave={() => setSkillHoverIndex(null)}
            >
              {React.cloneElement(skill.icon, { style: { color: 'black' } })}
              {skill.name}
            </div>
          ))}
        </div>

        
      </div>
          
    </Container>
  );
}

export default About;
