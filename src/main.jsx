import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Pages
import HomePage from './Home';
import BookEngineer from './BookEngineer';
import OurEngineers from './OurEngineers';
import ContactPage from './ContactPage';
import HowItWorks from './HowItWorks';
import BlogPage from './BlogPage';
import ServicesPage from './ServicesPage';

// Import Helper Components
import ScrollToTop from './ScrollToTop'; // Make sure this path is correct!
import Footer from './Footer';

// Define the Main App Component
const App = () => {
  return (
    <BrowserRouter>
      {/* 1. ScrollToTop must be inside BrowserRouter */}
      <ScrollToTop />
      
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book-engineer" element={<BookEngineer />} />
          <Route path="/our-engineers" element={<OurEngineers />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </div>

      {/* 2. Footer is outside Routes but inside Router (correct) */}
      <Footer />
    </BrowserRouter>
  );
};

// Render the App
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);