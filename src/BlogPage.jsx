import React, { useState } from 'react';
import { 
  Search, 
  Tag, 
  Calendar, 
  ChevronRight, 
  BookOpen,
  Wrench,
  Cpu
} from 'lucide-react';
import './BlogPage.css';

// --- Mock Data (Replace with API later) ---
const blogPosts = [
  {
    id: 1,
    title: "How to Fix the 'Blue Screen of Death' (BSOD) in Windows 11",
    excerpt: "Step-by-step guide to diagnosing and resolving critical system errors.",
    category: "Troubleshooting",
    date: "Jan 12, 2026",
    image: "/api/placeholder/400/250", // Replace with real image
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Outlook Not Syncing? Try These 3 Quick Fixes",
    excerpt: "Is your email stuck? Here is how to reset your OST file and check server settings.",
    category: "Software",
    date: "Jan 08, 2026",
    image: "/api/placeholder/400/250",
    readTime: "3 min read"
  },
  {
    id: 3,
    title: "Understanding RAID Levels: Which is Best for Your Server?",
    excerpt: "A deep dive into RAID 0, 1, 5, and 10 for business data redundancy.",
    category: "Hardware",
    date: "Dec 28, 2025",
    image: "/api/placeholder/400/250",
    readTime: "8 min read"
  },
  {
    id: 4,
    title: "New Cybersecurity Threats in 2026",
    excerpt: "What every IT manager needs to know about the latest ransomware variants.",
    category: "News",
    date: "Dec 20, 2025",
    image: "/api/placeholder/400/250",
    readTime: "4 min read"
  },
  {
    id: 5,
    title: "Printer Offline? Connection Troubleshooting Guide",
    excerpt: "How to re-establish IP connectivity for network printers.",
    category: "Troubleshooting",
    date: "Dec 15, 2025",
    image: "/api/placeholder/400/250",
    readTime: "6 min read"
  },
  {
    id: 6,
    title: "Upgrading RAM vs SSD: Which Boosts Speed More?",
    excerpt: "Where to spend your budget for the best performance increase.",
    category: "Hardware",
    date: "Nov 30, 2025",
    image: "/api/placeholder/400/250",
    readTime: "5 min read"
  }
];

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter Logic
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="blog-page">
      
      {/* --- Hero / Search Section --- */}
      <header className="blog-hero">
        <div className="hero-content">
          <h1>Knowledge Base & Insights</h1>
          <p>Troubleshooting guides, software updates, and tech tips.</p>
          
          <div className="search-wrapper">
            <Search className="search-icon" size={20} />
            <input 
              type="text" 
              placeholder="Search for an issue (e.g., 'Outlook', 'Printer')..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

      <div className="blog-container">
        
        {/* --- Category Tabs --- */}
        <div className="category-tabs">
          {['All', 'Troubleshooting', 'Software', 'Hardware', 'News'].map(cat => (
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
                <div className="card-image">
                  <img src={post.image} alt={post.title} />
                  <span className={`cat-badge ${post.category.toLowerCase()}`}>
                    {post.category}
                  </span>
                </div>
                
                <div className="card-content">
                  <div className="meta-row">
                    <span className="date"><Calendar size={14}/> {post.date}</span>
                    <span className="read-time"><BookOpen size={14}/> {post.readTime}</span>
                  </div>
                  
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  
                  <button className="read-more">
                    Read Article <ChevronRight size={16} />
                  </button>
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