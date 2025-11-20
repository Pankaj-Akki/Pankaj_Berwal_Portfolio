import React from "react";

const Education = () => {
  return (
    <section className="education-section">

      <h2 className="section-title">Education</h2>

      {/* MCA */}
      <div className="education-card">
        <img 
          src="/1631348307530.jpeg" 
          alt="GJU Logo" 
          className="edu-logo" 
        />
        <div>
          <h3>Master of Computer Applications (MCA)</h3>
          <p><strong>University:</strong> Guru Jambheshwar University</p>
          <p><strong>Duration:</strong> Sep 2024 – Present</p>
          <p><strong>Status:</strong> Ongoing</p>
          <p><strong>Field:</strong> Computer & Information Sciences</p>
        </div>
      </div>

      {/* BCA */}
      <div className="education-card">
        <img 
          src="/1631348307530.jpeg" 
          alt="GJU Logo" 
          className="edu-logo" 
        />
        <div>
          <h3>Bachelor of Computer Applications (BCA)</h3>
          <p><strong>University:</strong> Guru Jambheshwar University</p>
          <p><strong>Duration:</strong> 2018 – Jan 2022</p>
          <p><strong>Percentage:</strong> 71%</p>
        </div>
      </div>

      <h2 className="section-title">Certifications</h2>

      {/* Frontend Development Certification */}
      <div className="education-card">
        <img 
          src="/courseralearning_logo.jpeg" 
          alt="Coursera Logo" 
          className="edu-logo" 
        />
        <div>
          <h3>Frontend Development</h3>
          <p><strong>Platform:</strong> Coursera</p>
          <p><strong>Grade:</strong> A</p>
          <p>I received a certification in Frontend Development from Coursera.</p>
        </div>
      </div>

      {/* WordPress Certification */}
      <div className="education-card">
        <img 
          src="/courseralearning_logo.jpeg" 
          alt="Coursera Logo" 
          className="edu-logo" 
        />
        <div>
          <h3>WordPress Development</h3>
          <p><strong>Platform:</strong> Coursera</p>
          <p><strong>Grade:</strong> A</p>
          <p>I received a certification in WordPress Development from Coursera.</p>
        </div>
      </div>

    </section>
  );
};

export default Education;
