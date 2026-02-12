import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  Cpu 
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        
        {/* Column 1: Brand & Socials */}
        <div className="footer-section brand">
          <div className="logo-text">
            <Cpu size={24} className="text-primary"/> 
            <span>SSG TechDispatch</span>
          </div>
          <p>
            Expert IT support engineers dispatched to your location or connected remotely. 
            Reliable hardware and software solutions 24/7.
          </p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/how-it-works">How it Works</Link></li>
            <li><Link to="/our-engineers">Our Engineers</Link></li>
            <li><Link to="/blog">Tech Blog</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <Phone size={16} className="icon" /> 
              <span>+91 98765 43210</span>
            </li>
            <li>
              <Mail size={16} className="icon" /> 
              <span>support@ssgtech.com</span>
            </li>
            <li>
              <MapPin size={16} className="icon" /> 
              <span>Cyber City, Greater Noida, India</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar: Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SSG TechDispatch. All Rights Reserved.</p>
        <div className="legal">

        </div>
      </div>
    </footer>
  );
};

export default Footer;