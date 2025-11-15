import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* 🔝 Top Bar */}
      <div className="topbar">
        <div className="marquee">
          <div className="marquee-content">
            <span>💼 Hire me for any project development 🚀</span>
            <span>💼 Hire me for any project development 🚀</span>
            <span>💼 Hire me for any project development 🚀</span>
            <span>💼 Hire me for any project development 🚀</span>
            <span>💼 Hire me for any project development 🚀</span>
            <span>💼 Hire me for any project development 🚀</span>
            <span>💼 Hire me for any project development 🚀</span>
            <span>💼 Hire me for any project development 🚀</span>
          </div>
        </div>
      </div>

      {/* 🔹 Main Header */}
      <header className="header">
        <img src="/logo.png" alt="Pankaj" className="logo-image" />

        {/* Desktop Menu */}
        <nav className="nav desktop-nav">
          <a href="/">Home</a>
          <a href="#journey">My Journey</a>
          <a href="#skills">Skills</a>
          <a href="#faq">FAQ'S</a>
        </nav>

        {/* Hamburger Button */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      {/* Mobile Menu */}
      <nav className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#journey" onClick={() => setMenuOpen(false)}>My Journey</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ'S</a>
      </nav>
    </>
  );
}
