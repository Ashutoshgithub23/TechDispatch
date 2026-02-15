import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Calendar, 
  ChevronRight, 
  User,
  ExternalLink 
} from 'lucide-react';
import './BlogPage.css';

// --- BLOG DATA WITH REAL IMAGES ---
const blogPosts = [
  {
    id: 1,
    title: "Windows 11: Official Upgrade Guide",
    author: "Microsoft Support",
    date: "Feb 15, 2026",
    category: "OS Updates",
    // Image: Windows 11 / Computer Screen
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=80",
    excerpt: "Check if your PC meets the requirements for Windows 11 and learn how to upgrade safely.",
    link: "https://www.microsoft.com/en-us/windows/get-windows-11",
    isExternal: true 
  },
  {
    id: 2,
    title: "How to Secure Your Google Account",
    author: "Google Safety",
    date: "Feb 10, 2026",
    category: "Security",
    // Image: Digital Lock / Cybersecurity
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80",
    excerpt: "Turn on 2-Step Verification and check your security activity to prevent unauthorized access.",
    link: "https://safety.google/security/",
    isExternal: true
  },
  {
    id: 3,
    title: "Why Is My Laptop Overheating?",
    author: "SSG Team",
    date: "Feb 05, 2026",
    category: "Hardware",
    // Image: Laptop Repair / Fan Dust
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=800&q=80",
    excerpt: "Dust buildup and old thermal paste are the main culprits. Book a cleaning service with us today.",
    link: "/book-engineer",
    isExternal: false // Internal Link
  },
  {
    id: 4,
    title: "Speed Test: Is Your Internet the Problem?",
    author: "Ookla",
    date: "Jan 28, 2026",
    category: "Troubleshooting",
    // Image: Fiber Optic / Network Speed
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    excerpt: "Run a quick speed test to see if you are getting the bandwidth you pay for.",
    link: "https://www.speedtest.net/",
    isExternal: true
  },
  {
    id: 5,
    title: "Latest Tech News & Reviews",
    author: "The Verge",
    date: "Jan 20, 2026",
    category: "News",
    // Image: Tech Setup / Gadgets
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    excerpt: "Stay updated with the latest gadget releases, software updates, and tech industry news.",
    link: "https://www.theverge.com/",
    isExternal: true
  },
  {
    id: 6,
    title: "Schedule an On-Site Repair",
    author: "SSG Team",
    date: "Jan 15, 2026",
    category: "Services",
    // Image: IT Engineer Working
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a782?auto=format&fit=crop&w=800&q=80",
    excerpt: "Don't let hardware failure stop your business. Our engineers can be at your office within 4 hours.",
    link: "/book-engineer",
    isExternal: false // Internal Link
  }
];

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // 1. Get Unique Categories Automatically from Data
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  // 2. Filter Logic
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="blog-page">
      
      {/* --- Hero / Search Section --- */}
      <header className="blog-hero">
        <div className="hero-content">
          <h1>Knowledge Base & Insights</h1>
          <p>Troubleshooting guides, security updates, and tech tips.</p>
          
          <div className="search-wrapper">
            <Search className="search-icon" size={20} />
            <input 
              type="text" 
              placeholder="Search for an issue (e.g., 'Windows', 'WiFi')..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

      <div className="blog-container">
        
        {/* --- Dynamic Category Tabs --- */}
        <div className="category-tabs">
          {categories.map(cat => (
            <button 
              key={cat}
              className={`cat-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- Blog Grid --- */}
        <div className="posts-grid">
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <article key={post.id} className="post-card">
                
                {/* Image Section (Now with Real Images) */}
                <div className="card-image">
                  <img src={post.image} alt={post.title} />
                  <span className="cat-badge">
                    {post.category}
                  </span>
                </div>
                
                {/* Content Section */}
                <div className="card-content">
                  <div className="meta-row">
                    <span className="date"><Calendar size={14}/> {post.date}</span>
                    <span className="author"><User size={14}/> {post.author}</span>
                  </div>
                  
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  
                  {/* --- SMART LINK BUTTON --- */}
                  <div className="card-actions">
                    {post.isExternal ? (
                      // External Link (Opens in New Tab)
                      <a 
                        href={post.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="read-more-link"
                      >
                        Read Article <ExternalLink size={16} />
                      </a>
                    ) : (
                      // Internal Link (Keeps user on site)
                      <Link to={post.link} className="read-more-link">
                        Read More <ChevronRight size={16} />
                      </Link>
                    )}
                  </div>

                </div>
              </article>
            ))
          ) : (
            <div className="no-results">
              <h3>No articles found matching "{searchTerm}"</h3>
              <p>Try searching for a different keyword or category.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default BlogPage;