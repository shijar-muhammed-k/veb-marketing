import React from 'react';
import FeatureCard from './FeatureCard';

export default function Features() {
  const features = [
    {
      title: 'Supplier Management',
      description:
        'Manage all your suppliers from one centralized platform, making onboarding, communication, and performance tracking simple and efficient.',
      iconSrc: '/extracted_assets/image5_14_197.png',
      iconAlt: 'Supplier Management Icon'
    },
    {
      title: 'Vetted Vendors',
      description:
        'Connect with trusted and verified vendors to ensure reliable sourcing and build stronger supplier relationships.',
      iconSvg: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 6C4 4.895 4.895 4 6 4H18C19.105 4 20 4.895 20 6V8H4V6Z" />
          <circle cx="6.66" cy="8" r="2.66" />
          <circle cx="12" cy="8" r="2.66" />
          <circle cx="17.33" cy="8" r="2.66" />
          <path d="M5 10.5H19V20C19 20.552 18.552 21 18 21H6C5.448 21 5 20.552 5 20V10.5Z" />
          <path d="M10 14H14V21H10V14Z" fill="#f8f9fa" />
        </svg>
      )
    },
    {
      title: 'Live Dashboards',
      description:
        'Monitor procurement activities in real time with interactive dashboards that provide complete visibility into every process.',
      iconSrc: '/extracted_assets/image7_14_197.png',
      iconAlt: 'Live Dashboards Icon'
    },
    {
      title: 'Spend Analytics',
      description:
        'Analyze and categorize procurement spending with clear insights to improve budgeting and identify cost-saving opportunities.',
      iconSrc: '/extracted_assets/image8_14_197.png',
      iconAlt: 'Spend Analytics Icon'
    },
    {
      title: 'AI-Assisted Sourcing',
      description:
        'Use AI-powered recommendations to discover the right suppliers faster and make smarter purchasing decisions.',
      iconSrc: '/extracted_assets/image9_14_197.png',
      iconAlt: 'AI-Assisted Sourcing Icon'
    },
    {
      title: 'AP Automation',
      description:
        'Automate purchase orders and three-way invoice matching to reduce manual work, improve accuracy, and speed up payments.',
      iconSvg: (
        <svg viewBox="0 0 58 58" fill="none" width="48" height="48">
          <path
            d="M14 6C10.6863 6 8 8.68629 8 12V46C8 49.3137 10.6863 52 14 52H34C34.7956 52 35.5587 51.6839 36.1213 51.1213L49.1213 38.1213C49.6839 37.5587 50 36.7956 50 36V12C50 8.68629 47.3137 6 44 6H14Z"
            fill="#38c1a6"
          />
          <path
            d="M18 18H40M18 26H40M18 34H28"
            stroke="white"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M34 52V40C34 38.8954 34.8954 38 36 38H48"
            fill="#189d7d"
            fillOpacity="0.5"
          />
          <circle
            cx="40"
            cy="40"
            r="10"
            fill="#189d7d"
            stroke="white"
            strokeWidth="2.5"
          />
          <path
            d="M36 40L39 43L45 37"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    }
  ];

  return (
    <section class="sec" id="features">
      <div class="wrap">
        <span class="pill">Our Features</span>
        <h2 class="sec-title">
          Everything You Need to
          <br />
          Streamline Procurement
        </h2>
        <div class="features-grid">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              iconSrc={feature.iconSrc}
              iconSvg={feature.iconSvg}
              iconAlt={feature.iconAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
