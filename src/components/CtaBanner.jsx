import React from 'react';

export default function CtaBanner({
  title,
  description,
  primaryBtnText = 'Join now for free.',
  primaryBtnLink = '#contact',
  onPrimaryClick,
  secondaryBtnText = null,
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
    <div className="wrap">
      <div className="cta-banner">
        <div className="cta-banner-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="btns">
            {primaryBtnText && (
              <a
                className="btn btn-teal"
                href={primaryBtnLink}
                onClick={handlePrimaryClick}
              >
                {primaryBtnText}
              </a>
            )}
            {secondaryBtnText && (
              <a
                className="btn btn-dark"
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
            className={`cta-banner-img${isWide ? ' wide' : ''}`}
            src={imageSrc}
            alt={imageAlt}
          />
        )}
      </div>
    </div>
  );
}
