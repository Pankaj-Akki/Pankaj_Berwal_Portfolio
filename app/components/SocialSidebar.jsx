import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./SocialSidebar.css";

export default function SocialSidebar() {
  return (
    <div className="social-sidebar">
      <a href="#" className="social-item">
        <FaFacebookF />
        <span className="label">PankajBerwal_</span>
      </a>

      <a href="#" className="social-item">
        <FaLinkedinIn />
        <span className="label">PankajBerwal_</span>
      </a>

      <a href="#" className="social-item">
        <FaInstagram />
        <span className="label">PankajBerwal_</span>
      </a>
    </div>
  );
}
