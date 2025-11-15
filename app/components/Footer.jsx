import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top: Logo */}
      <div className="footer-logo">
        <img src="/logo.png" alt="Pankaj Logo" />
      </div>

      {/* Middle: Menu Links */}
      <div className="footer-menu">
        <a href="/">Home</a>
        <a href="#journey">My Journey</a>
        <a href="#skills">Skills</a>
        <a href="#faq">FAQ'S</a>
      </div>

      {/* Bottom: Copyright */}
      <div className="footer-copy">
        © {new Date().getFullYear()} Pankaj. All Rights Reserved.
      </div>

      {/* CTA */}
      <div className="footer-cta">
        LET’S WORK TOGETHER
      </div>
    </footer>
  );
}
