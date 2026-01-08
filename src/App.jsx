import React, { useState } from 'react';
import './App.css';

function App() {
  // Your data - MODIFY HERE!
  const [userData] = useState({
    name: "AdamWells",
    title: "Fullstack Developer | Game Dev | Android Dev",
    bio: "Learning software development with focus on fullstack, games, and mobile apps. Turning ideas into code and creating practical solutions.",
    email: "adamwellsbelialfuneral@gmail.com",
    github: "https://github.com/AdamWellsBelialFuneral",
    linkedin: "https://www.linkedin.com/in/adamwellsbelialfuneral/",
    avatar: "/images/profile picture.jpg"
  });

  const [projects] = useState([
    {
      title: <>🎮 Rain//Castle<br />Survival-Horror Game</>,
      description: <>You're running from the rain in the forest when you spot a castle in which you decide to take shelter, but then you end up locked inside.<br />You are not alone</>,
      status: "in-development",
      tech: ["Godot", "Blender", "GDscript", "Cross-platform"],
      link: "https://www.youtube.com/watch?v=A4HxES6cCQA",
      video: "/videos/rain-castle.mp4"
    },



  ]);

  const [skills] = useState([
    "React", "JavaScript", "HTML5", "CSS3", 
    "Godot", "Git",
    "Android", 
    "Firebase", "SQL", "REST API"
  ]);

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${contactForm.name}! In a real portfolio, this would send an email.`);
    setContactForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="portfolio-container">
      {/* Header */}
      <header className="portfolio-header">
        <div className="nav-container">
          <div className="logo">AdamWells</div>
          <nav className="nav-menu">
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="avatar-container">
          <div className="avatar-circle">
            <img src={userData.avatar}/>
          </div>
        </div>
        
        <h1 className="hero-name">{userData.name}</h1>
        <h2 className="hero-title">{userData.title}</h2>
        <p className="hero-bio">{userData.bio}</p>
        
        <div className="social-container">

          <a href={userData.github} target="_blank" rel="noopener noreferrer" className="social-link github">
            <span className="social-icon">💻</span> GitHub
          </a>

          <a href={userData.linkedin} target="_blank" rel="noopener noreferrer" className="social-link linkedin">
            <span className="social-icon">👔</span> LinkedIn
          </a>

          <a href={`mailto:${userData.email}`} target="_blank" rel="noopener noreferrer" className="social-link email">
            <span className="social-icon">✉️</span> Email
          </a>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-projects">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">What I'm currently developing</p>
        
        <div className="projects-grid">
  {projects.map((project, index) => (
    <div key={index} className={`project-card ${project.status}`}>
      {/*

      {project.video && (
        <div className="video-window">
          <iframe width= "100%" className= "project-video"
            src={`https://www.youtube.com/embed/${project.link.split('v=')[1]}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
          />
        </div>
      )}
      */}
      
      {project.video && (
        <div className="video-window">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="project-video"
          >
            <source src={project.video} type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
        </div>
      )}
      
      {/* CONTEÚDO SOBREPOSTO (opcional, se quiser) */}
      <div className="card-overlay">
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          <span className={`project-status ${project.status}`}>
            {project.status === "in-development" ? "🟡 In Development" : 
             "🔵 Planning"}
          </span>
        </div>
        
        <div className="description-container">
          <p className="project-description">{project.description}</p>
        </div>
        
        <div className="tech-tags">
          {project.tech.map((tech, i) => (
            <span key={i} className="tech-tag">{tech}</span>
          ))}
        </div>
        
        <a href={project.link} target="_blank" className="project-link">
          View Details →
        </a>
      </div>
      
    </div>
  ))}
</div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-skills">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">Technologies I master and I'm learning</p>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-contact">
        <h2 className="section-title">Get in Touch</h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3 className="contact-subtitle">Let's talk! 👋</h3>
            <p className="contact-text">
              I'm always open to talk about technology, opportunities 
              or collaborations on interesting projects.
            </p>
            

            <div className="contact-details">

              <div className="detail-item">
                <span className="detail-icon">📧</span>
                <a href={`mailto:${userData.email}`} className="detail-link">
                  {userData.email}
                </a>
              </div>

              <div className="detail-item">
                <span className="detail-icon">💼</span>
                <a href={userData.linkedin} className="detail-link">LinkedIn</a>
              </div>

              <div className="detail-item">
                <span className="detail-icon">💻</span>
                <a href={userData.github} className="detail-link">GitHub</a>
              </div>

            </div>
          </div>
          {/*}
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={contactForm.name}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter your name"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={contactForm.email}
                onChange={handleInputChange}
                className="form-input"
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={contactForm.message}
                onChange={handleInputChange}
                className="form-textarea"
                placeholder="Hello, I'd like to talk about..."
                rows="5"
                required
              />
            </div>
            
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
          {*/}

        </div>
      </section>

      {/* Footer */}
      <footer className="portfolio-footer">
        <p className="footer-text">
          © {new Date().getFullYear()} {userData.name}. Made with React and lots of ☕
        </p>
        <p className="footer-subtext">
          Portfolio in constant evolution
        </p>
      </footer>
    </div>
  );
}

export default App;