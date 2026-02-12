import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Server, 
  Monitor, 
  Shield, 
  Wifi, 
  Database, 
  Printer, 
  ArrowRight,
  Briefcase
} from 'lucide-react';
import './ServicesPage.css';

const ServicesPage = () => {
  return (
    <div className="services-page">
      
      {/* --- Hero Section --- */}
      <header className="services-hero">
        <div className="hero-content">
          <h1>Comprehensive IT Solutions</h1>
          <p>
            Whether it's a broken server or a slow network, we dispatch the 
            right certified expert to fix it.
          </p>
        </div>
      </header>

      <div className="services-container">
        
        {/* --- Category 1: Hardware Support --- */}
        <section className="service-category">
          <div className="category-header">
            <div className="icon-badge orange">
              <Server size={28} />
            </div>
            <div>
              <h2>Hardware Infrastructure</h2>
              <p>Physical repairs and installations. We send engineers on-site.</p>
            </div>
          </div>

          <div className="grid-3">
            {/* Service 1 */}
            <div className="service-card">
              <h3>Desktop & Laptop Repair</h3>
              <p>Screen replacements, battery swaps, and motherboard diagnostics for all major brands (Dell, HP, Apple).</p>
            </div>
            {/* Service 2 */}
            <div className="service-card">
              <h3>Server Maintenance</h3>
              <p>RAID configuration, physical cleaning, thermal paste application, and rack installation.</p>
            </div>
            {/* Service 3 */}
            <div className="service-card">
              <h3>Printer & Peripherals</h3>
              <p>Setup and troubleshooting for office printers, scanners, and biometic devices.</p>
            </div>
          </div>
        </section>

        {/* --- Category 2: Software Support --- */}
        <section className="service-category">
          <div className="category-header">
            <div className="icon-badge blue">
              <Monitor size={28} />
            </div>
            <div>
              <h2>Software & Cloud</h2>
              <p>Instant remote support or on-site configuration.</p>
            </div>
          </div>

          <div className="grid-3">
            {/* Service 1 */}
            <div className="service-card">
              <h3>OS & Installation</h3>
              <p>Windows 11 / macOS / Linux installation, driver updates, and licensed software deployment.</p>
            </div>
            {/* Service 2 */}
            <div className="service-card">
              <h3>Virus & Malware Removal</h3>
              <p>Deep system scanning, ransomware recovery, and installation of enterprise-grade antivirus.</p>
            </div>
            {/* Service 3 */}
            <div className="service-card">
              <h3>Data Recovery</h3>
              <p>Retrieving lost files from corrupted hard drives, USBs, or accidental deletions.</p>
            </div>
          </div>
        </section>

        {/* --- Category 3: Network & Business --- */}
        <section className="service-category">
          <div className="category-header">
            <div className="icon-badge green">
              <Wifi size={28} />
            </div>
            <div>
              <h2>Network & Security</h2>
              <p>Keeping your business connected and secure.</p>
            </div>
          </div>

          <div className="grid-3">
            <div className="service-card">
              <h3>Wi-Fi & Cabling</h3>
              <p>Structured cabling (Cat6), router configuration, and mesh Wi-Fi setup for large offices.</p>
            </div>
            <div className="service-card">
              <h3>Firewall & VPN</h3>
              <p>Secure remote access setup (VPN) and firewall policies to block unauthorized access.</p>
            </div>
            <div className="service-card">
              <h3>Backup Solutions</h3>
              <p>Automated daily backups to local NAS or Cloud (AWS/Azure/Google Drive).</p>
            </div>
          </div>
        </section>

        {/* --- AMC / Managed Services CTA --- */}
        <div className="amc-banner">
          <div className="amc-content">
            <Briefcase size={40} className="amc-icon" />
            <div>
              <h3>Looking for Annual Maintenance (AMC)?</h3>
              <p>Get priority support, monthly checkups, and lower rates with our Business Plans.</p>
            </div>
          </div>
          <Link to="/contact">
            <button className="btn-white">Contact Sales</button>
          </Link>
        </div>

      </div>

      {/* --- Bottom CTA --- */}
      <section className="bottom-cta">
        <h2>Ready to fix your issue?</h2>
        <Link to="/book-engineer">
          <button className="btn-primary-lg">
            Book an Engineer Now <ArrowRight size={20} />
          </button>
        </Link>
      </section>

    </div>
  );
};

export default ServicesPage;