import React from 'react';

export default function CtaBanner({
  title,
  description,
  primaryBtnText = 'Join now for free.',
  primaryBtnLink = '#contact',
  secondaryBtnText = 'Contact Us',
  secondaryBtnLink = '#contact',
  imageSrc,
  imageAlt = 'CTA Banner Graphic',
  isWide = false
}) {
  return (
    <div class="wrap">
      <div class="cta-banner">
        <div class="cta-banner-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <div class="btns">
            {primaryBtnText && (
              <a class="btn btn-teal" href={primaryBtnLink}>
                {primaryBtnText}
              </a>
            )}
            {secondaryBtnText && (
              <a class="btn btn-dark" href={secondaryBtnLink}>
                {secondaryBtnText}
              </a>
            )}
          </div>
        </div>
        {imageSrc && (
          <img
            class={`cta-banner-img${isWide ? ' wide' : ''}`}
            src={imageSrc}
            alt={imageAlt}
          />
        )}
      </div>
    </div>
  );
}
