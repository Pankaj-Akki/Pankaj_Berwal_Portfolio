import { useEffect, useRef } from "react";
import "./SkillsSection.css";

export default function SkillsSection() {
  const skillsRef = useRef(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "React", "Tailwind CSS"],
    },
    {
      title: "Backend & CMS",
      skills: ["PHP", "WordPress", "Shopify", "WooCommerce", "Couch CMS"],
    },
    {
      title: "Design & Tools",
      skills: ["Adobe Photoshop", "Figma", "Web Design", "E-Commerce"],
    },
    {
      title: "Professional Skills",
      skills: ["Communication", "Client Relations", "Data Analysis"],
    },
  ];

  useEffect(() => {
    const items = skillsRef.current.querySelectorAll(".skill-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));
  }, []);

  return (
    <section className="skills-section" id="skills" ref={skillsRef}>
      <h2 className="skills-title">Skills & Expertise</h2>
      <p className="skills-intro text-lg text-gray-300 max-w-3xl mx-auto mt-4 mb-10 leading-relaxed">
        With a strong foundation in <span className="text-[#9cee69] font-semibold">frontend
        development</span> and hands-on experience in various content management systems, I bring
        both creativity and technical expertise to every project.  
        <br />
        <br />
        From designing pixel-perfect UIs to developing responsive and optimized websites, I thrive
        on turning ideas into seamless digital experiences that deliver results.
      </p>

      <div className="skills-grid">
        {skillCategories.map((cat, index) => (
          <div className="skill-card" key={index}>
            <h3 className="skill-category">{cat.title}</h3>
            <ul className="skill-list">
              {cat.skills.map((skill, i) => (
                <li key={i} className="skill-tag">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
