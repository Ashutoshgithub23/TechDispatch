import { useNavigate } from 'react-router-dom';
import { 
  FileText, 
  UserCheck, 
  Monitor, 
  Truck, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Clock
} from 'lucide-react';
import './HowItWorks.css';

const HowItWorks = () => {
  const navigate = useNavigate();

  return (
    <div className="hiw-page">
      
      {/* --- Hero Section --- */}
      <header className="hiw-hero">
        <h1>Support Made Simple.</h1>
        <p>From ticket to resolution in 4 easy steps. No contracts required.</p>
      </header>

      <div className="hiw-container">
        
        {/* --- Phase 1: The Booking (Common) --- */}
        <section className="phase-section">
          <div className="phase-line"></div>
          
          <div className="step-card">
            <div className="step-number">01</div>
            <div className="step-content">
              <div className="icon-box"><FileText size={32} /></div>
              <h3>Create Your Ticket</h3>
              <p>
                Use our <span className="highlight">Smart Booking Wizard</span> to describe your issue. 
                Select <strong>Hardware</strong> or <strong>Software</strong> and set the urgency level.
              </p>
            </div>
          </div>

          <div className="step-card right">
            <div className="step-number">02</div>
            <div className="step-content">
              <div className="icon-box"><UserCheck size={32} /></div>
              <h3>Intelligent Matching</h3>
              <p>
                We don't just send "anyone." Our system matches your ticket to an engineer 
                with the <strong>exact certification</strong> (e.g., Cisco, Microsoft, Apple) needed for your problem.
              </p>
            </div>
          </div>
        </section>

        {/* --- Phase 2: The Fork (Remote vs OnSite) --- */}
        <section className="fork-section">
          <h2>Two Ways We Fix It</h2>
          
          <div className="paths-container">
            {/* Path A: Software */}
            <div className="path-card software">
              <div className="badge-remote"><Zap size={14}/> Speed: Instant</div>
              <Monitor size={48} className="path-icon" />
              <h3>Software Issues</h3>
              <p className="sub-text">(Email, Virus, Slow PC, Config)</p>
              <ul className="path-steps">
                <li>1. You receive a secure connection link.</li>
                <li>2. Engineer remotely controls your screen.</li>
                <li>3. You watch as they fix the issue live.</li>
              </ul>
            </div>

            <div className="divider-text">OR</div>

            {/* Path B: Hardware */}
            <div className="path-card hardware">
              <div className="badge-onsite"><Clock size={14}/> Arrival: &lt; 4 Hrs</div>
              <Truck size={48} className="path-icon" />
              <h3>Hardware Issues</h3>
              <p className="sub-text">(Server Down, Printer, Parts)</p>
              <ul className="path-steps">
                <li>1. Engineer accepts job & location.</li>
                <li>2. You track their arrival via GPS.</li>
                <li>3. Physical repair performed on-site.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- Phase 3: Resolution (Common) --- */}
        <section className="phase-section final-phase">
          <div className="step-card final">
            <div className="step-number">04</div>
            <div className="step-content">
              <div className="icon-box success"><CheckCircle size={32} /></div>
              <h3>Verification & Closure</h3>
              <p>
                The engineer verifies the system is stable. You approve the fix, 
                and the ticket is closed. You receive a detailed report of what was done.
              </p>
              <button className="btn-cta" onClick={() => navigate('/book-engineer')}>
                Start a Ticket Now <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default HowItWorks;