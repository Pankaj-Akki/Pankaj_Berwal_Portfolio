import React from "react";
import "./WorkSection.css";

const projects = [
  {
    title: "The Brass Leaf",
    description: "A modern personal portfolio showcasing skills and experience.",
    tech: ["React", "CSS", "JavaScript"],
    image: "/thebrassleaf.webp",
  },
  {
    title: "Superchill Products",
    description: "A complete e-commerce store with payment gateway integration.",
    tech: ["Shopify", "PHP", "WooCommerce"],
    image: "/superchillproducts.webp",
  },
  {
    title: "Plasse Strength",
    description: "Professional Gym website with SEO optimization.",
    tech: ["WordPress", "Couch CMS", "PHP"],
    image: "/plassestrengthandfitnessplassestrengthandfitness.png",
  },
  {
    title: "Jio Pack",
    description: "High-converting marketing landing page design.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/jio.png",
  },
  {
    title: "Adhishrihaan",
    description: "SEO-friendly NGO system with admin control panel.",
    tech: ["WordPress", "PHP"],
    image: "/adhishrihaan.webp",
  },
  {
    title: "Indiyumstore",
    description: "Custom Shopify store with optimized UI and SEO.",
    tech: ["Shopify", "Liquid"],
    image: "/indiyumstore.webp",
  },
  {
    title: "Pathankot Fruit",
    description: "E-Commerce Website with charts and permissions.",
    tech: ["React", "Node.js"],
    image: "/pathankotfruitcompany.webp",
  },
  {
    title: "Dodge Program",
    description: "Realtime chat app with secure messaging.",
    tech: ["Socket.io", "Node.js"],
    image: "/dodgeprogram.webp",
  },
  {
    title: "Kemexel",
    description: "Corporate website for brands and agencies.",
    tech: ["WordPress", "PHP"],
    image: "/kemexel.webp",
  },
   {
    title: "JNI Wholesale",
    description: "E-commerce website for brands and agencies.",
    tech: ["Shopify"],
    image: "/jniwholesale.webp",
  },
   {
    title: "Mobimonster",
    description: "Corporate website for brands and agencies.",
    tech: ["WordPress", "PHP"],
    image: "/mobimonster.webp",
  },
   {
    title: "Kemexel",
    description: "Corporate website for brands and agencies.",
    tech: ["WordPress", "PHP"],
    image: "/kemexel.webp",
  },
   {
    title: "Kemexel",
    description: "Corporate website for brands and agencies.",
    tech: ["WordPress", "PHP"],
    image: "/kemexel.webp",
  },
   {
    title: "Kemexel",
    description: "Corporate website for brands and agencies.",
    tech: ["WordPress", "PHP"],
    image: "/kemexel.webp",
  }, {
    title: "Kemexel",
    description: "Corporate website for brands and agencies.",
    tech: ["WordPress", "PHP"],
    image: "/kemexel.webp",
  },
   {
    title: "Kemexel",
    description: "Corporate website for brands and agencies.",
    tech: ["WordPress", "PHP"],
    image: "/kemexel.webp",
  },
   {
    title: "Fusion Saloon",
    description: "Saloon website for brands.",
    tech: ["WordPress", "PHP"],
    image: "/fusionsaloon.webp",
  },
   {
    title: "Tekrevol",
    description: "Corporate website for brands and agencies.",
    tech: ["WordPress", "PHP"],
    image: "/tekrevol.webp",
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
