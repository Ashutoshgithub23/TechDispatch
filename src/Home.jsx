import React from 'react';
import {
  Cpu,
  Monitor,
  Server ,
  ShieldCheck,
  Clock,
  MapPin,
  ArrowRight,
  CheckCircle,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const HomePage = () => {
  return (
    <div className="home-container">
      {/* --- Navigation Bar --- */}
      <nav className="navbar">
        <div className="logo">
          <Cpu className="logo-icon" />
          <span>SSG TechDispatch</span>
        </div>

        <div className="nav-links">
         {/* Change href="#services" to standard Link */}
<Link to="/services">Services</Link>
          <Link to="/our-engineers">Our Engineers</Link>
         {/* In your Navbar.jsx */}
<Link to="/how-it-works">How it Works</Link>
          {/* In your Navbar.jsx */}
<Link to="/contact">Contact</Link>
{/* In Navbar.jsx inside the .nav-links div */}
<Link to="/blog">Blog</Link>
        </div>

        <Link to="/book-engineer" className="btn-primary" style={{ textDecoration: 'none' }}>
          Book an Engineer
        </Link>
      </nav>

      {/* --- Hero Section --- */}
      <header className="hero">
        <div className="hero-content">
          <h1>Expert IT Engineers.<br />On Demand.</h1>
          <p>
            Don't just file a ticket. We dispatch certified engineers to your location 
            or connect you remotely within minutes. Hardware fixes, software solutions, 
            and critical infrastructure support.
          </p>

          <div className="hero-buttons">
            <Link to="/book-engineer" className="btn-primary" style={{ textDecoration: 'none' }}>
              Book Engineer Now <ArrowRight size={18} />
            </Link>

            <button className="btn-secondary">{/* Change href="#services" to standard Link */}
<Link to="/services">Services</Link></button>
          </div>

          <div className="hero-trust">
            <span><CheckCircle size={16} /> Certified Experts</span>
            <span><CheckCircle size={16} /> 24/7 Availability</span>
            <span><CheckCircle size={16} /> On-Site & Remote</span>
          </div>
        </div>

 
        <div className="hero-image">
          <div className="image-placeholder">
            <img src="/5173528.jpg" alt="IT Engineer working on server" />
          </div>
        </div>
      </header>

      {/* --- Services --- */}
      <section id="services" className="services-section">
        <div className="section-header">
          <h2>How Can We Help You?</h2>
          <p>Select your issue to find the right specialist.</p>
        </div>

        <div className="service-cards">
          <div className="card hardware-card">
            <div className="icon-box">
              <Server size={40} />
            </div>
            <h3>Hardware Support</h3>
            <p>We dispatch an engineer to your physical location.</p>
            <ul>
              <li><CheckCircle size={14}/> Desktop & Laptop Repairs</li>
              <li><CheckCircle size={14}/> Server Maintenance</li>
              <li><CheckCircle size={14}/> Printer & Peripheral Setup</li>
            </ul>
          </div>

          <div className="card software-card">
            <div className="icon-box">
              <Monitor size={40} />
            </div>
            <h3>Software Support</h3>
            <p>Instant remote connection for immediate fixes.</p>
            <ul>
              <li><CheckCircle size={14}/> OS & Software Installation</li>
              <li><CheckCircle size={14}/> Virus & Malware Removal</li>
              <li><CheckCircle size={14}/> Cloud & Email Configuration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- Footer CTA --- */}
      <footer className="footer-cta">
        <h2>Ready to get your systems back online?</h2>
        <p>Skip the chat bots. Talk to a real engineer today.</p>
        <div className="footer-actions">
          <Link to="/book-engineer" className="btn-primary" style={{ textDecoration: 'none' }}>
            Book an Engineer
          </Link>
          <button className="btn-outline">
            <Phone size={18} /> Call Emergency Line
          </button>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
