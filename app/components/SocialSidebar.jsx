import { FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa";
import "./SocialSidebar.css";

export default function SocialSidebar() {
  return (
    <div className="social-sidebar">
     

   <a href="https://www.linkedin.com/in/pankaj-berwal-252447246" className="social-item" target="_blank">
        <FaLinkedinIn />
        <span className="label">Pankaj Berwal</span>
      </a>

      <a href="https://www.instagram.com/pankajberwal_/" className="social-item" target="_blank">
        <FaInstagram />
        <span className="label">pankajberwal_</span>
      </a>
       <a href="mailto:developerpankaj30@gmail.com" className="social-item">
        <FaEnvelope />
        <span className="label">developerpankaj30</span>
      </a>
    </div>
  );
}
