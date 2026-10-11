import React from 'react';
import TestimonialCard from './TestimonialCard';

export default function Testimonials() {
  const testimonials = [
    {
      text: 'VEB has transformed the way we manage procurement. From supplier onboarding to purchase approvals, everything is faster and more transparent.',
      author: 'Sarah Chen',
      company: 'TechFlow',
      role: 'Marketing Director',
      avatarSrc: '/extracted_assets/image16_14_197.jpeg'
    },
    {
      text: 'The automation in VEB cut our approval cycle from days to minutes. Our vendors love the transparent communication and fast payments.',
      author: 'Michael Torres',
      company: 'Apex Build',
      role: 'Operations Lead',
      avatarSrc: '/extracted_assets/image17_14_197.jpeg'
    },
    {
      text: 'Managing facilities across 20+ locations used to be a nightmare. VEB gave us central visibility, robust compliance, and massive savings.',
      author: 'Elena Rostova',
      company: 'Nexus Group',
      role: 'Procurement Manager',
      avatarSrc: '/extracted_assets/image18_14_197.jpeg'
    }
  ];

  return (false &&
    <section class="sec">
      <div class="wrap">
        <span class="pill">Testimonials</span>
        <h2 class="sec-title">Trusted by Teams</h2>
        <div class="testimonials-grid">
          {testimonials.map((testi, index) => (
            <TestimonialCard
              key={index}
              text={testi.text}
              author={testi.author}
              company={testi.company}
              role={testi.role}
              avatarSrc={testi.avatarSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
