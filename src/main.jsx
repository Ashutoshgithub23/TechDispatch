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
import ServicesPage from './ServicesPage'; // 1. Import the Services Page

// Import the Footer Component
import Footer from './Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* Wrap everything in a div to keep layout clean */}
    <div className="app-container">
      {/* The Routes determine the main content of the page */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book-engineer" element={<BookEngineer />} />
        <Route path="/our-engineers" element={<OurEngineers />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/blog" element={<BlogPage />} />
        {/* 2. Add the Services Route */}
        <Route path="/services" element={<ServicesPage />} />
      </Routes>

      {/* Place Footer here (Outside Routes) so it shows on every page */}
      <Footer />
      
    </div>
  </BrowserRouter>
);