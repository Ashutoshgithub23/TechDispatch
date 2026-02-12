import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react'; // Using your icon library

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate(-1)} // "-1" means go back one step in history
      style={styles.button}
      aria-label="Go back"
    >
      <ArrowLeft size={20} />
      <span>Back</span>
    </button>
  );
};

// Simple inline styles to position it
const styles = {
  button: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: 'transparent',
    border: 'none',
    color: '#64748b', // Grey color
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
    padding: '10px 0',
    marginBottom: '20px', // Spacing below the button
  }
};

export default BackButton;