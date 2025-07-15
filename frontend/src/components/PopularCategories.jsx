import React from 'react';
import '../index.css'; // We’ll create this file for styling

const categories = [
  {
    name: 'Coding',
    icon: '💻',
  },
  {
    name: 'Public speaking',
    icon: '🎙️',
  },
  {
    name: 'Chess',
    icon: '♞',
  },
  {
    name: 'Homework help',
    icon: '📚',
  },
  {
    name: 'App building',
    icon: '📱',
  },
];

const PopularCategories = () => {
  return (
    <section className="categories-section">
      <h2>Popular Categories</h2>
      <p>
        Pick what you love most! These categories have everything you need to
        learn something awesome ✨
      </p>
      <div className="categories-container">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className={`category-card ${
              cat.highlighted ? 'highlighted' : ''
            }`}
          >
            <div className="icon">{cat.icon}</div>
            <div className="label">{cat.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;
