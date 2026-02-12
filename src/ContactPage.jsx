import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send,
  AlertCircle
} from 'lucide-react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! We will contact you shortly.");
    // Add backend logic here
  };

  return (
    <div className="contact-page">
      
      {/* --- Header --- */}
      <header className="contact-hero">
        <h1>Get in Touch</h1>
        <p>Have a question about our services? We're here to help.</p>
        <div className="emergency-banner">
          <AlertCircle size={20} />
          <span>
            <strong>System Down?</strong> Don't use this form. 
            <a href="/book-engineer"> Book an Emergency Engineer</a> or call us immediately.
          </span>
        </div>
      </header>

      <div className="contact-container">
        
        {/* --- Left Column: Contact Info --- */}
        <div className="contact-info">
          
          {/* Card 1: Call Us */}
          <div className="info-card">
            <div className="icon-circle">
              <Phone size={24} />
            </div>
            <div>
              <h3>Phone Support</h3>
              <p className="label">General Inquiries (9am - 6pm)</p>
              <a href="tel:+919876543210" className="contact-link">+91 98765 43210</a>
              <p className="label mt-2">24/7 Emergency Line</p>
              <a href="tel:+919876543211" className="contact-link emergency">+91 98765 43211</a>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="info-card">
            <div className="icon-circle">
              <Mail size={24} />
            </div>
            <div>
              <h3>Email Us</h3>
              <p className="label">Business & Partnerships</p>
              <a href="mailto:hello@techdispatch.com" className="contact-link">hello@techdispatch.com</a>
              <p className="label mt-2">Support Desk</p>
              <a href="mailto:support@techdispatch.com" className="contact-link">support@techdispatch.com</a>
            </div>
          </div>

          {/* Card 3: Location */}
          <div className="info-card">
            <div className="icon-circle">
              <MapPin size={24} />
            </div>
            <div>
              <h3>Our HQ</h3>
              <p className="address">
                TechDispatch Towers, 4th Floor<br />
                Cyber City, Gurgaon<br />
                India, 122002
              </p>
              <div className="map-placeholder">
                <img src="/api/placeholder/400/200" alt="Map Location" />
              </div>
            </div>
          </div>

        </div>

        {/* --- Right Column: Message Form --- */}
        <div className="contact-form-wrapper">
          <div className="form-header">
            <MessageSquare size={24} className="text-primary" />
            <h2>Send a Message</h2>
          </div>
          <p className="form-desc">
            For non-urgent queries, partnerships, or feedback. 
          </p>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="John Doe" 
                required 
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="john@company.com" 
                required 
              />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <select name="subject" value={formData.subject} onChange={handleChange}>
                <option value="General">General Inquiry</option>
                <option value="Partnership">Partnership / Vendor</option>
                <option value="Feedback">Feedback</option>
                <option value="Billing">Billing Question</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea 
                name="message" 
                rows="5" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="How can we help you today?" 
                required 
              ></textarea>
            </div>

            <button type="submit" className="btn-send">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;