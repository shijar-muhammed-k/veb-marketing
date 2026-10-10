import React from 'react';

export default function CategoryCard({ imgSrc, imgAlt, title, description }) {
  return (
    <div class="cat-card">
      <img class="cat-img" src={imgSrc} alt={imgAlt || title} />
      <div class="cat-content">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
