
import React, { useState } from 'react';
import '../index.css';
import { useNavigate } from 'react-router-dom';
import { searchCourses } from '../api/searchApi'; // path is assumed correct

const HeroSection = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!query.trim()) return; // prevent empty search

    try {
      const results = await searchCourses(query.trim());
      navigate('/search-results', {
        state: { results, query: query.trim() },
      });
    } catch (err) {
      console.error("Search failed:", err);
      navigate('/search-results', {
        state: { results: [], query: query.trim(), error: true },
      });
    }
  };

  return (
    <section className="hero-section">
      {/* Left Decorations */}
      <div className="hero-left">
        <div className="circle-badge">
          <p className="circle-number">500+</p>
          <p className="circle-text">Courses</p>
        </div>
        <div className="hero-image hero-image-left">
          <img src="/assests/Headerboy.jpeg" alt="boy" />
        </div>
        <div className="circle-badge small-badge">
          <p className="circle-number">4.9</p>
          <p className="circle-text">Rating</p>
        </div>
      </div>

      {/* Center Content */}
      <div className="hero-center">
        <h1 className="hero-title">Learn a New Skill</h1>
        <h2 className="hero-subtitle">Everyday, Anytime, and Anywhere.</h2>

        <div className="hero-search">
          <span className="search-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            type="text"
            placeholder="What do you want to learn today?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>

      {/* Right Decorations */}
      <div className="hero-right">
        <div className="circle-badge">
          <p className="circle-number">10k+</p>
          <p className="circle-text">Happy Learners</p>
        </div>
        <div className="hero-image hero-image-right">
          <img src="/assests/headergirl.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
