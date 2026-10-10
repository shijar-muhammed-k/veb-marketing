import React from 'react';

export default function FeatureCard({
  title,
  description,
  iconSrc,
  iconSvg,
  iconAlt = ''
}) {
  return (
    <div class="feature-card">
      <div class="card-top-row">
        <div class="card-top-left"></div>
        <div class="card-top-cutout">
          <svg width="150" height="52" viewBox="0 0 150 52" class="cutout-svg">
            <path
              d="M 0 1 C 22 1, 22 44, 45 44 L 105 44 C 128 44, 128 1, 150 1 L 150 52 L 0 52 Z"
              fill="#f8f9fa"
            />
            <path
              class="cutout-stroke"
              d="M 0 1 C 22 1, 22 44, 45 44 L 105 44 C 128 44, 128 1, 150 1"
              fill="none"
              stroke="#e5e7eb"
              stroke-width="2"
            />
          </svg>
          <div class="card-notch-icon">
            {iconSrc ? (
              <img src={iconSrc} alt={iconAlt || title} />
            ) : (
              iconSvg
            )}
          </div>
        </div>
        <div class="card-top-right"></div>
      </div>
      <div class="card-main-body">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
