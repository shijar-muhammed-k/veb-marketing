import React from 'react';

export default function CategoryCard({ imgSrc, imgAlt, title, description }) {
  return (
    <div className="cat-card">
      <img className="cat-img" src={imgSrc} alt={imgAlt || title} />
      <div className="cat-content">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
