import React from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Settings, 
  LogOut, 
  Bell, 
  Search,
  Clock,
  CheckCircle,
  MapPin,
  Phone,
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import './ClientDashboard.css';

// --- Mock Data ---
const activeTicket = {
  id: "TKT-8842",
  subject: "Server Rack Overheating",
  status: "In Progress", // Options: Pending, Dispatched, In Progress, Resolved
  urgency: "High",
  dateCreated: "Jan 15, 2026",
  engineer: {
    name: "Rahul Sharma",
    role: "Senior Network Engineer",
    image: "/api/placeholder/80/80", // Replace with real image
    phone: "+91 98765 43210",
    eta: "Arriving in 15 mins"
  },
  timeline: [
    { step: 1, label: "Ticket Received", time: "10:30 AM", completed: true },
    { step: 2, label: "Engineer Assigned", time: "10:45 AM", completed: true },
    { step: 3, label: "En Route", time: "11:00 AM", completed: true },
    { step: 4, label: "Work in Progress", time: "11:30 AM", completed: true }, // Current
    { step: 5, label: "Resolved", time: "-", completed: false },
  ]
};

const recentHistory = [
  { id: "TKT-8100", subject: "Printer Setup", date: "Jan 10, 2026", status: "Resolved" },
  { id: "TKT-7540", subject: "Outlook Sync Issue", date: "Dec 22, 2025", status: "Resolved" },
];

const ClientDashboard = () => {
  return (
    <div className="dashboard-container">
      
      {/* --- Sidebar --- */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <h2>TechDispatch</h2>
        </div>
        <nav className="sidebar-nav">
          <a href="#" className="nav-item active"><LayoutDashboard size={20}/> Dashboard</a>
          <a href="#" className="nav-item"><FileText size={20}/> My Tickets</a>
          <a href="#" className="nav-item"><Settings size={20}/> Settings</a>
        </nav>
        <div className="sidebar-footer">
          <button className="logout-btn"><LogOut size={18}/> Log Out</button>
        </div>
      </aside>

      {/* --- Main Content --- */}
      <main className="main-content">
        
        {/* Top Header */}
        <header className="top-bar">
          <div className="welcome-text">
            <h1>Welcome back, Alex.</h1>
            <p>Here is what's happening with your IT systems.</p>
          </div>
          <div className="top-actions">
            <div className="search-box">
              <Search size={18} />
              <input type="text" placeholder="Search tickets..." />
            </div>
            <button className="icon-btn"><Bell size={20} /></button>
            <div className="user-avatar">AD</div>
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className="dashboard-grid">
          
          {/* LEFT COLUMN: Active Ticket (The Hero) */}
          <section className="active-ticket-section">
            <h3 className="section-title">Active Support Request</h3>
            
            <div className="ticket-card">
              <div className="ticket-header">
                <div>
                  <div className="ticket-id">#{activeTicket.id}</div>
                  <h2 className="ticket-subject">{activeTicket.subject}</h2>
                </div>
                <span className={`urgency-badge ${activeTicket.urgency.toLowerCase()}`}>
                  {activeTicket.urgency} Priority
                </span>
              </div>

              {/* Progress Tracker */}
              <div className="progress-track">
                {activeTicket.timeline.map((step, index) => (
                  <div key={index} className={`track-step ${step.completed ? 'completed' : ''}`}>
                    <div className="dot">
                      {step.completed && <CheckCircle size={14} />}
                    </div>
                    <span className="step-label">{step.label}</span>
                    <span className="step-time">{step.time}</span>
                  </div>
                ))}
                <div className="track-line"></div> {/* Visual line connecting dots */}
              </div>

              <div className="divider"></div>

              {/* Engineer Profile */}
              <div className="engineer-panel">
                <div className="eng-info">
                  <img src={activeTicket.engineer.image} alt="Engineer" className="eng-pic" />
                  <div>
                    <p className="sub-label">Assigned Engineer</p>
                    <h4>{activeTicket.engineer.name}</h4>
                    <p className="eng-role">{activeTicket.engineer.role}</p>
                  </div>
                </div>
                
                <div className="eng-status">
                  <div className="eta-box">
                    <Clock size={18} />
                    <span>{activeTicket.engineer.eta}</span>
                  </div>
                  <div className="action-row">
                    <button className="btn-action"><Phone size={16} /> Call</button>
                    <button className="btn-action"><MessageSquare size={16} /> Chat</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* RIGHT COLUMN: Quick Stats & History */}
          <aside className="side-panel">
            
            {/* Quick Actions */}
            <div className="quick-actions">
               <button className="btn-primary-block">+ Create New Ticket</button>
            </div>

            {/* Recent History */}
            <div className="history-card">
              <h3>Recent History</h3>
              <div className="history-list">
                {recentHistory.map(ticket => (
                  <div key={ticket.id} className="history-item">
                    <div className="history-icon resolved">
                      <CheckCircle size={16} />
                    </div>
                    <div className="history-details">
                      <h4>{ticket.subject}</h4>
                      <p>{ticket.id} • {ticket.date}</p>
                    </div>
                    <span className="status-text">{ticket.status}</span>
                  </div>
                ))}
              </div>
              <button className="btn-link">View All Tickets</button>
            </div>

            {/* System Status (Optional Bonus) */}
            <div className="system-status-card">
              <h3>System Status</h3>
              <div className="status-row success">
                <div className="dot-indicator"></div>
                <span>Email Servers Online</span>
              </div>
              <div className="status-row warning">
                <div className="dot-indicator"></div>
                <span>Backup Delay (Cloud)</span>
              </div>
            </div>

          </aside>
        </div>
      </main>
    </div>
  );
};

export default ClientDashboard;