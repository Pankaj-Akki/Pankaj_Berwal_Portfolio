import React from "react";
import "./WorkSection.css";

const imagePath = "/jio.png"; // image in public folder

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern personal portfolio showcasing skills and experience.",
    tech: ["React", "CSS", "JavaScript"],
  },
  {
    title: "E-commerce Store",
    description: "A complete e-commerce store with payment gateway integration.",
    tech: ["Shopify", "PHP", "WooCommerce"],
  },
  {
    title: "Business Website",
    description: "Professional business website with SEO optimization.",
    tech: ["WordPress", "Couch CMS", "PHP"],
  },
  {
    title: "Landing Page",
    description: "High-converting marketing landing page design.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Blog Platform",
    description: "SEO-friendly blog system with admin control panel.",
    tech: ["WordPress", "PHP"],
  },
  {
    title: "Shopify Store",
    description: "Custom Shopify theme & product pages for brand identity.",
    tech: ["Shopify", "Liquid"],
  },
  {
    title: "Admin Dashboard",
    description: "Analytics dashboard with charts, tables, role permissions.",
    tech: ["React", "Node.js"],
  },
  {
    title: "Chat App",
    description: "Real-time chat application with secure messaging.",
    tech: ["Socket.io", "Node.js"],
  },
  {
    title: "Company Profile",
    description: "Clean company profile website for corporate branding.",
    tech: ["WordPress", "PHP"],
  }
];

const WorkSection = () => {
  return (
    <div className="work-wrapper">
      <h2 className="work-title">My Work</h2>

      <div className="work-grid">
        {projects.map((p, i) => (
          <div key={i} className="work-card">

            {/* IMAGE WITH SLIDE EFFECT */}
            <div className="image-frame">
              <img src={imagePath} alt={p.title} className="work-img" />
            </div>

            <h3 className="work-card-title">{p.title}</h3>

            <p className="work-description">{p.description}</p>

            <div className="tech-container">
              {p.tech.map((t, idx) => (
                <span key={idx} className="tech-badge">{t}</span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkSection;
