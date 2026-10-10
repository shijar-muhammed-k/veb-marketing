import React from 'react';

const metricsData = [
  { value: '500+', label: 'Trusted Suppliers' },
  { value: '95%', label: 'Faster Approvals' },
  { value: '3X', label: 'Procurement Efficiency' },
  { value: '100%', label: 'End-To-End Visibility' }
];

export default function Metrics() {
  return (
    <section class="sec">
      <div class="wrap">
        <span class="pill">Why VEB</span>
        <h2 class="sec-title">Facility management made simple</h2>
        <div class="stats-bar">
          {metricsData.map((item, index) => (
            <div class="stats-col" key={index}>
              <b>{item.value}</b>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
