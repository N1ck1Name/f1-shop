import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/components/footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="inner">
        <div className="brand">F1 Shop</div>

        <nav className="links" aria-label="Footer">
          <a href="#" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Terms of Service</a>
        </nav>

        <div className="social" aria-label="Social links">
          <a href="#" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>

        <small className="footnote">
          &copy; 2025 F1 Shop&nbsp;|&nbsp;GitHub / LinkedIn
        </small>
      </div>
    </footer>
  );
};

export default Footer;
