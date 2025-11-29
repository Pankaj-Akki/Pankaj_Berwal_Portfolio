import React from "react";
import "./WorkSection.css";

const projects = [
  {
    title: "Portfolio Website",
    image: "/projects/portfolio.png",
    description: "A modern portfolio website built using React and CSS animations.",
    tech: ["React", "CSS3", "Framer Motion"],
    link: "#"
  },
  {
    title: "E-commerce Store",
    image: "/projects/store.png",
    description: "A full-stack e-commerce store with payments and admin panel.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    title: "Chat App",
    image: "/projects/chat.png",
    description: "Real-time chat application with WebSocket integration.",
    tech: ["React", "Socket.io", "Express"],
    link: "#"
  }
];

const WorkSection = () => {
  return (
    <div className="work-section">
      <h2 className="work-title">My Work</h2>

      <div className="work-cards">
        {projects.map((p, i) => (
          <div className="work-card" key={i}>
            <div className="image-wrapper">
              <img src={p.image} alt={p.title} className="project-image" />
            </div>

            <div className="card-details">
              <h3>{p.title}</h3>
              <p>{p.description}</p>

              <div className="tech-list">
                {p.tech.map((t, idx) => (
                  <span key={idx} className="tech-item">{t}</span>
                ))}
              </div>

              <a href={p.link} target="_blank" rel="noreferrer">
                <button className="view-btn">View Project</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkSection;
