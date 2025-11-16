import JourneySection from "./JourneySection";
import SkillsSection from "./SkillsSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import CallSidebar from "../components/CallSidebar";
import SocialSidebar from "../components/SocialSidebar";
import "./JourneySection.css";

export default function MainSection() {
  return (
    <>
      <CallSidebar />
      <SocialSidebar />

      {/* 🌟 Hero Section */}
      <main className="main-section">
        <div className="intro">
          <h2 className="text-3xl font-bold">
            Hi, I'm <span style={{ color: '#9cee69' }}>Pankaj</span>{' '}
            <span className="inline-block animate-wave">👋</span>
          </h2>

          <style jsx>{`
            @keyframes wave {
              0% { transform: rotate(0deg); }
              10% { transform: rotate(14deg); }
              20% { transform: rotate(-8deg); }
              30% { transform: rotate(14deg); }
              40% { transform: rotate(-4deg); }
              50% { transform: rotate(10deg); }
              60% { transform: rotate(0deg); }
              100% { transform: rotate(0deg); }
            }

            .animate-wave {
              transform-origin: 70% 70%;
              display: inline-block;
              animation: wave 2s infinite ease-in-out;
            }
          `}</style>

          <h1 className="title">Frontend Web Developer</h1>

          <p className="description">
            I craft modern, responsive, and user-friendly websites using
            <strong> React</strong>, <strong> JavaScript</strong>, and
            <strong> Tailwind CSS</strong>. Passionate about clean design,
            performance, and creating delightful user experiences.
          </p>

          <div className="buttons">

            {/* ✅ CV Download Button (opens PDF in new tab) */}
            <a
              href="/PANKAJ-BERWAL-CV-2026.pdf"
              className="btn primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>

            <a href="tel:9138427099" className="btn secondary">Contact Me</a>
          </div>
        </div>

      </main>

      {/* Sections */}
      <JourneySection />
      <SkillsSection />
      <FAQSection />
      <Footer />
    </>
  );
}
