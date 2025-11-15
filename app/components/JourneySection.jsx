export default function JourneySection() {
    const experiences = [
      {
        company: "Akki Studios",
        logo: "/akki.jpeg",
        role: "Senior Web Developer",
        period: "Feb 2025 – Present",
        location: "Mohali · On-site",
        description: `As a Senior Web Developer at Akki Studios, I lead the design, development, and optimization of high-performance websites and web applications tailored to client needs.`,
        highlights: [
          "Collaborating with cross-functional teams including designers, project managers, and QA to deliver robust web solutions.",
          "Leading the development of custom websites and e-commerce platforms using HTML5, CSS3, JavaScript, React, PHP, Shopify, Couch CMS, and WordPress.",
          "Ensuring code quality and maintainability through Git and code reviews.",
          "Driving UI/UX enhancements to improve engagement and site performance.",
          "Mentoring junior developers and managing project timelines.",
        ],
      },
      {
        company: "2aSquare Infotech Studios Pvt Ltd",
        logo: "/2a.jpeg",
        role: "Senior Frontend Developer",
        period: "Dec 2022 – Jan 2025",
        location: "Sahibzada Ajit Singh Nagar, Punjab · On-site",
        description: `Started as a Junior Developer and grew into a Senior Frontend Developer role through consistent learning and delivering quality projects.`,
        highlights: [
          "Built responsive interfaces using HTML, CSS, and Bootstrap.",
          "Developed interactive React apps and integrated PHP backends.",
          "Created custom WordPress, Shopify, and Wix solutions.",
          "Focused on performance optimization and maintainable code.",
        ],
      },
      {
        company: "Omninos Solutions",
        logo: "/omni.jpeg",
        role: "Web Designer",
        period: "Sep 2022 – Dec 2022",
        location: "On-site",
        description: "Designed and maintained WordPress websites with clean UI and UX.",
        highlights: ["Developed themes and optimized layouts for usability."],
      },
      {
        company: "Anshaj",
        logo: "/ans.jpeg",
        role: "Web Designer (Trainee)",
        period: "Jun 2022 – Sep 2022",
        location: "Sahibzada Ajit Singh Nagar, Punjab",
        description:
          "Worked on e-commerce landing pages and small frontend modules after completing training.",
        highlights: ["Gained hands-on experience in WordPress and landing page design."],
      },
    ];
  
    return (
      <section id="journey" className="journey-section">
        <h2 className="journey-title">My Journey</h2>
        <p className="journey-intro text-lg text-gray-300 max-w-3xl mx-auto mt-4 mb-10 leading-relaxed">
          Hi, I’m <span className="font-semibold text-[#9cee69]">Pankaj Berwal</span>, a passionate
          frontend developer with 2 years of experience crafting seamless digital experiences. I
          specialize in e-commerce solutions and have hands-on expertise in platforms like WordPress,
          Shopify, and Wix, as well as technologies like JavaScript, React, HTML, and Bootstrap.
          <br />
          <br />
          Currently based in Mohali, I’m continuously growing my skill set by diving into Azure, Power
          Apps, and other advanced tools to bring innovative solutions to the table.
          <br />
          <br />
          Let’s connect and build something incredible together! 🚀
        </p>
  
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <img src={exp.logo} alt={exp.company} className="company-logo" />
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <p className="period">{exp.period}</p>
                <p className="location">{exp.location}</p>
                <p className="desc">{exp.description}</p>
                <ul>
                  {exp.highlights.map((item, i) => (
                    <li key={i}>🔹 {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  