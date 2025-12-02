import React from "react";
import "./WorkSection.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern personal portfolio showcasing skills and experience.",
    tech: ["React", "CSS", "JavaScript"],
    image: "/thebrassleaf.webp",
  },
  {
    title: "E-commerce Store",
    description: "A complete e-commerce store with payment gateway integration.",
    tech: ["Shopify", "PHP", "WooCommerce"],
    image: "/superchillproducts.webp",
  },
  {
    title: "Business Website",
    description: "Professional business website with SEO optimization.",
    tech: ["WordPress", "Couch CMS", "PHP"],
    image: "/plassestrengthandfitnessplassestrengthandfitness.png",
  },
  {
    title: "Landing Page",
    description: "High-converting marketing landing page design.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/jio.png",
  },
  {
    title: "Blog Platform",
    description: "SEO-friendly blog system with admin control panel.",
    tech: ["WordPress", "PHP"],
    image: "/adhishrihaan.webp",
  },
  {
    title: "Shopify Store",
    description: "Custom Shopify store with optimized UI and SEO.",
    tech: ["Shopify", "Liquid"],
    image: "/indiyumstore.webp",
  },
  {
    title: "Admin Dashboard",
    description: "Analytics dashboard with charts and permissions.",
    tech: ["React", "Node.js"],
    image: "/pathankotfruitcompany.webp",
  },
  {
    title: "Chat App",
    description: "Realtime chat app with secure messaging.",
    tech: ["Socket.io", "Node.js"],
    image: "/dodgeprogram.webp",
  },
  {
    title: "Company Profile",
    description: "Corporate website for brands and agencies.",
    tech: ["WordPress", "PHP"],
    image: "/work/company.png",
  },
];

const WorkSection = () => {
  return (
    <div className="work-wrapper">
      <h2 className="work-title">My Work</h2>

      <div className="work-grid">
        {projects.map((p, i) => (
          <div key={i} className="work-card">

            <div className="image-frame">
              <img src={p.image} alt={p.title} className="work-img" />
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
