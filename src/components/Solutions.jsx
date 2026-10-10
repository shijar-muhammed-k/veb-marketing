import React, { useState } from 'react';
import CategoryCard from './CategoryCard';

const servicesData = [
  {
    title: 'Mechanical, Electrical, and Plumbing (MEP)',
    description: 'Maintenance and repair of electrical wiring, water management, drainage, and utility systems.',
    imgSrc: '/extracted_assets/image10_14_197.jpeg'
  },
  {
    title: 'HVAC Systems',
    description: 'Upkeep, servicing, and climate control of boilers, air conditioning, and ventilation units.',
    imgSrc: '/extracted_assets/image11_14_197.jpeg'
  },
  {
    title: 'Building Fabric Maintenance',
    description: 'Structural repairs, roofing, flooring, windows, and door maintenance.',
    imgSrc: '/extracted_assets/image12_14_197.jpeg'
  },
  {
    title: 'Fire Safety Systems',
    description: 'Installation, testing and maintenance of sprinklers, smoke alarms, fire extinguishers, fire doors and emergency escape routes.',
    imgSrc: '/extracted_assets/image13_14_197.jpeg'
  },
  {
    title: 'Lifts and Conveyors',
    description: 'Mandatory safety inspections and maintenance of elevators, escalators, and automatic doors.',
    imgSrc: '/extracted_assets/image14_14_197.jpeg'
  },
  {
    title: 'Cleaning and Janitorial Services',
    description: 'Routine and deep cleaning of office spaces, shared areas, and window washing.',
    imgSrc: '/assets/cleaning_service_1791570004373.jpg'
  },
  {
    title: 'Security Services',
    description: 'Guarding services, access control, CCTV monitoring, and alarm response.',
    imgSrc: '/assets/security_service_1791570029852.jpg'
  },
  {
    title: 'Catering and Vending',
    description: 'Management of on-site cafeterias, pantries, and food services.',
    imgSrc: '/assets/catering_vending_1791570087040.jpg'
  },
  {
    title: 'Waste Management',
    description: 'Proper disposal, recycling programs, and hazardous waste handling.',
    imgSrc: '/assets/waste_management_1791570099842.jpg'
  },
  {
    title: 'Grounds Maintenance',
    description: 'Landscaping, gardening, lawn care, and winter snow clearing.',
    imgSrc: '/assets/grounds_maintenance_1791570111095.jpg'
  },
  {
    title: 'Pest Control',
    description: 'Preventative treatments and removal of insects or rodents.',
    imgSrc: '/assets/pest_control_1791570122010.jpg'
  },
  {
    title: 'Laundry service',
    description: 'Washing, drying, folding, ironing, and dry cleaning of clothes and textiles.',
    imgSrc: '/assets/laundry_service_1791570149512.jpg'
  }
];

const productsData = [
  {
    title: 'Cleaning',
    description: 'Soaps, detergents, disinfectants, mops, and trash liners.',
    imgSrc: '/assets/cleaning_supplies_1791570188476.jpg'
  },
  {
    title: 'Paper Goods',
    description: 'Paper towels, toilet tissue, and facial tissues.',
    imgSrc: '/assets/paper_goods_1791570199062.jpg'
  },
  {
    title: 'Safety',
    description: 'First aid kits, safety vests, gloves, and masks.',
    imgSrc: '/assets/safety_supplies_1791570209595.jpg'
  },
  {
    title: 'Office',
    description: 'Waste bins, desk organizers, and breakroom coffee supplies.',
    imgSrc: '/assets/office_breakroom_1791570218664.jpg'
  },
  {
    title: 'Electrical',
    description: 'Light bulbs, switches, wiring, fuses, and batteries.',
    imgSrc: '/assets/electrical_supplies_1791570273005.jpg'
  },
  {
    title: 'HVAC',
    description: 'Air filters, belts, thermostats, and refrigerants.',
    imgSrc: '/assets/hvac_supplies_1791570283572.jpg'
  },
  {
    title: 'Plumbing',
    description: 'Valves, pipes, gaskets, seals, and faucets.',
    imgSrc: '/assets/plumbing_supplies.jpg'
  },
  {
    title: 'Hardware',
    description: 'Screws, bolts, lubricants, padlocks, and hand tools.',
    imgSrc: '/assets/hardware_supplies.jpg'
  }
];

export default function Solutions() {
  const [activeTab, setActiveTab] = useState('services');

  return (
    <section class="sec" id="services" style={{ paddingTop: '20px' }}>
      <div class="wrap">
        <span class="pill">Solutions</span>
        <h2 class="sec-title">Facility Management Categories</h2>
        <div class="tabs">
          <button
            class={`tab-btn${activeTab === 'services' ? ' active' : ''}`}
            onClick={() => setActiveTab('services')}
            type="button"
          >
            Services
          </button>
          <button
            class={`tab-btn${activeTab === 'products' ? ' active' : ''}`}
            onClick={() => setActiveTab('products')}
            type="button"
          >
            Products
          </button>
        </div>

        {activeTab === 'services' && (
          <div id="services-tab-content" class="tab-content">
            <div class="category-grid">
              {servicesData.map((item, index) => (
                <CategoryCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  imgSrc={item.imgSrc}
                  imgAlt={item.title}
                />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'products' && (
          <div id="products-tab-content" class="tab-content">
            <div class="category-grid">
              {productsData.map((item, index) => (
                <CategoryCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  imgSrc={item.imgSrc}
                  imgAlt={item.title}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
