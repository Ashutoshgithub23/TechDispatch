import React, { useState } from 'react';
import { 
  BadgeCheck, 
  Star, 
  Shield, 
  Award, 
  Briefcase, 
  MapPin,
  Filter
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './OurEngineers.css';

// --- Engineer Data with Indian Names ---
const engineersData = [
  {
    id: 1,
    name: "Arjun Mehta",
    role: "Senior Network Architect",
    category: "Network",
    rating: 4.9,
    jobsCompleted: 142,
    location: "Mumbai / Remote",
    certs: ["Cisco CCNP", "AWS Certified", "CompTIA Network+"],
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80" 
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Hardware Repair Specialist",
    category: "Hardware",
    rating: 5.0,
    jobsCompleted: 89,
    location: "New Delhi (On-Site)",
    certs: ["Apple Certified Mac Tech", "CompTIA A+", "Dell OEM"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Cybersecurity Analyst",
    category: "Software",
    rating: 4.8,
    jobsCompleted: 56,
    location: "Remote Only",
    certs: ["CISSP", "Ethical Hacker (CEH)", "Microsoft Azure"],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 4,
    name: "Anjali Patel",
    role: "Desktop Support Lead",
    category: "Hardware",
    rating: 4.9,
    jobsCompleted: 210,
    location: "Bangalore (On-Site)",
    certs: ["Microsoft Modern Desktop", "ITIL v4", "HP ExpertOne"],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 5,
    name: "Rohan Das",
    role: "Cloud Infrastructure Eng.",
    category: "Software",
    rating: 4.7,
    jobsCompleted: 34,
    location: "Remote Only",
    certs: ["Google Cloud Pro", "Docker Certified", "Kubernetes"],
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 6,
    name: "Sneha Reddy",
    role: "Server Maintenance Tech",
    category: "Network",
    rating: 4.9,
    jobsCompleted: 112,
    location: "Pune (On-Site)",
    certs: ["Windows Server Hybrid", "Linux Essentials", "VMware VCP"],
    image: "https://images.unsplash.com/photo-1598550874175-4d7112ee7f38?auto=format&fit=crop&w=150&q=80"
  }
];

const OurEngineers = () => {
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  // Filter Logic
  const filteredEngineers = filter === 'All' 
    ? engineersData 
    : engineersData.filter(eng => eng.category === filter);

  const handleBookClick = () => {
    navigate('/book-engineer'); 
  };

  return (
    <div className="engineers-page">
      
      {/* --- Header Section --- */}
      <header className="engineers-hero">
        <h1>Meet Our Experts</h1>
        <p>
          Every engineer is background-checked, certified, and strictly vetted 
          to ensure your data and hardware are in safe hands.
        </p>
        <div className="trust-badges">
          <span className="trust-tag"><Shield size={16}/> 100% Background Checked</span>
          <span className="trust-tag"><Award size={16}/> Industry Certified</span>
        </div>
      </header>

      {/* --- Filter Tabs --- */}
      <div className="filter-container">
        <div className="filter-tabs">
          {['All', 'Hardware', 'Software', 'Network'].map((cat) => (
            <button 
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {filter === cat && <Filter size={14} />} {cat}
            </button>
          ))}
        </div>
      </div>

      {/* --- Engineers Grid --- */}
      <div className="engineers-grid">
        {filteredEngineers.map((eng) => (
          <div key={eng.id} className="engineer-card">
            
            <div className="card-header">
              <img src={eng.image} alt={eng.name} className="profile-pic" />
              <div className="verified-badge" title="Identity Verified">
                <BadgeCheck size={18} fill="#2563eb" color="white" />
              </div>
            </div>

            <div className="card-body">
              <div className="name-row">
                <h3>{eng.name}</h3>
                <div className="rating">
                  <Star size={14} fill="#f59e0b" color="#f59e0b"/>
                  <span>{eng.rating}</span>
                </div>
              </div>
              
              <p className="role">{eng.role}</p>
              
              <div className="location">
                <MapPin size={14} /> {eng.location}
              </div>

              <div className="divider"></div>

              <div className="certs-section">
                <h4>Certifications:</h4>
                <div className="certs-list">
                  {eng.certs.map((cert, index) => (
                    <span key={index} className="cert-pill">{cert}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="card-footer">
              <div className="experience">
                <Briefcase size={14} /> {eng.jobsCompleted} Jobs Done
              </div>
              <button className="btn-book" onClick={handleBookClick}>
                Book {eng.name.split(' ')[0]}
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default OurEngineers;