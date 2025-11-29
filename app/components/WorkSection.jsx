import React from "react";
import "./WorkSection.css";

const projects = [
  {
    title: "Portfolio Website",
    image: "/projects/portfolio.png",
    description: "A modern personal portfolio showcasing skills and experience.",
    tech: ["React", "CSS", "JavaScript"],
  },
  {
    title: "E-commerce Store",
    image: "/projects/ecommerce.png",
    description: "A complete e-commerce store with payment gateway integration.",
    tech: ["Shopify", "PHP", "WooCommerce"],
  },
  {
    title: "Business Website",
    image: "/projects/business.png",
    description: "Professional business website with SEO optimization.",
    tech: ["WordPress", "Couch CMS", "PHP"],
  },
  {
    title: "Landing Page",
    image: "/projects/landing.png",
    description: "High-converting marketing landing page design.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Blog Platform",
    image: "/projects/blog.png",
    description: "SEO-friendly blog system with admin control panel.",
    tech: ["WordPress", "PHP"],
  },
  {
    title: "Shopify Store",
    image: "/projects/shopify.png",
    description: "Custom Shopify theme & product pages for brand identity.",
    tech: ["Shopify", "Liquid"],
  },
  {
    title: "Admin Dashboard",
    image: "/projects/dashboard.png",
    description: "Analytics dashboard with charts, tables, role permissions.",
    tech: ["React", "Node.js"],
  },
  {
    title: "Chat App",
    image: "/projects/chat.png",
    description: "Real-time chat application with secure messaging.",
    tech: ["Socket.io", "Node.js"],
  },
  {
    title: "Company Profile",
    image: "/projects/company.png",
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
            <img src={p.image} alt={p.title} className="work-img" />

            <h3 className="work-card-title">{p.title}</h3>

            <p className="work-description">{p.description}</p>

            <div className="tech-container">
              {p.tech.map((t, idx) => (
                <span key={idx} className="tech-badge">{t}</span>
              ))}
            </div>

            <button className="hire-btn">Hire Me</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkSection;
