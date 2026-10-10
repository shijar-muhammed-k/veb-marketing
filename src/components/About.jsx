import React from 'react';

export default function About() {
  return (
    <section class="sec" id="about" style={{ paddingTop: '10px', paddingBottom: '60px' }}>
      <div class="wrap">
        <div class="about-grid">
          <div class="about-text">
            <span class="pill">VEB</span>
            <h2>About VEB</h2>
            <p>
              VEB is a next-generation procurement system that transforms how businesses source,
              purchase, approve, and pay. Designed specifically for Facility Management and MRO
              procurement, our cloud-based solution eliminates manual processes and delivers
              complete transparency across every transaction.
            </p>
          </div>
          <div class="about-img-wrap">
            <img src="/extracted_assets/image2_14_197.png" alt="VEB Platform Dashboard on 3D Podium" />
          </div>
        </div>
      </div>
    </section>
  );
}
