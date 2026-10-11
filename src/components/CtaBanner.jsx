import React from 'react';

export default function CtaBanner({
  title,
  description,
  primaryBtnText = 'Join now for free.',
  primaryBtnLink = '#contact',
  onPrimaryClick,
  secondaryBtnText = 'Contact Us',
  secondaryBtnLink = '#contact',
  onSecondaryClick,
  imageSrc,
  imageAlt = 'CTA Banner Graphic',
  isWide = false
}) {
  const handlePrimaryClick = (e) => {
    if (onPrimaryClick) {
      e.preventDefault();
      onPrimaryClick();
    }
  };

  const handleSecondaryClick = (e) => {
    if (onSecondaryClick) {
      e.preventDefault();
      onSecondaryClick();
    }
  };

  return (
    <div class="wrap">
      <div class="cta-banner">
        <div class="cta-banner-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <div class="btns">
            {primaryBtnText && (
              <a
                class="btn btn-teal"
                href={primaryBtnLink}
                onClick={handlePrimaryClick}
              >
                {primaryBtnText}
              </a>
            )}
            {secondaryBtnText && (
              <a
                class="btn btn-dark"
                href={secondaryBtnLink}
                onClick={handleSecondaryClick}
              >
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
