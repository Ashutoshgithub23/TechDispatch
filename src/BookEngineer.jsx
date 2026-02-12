import React, { useState } from 'react';
import { 
  Monitor, 
  Server, 
  MapPin, 
  Clock, 
  AlertCircle, 
  CheckCircle, 
  ChevronRight, 
  ChevronLeft,
  Calendar
} from 'lucide-react';
import './BookEngineer.css';

const BookEngineer = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: '', // 'hardware' or 'software'
    issueType: '',   // e.g., 'Server Down', 'Virus', etc.
    urgency: 'standard', // 'standard', 'priority', 'emergency'
    description: '',
    companyName: '',
    contactName: '',
    email: '',
    address: '',
    date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const selectService = (type) => {
    setFormData(prev => ({ ...prev, serviceType: type }));
    setStep(2);
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Ticket Created! Dispatching Engineer...");
    // Here you would send data to your backend
  };

  return (
    <div className="booking-page">
      
      {/* --- Progress Bar --- */}
      <div className="progress-container">
        <div className="steps-indicator">
          <div className={`step-dot ${step >= 1 ? 'active' : ''}`}>1</div>
          <div className="step-line"></div>
          <div className={`step-dot ${step >= 2 ? 'active' : ''}`}>2</div>
          <div className="step-line"></div>
          <div className={`step-dot ${step >= 3 ? 'active' : ''}`}>3</div>
        </div>
        <h2 className="step-title">
          {step === 1 && "What do you need help with?"}
          {step === 2 && "Ticket Details"}
          {step === 3 && "Location & Contact"}
        </h2>
      </div>

      <div className="booking-card">
        <form onSubmit={handleSubmit}>
          
          {/* --- STEP 1: Service Selection --- */}
          {step === 1 && (
            <div className="step-content animate-fade">
              <div className="selection-grid">
                
                {/* Hardware Option */}
                <div 
                  className={`selection-card ${formData.serviceType === 'hardware' ? 'selected' : ''}`}
                  onClick={() => selectService('hardware')}
                >
                  <div className="icon-wrapper hardware">
                    <Server size={48} />
                  </div>
                  <h3>Hardware Support</h3>
                  <p>On-site engineer for physical repairs, server maintenance, or cabling.</p>
                  <span className="badge">Requires Site Visit</span>
                </div>

                {/* Software Option */}
                <div 
                  className={`selection-card ${formData.serviceType === 'software' ? 'selected' : ''}`}
                  onClick={() => selectService('software')}
                >
                  <div className="icon-wrapper software">
                    <Monitor size={48} />
                  </div>
                  <h3>Software Support</h3>
                  <p>Remote or on-site support for OS, viruses, cloud, and applications.</p>
                  <span className="badge">Remote Available</span>
                </div>

              </div>
            </div>
          )}

          {/* --- STEP 2: Issue Details & Urgency --- */}
          {step === 2 && (
            <div className="step-content animate-fade">
              
              <div className="form-group">
                <label>Urgency Level (affects dispatch time)</label>
                <div className="urgency-options">
                  <label className={`radio-box ${formData.urgency === 'standard' ? 'active' : ''}`}>
                    <input 
                      type="radio" name="urgency" value="standard" 
                      checked={formData.urgency === 'standard'} onChange={handleChange} 
                    />
                    <Clock size={20} className="text-blue" />
                    <div>
                      <strong>Standard</strong>
                      <span>24-48 Hours</span>
                    </div>
                  </label>

                  <label className={`radio-box ${formData.urgency === 'priority' ? 'active' : ''}`}>
                    <input 
                      type="radio" name="urgency" value="priority" 
                      checked={formData.urgency === 'priority'} onChange={handleChange} 
                    />
                    <AlertCircle size={20} className="text-orange" />
                    <div>
                      <strong>Priority</strong>
                      <span>Same Day</span>
                    </div>
                  </label>

                  <label className={`radio-box ${formData.urgency === 'emergency' ? 'active' : ''}`}>
                    <input 
                      type="radio" name="urgency" value="emergency" 
                      checked={formData.urgency === 'emergency'} onChange={handleChange} 
                    />
                    <AlertCircle size={20} className="text-red" />
                    <div>
                      <strong>Emergency</strong>
                      <span>&lt; 4 Hours</span>
                    </div>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label>Issue Subject</label>
                <input 
                  type="text" 
                  name="issueType" 
                  placeholder="e.g. Server Overheating / Outlook Not Connecting"
                  value={formData.issueType}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label>Detailed Description</label>
                <textarea 
                  name="description" 
                  rows="4" 
                  placeholder="Please describe the symptoms..."
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="action-buttons">
                <button type="button" onClick={prevStep} className="btn-back">Back</button>
                <button type="button" onClick={nextStep} className="btn-next">Next Step <ChevronRight size={18}/></button>
              </div>
            </div>
          )}

          {/* --- STEP 3: Contact & Logistics --- */}
          {step === 3 && (
            <div className="step-content animate-fade">
              <div className="summary-banner">
                <CheckCircle size={20} />
                <span>Requesting <strong>{formData.urgency}</strong> {formData.serviceType} engineer.</span>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Contact Name</label>
                  <input type="text" name="contactName" value={formData.contactName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Company (Optional)</label>
                  <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
                </div>
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>

              {formData.serviceType === 'hardware' && (
                <div className="form-group">
                  <label>Site Address (For Engineer Dispatch)</label>
                  <div className="input-with-icon">
                    <MapPin size={18} />
                    <input 
                      type="text" 
                      name="address" 
                      placeholder="123 Business Park, Building A..." 
                      value={formData.address}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
              )}
              
              <div className="form-group">
                <label>Preferred Visit Date</label>
                <div className="input-with-icon">
                  <Calendar size={18} />
                  <input type="date" name="date" value={formData.date} onChange={handleChange} />
                </div>
              </div>

              <div className="action-buttons">
                <button type="button" onClick={prevStep} className="btn-back">Back</button>
                <button type="submit" className="btn-submit">Book Engineer Now</button>
              </div>
            </div>
          )}

        </form>
      </div>
    </div>
  );
};

export default BookEngineer;