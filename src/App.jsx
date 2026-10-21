import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import About from './components/About';
import CtaBanner from './components/CtaBanner';
import Features from './components/Features';
import Solutions from './components/Solutions';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Contact from './components/Contact';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <>
      <Navbar onContactClick={openContactModal} />
      <Hero onContactClick={openContactModal} />
      <Metrics />
      <About />

      {/* CTA Banner 1 */}
      <CtaBanner
        title="Ready to experience the future of E-Procurement?"
        description="Join early. Skip the line. Free onboarding + 6 months premium – on us."
        primaryBtnText="Get Early Access"
        onPrimaryClick={openContactModal}
        imageSrc="/extracted_assets/image4_14_197.png"
        imageAlt="E-Procurement Platform Concept Graphic"
      />

      <Features />
      <Solutions />

      {/* CTA Banner 2 */}
      <CtaBanner
        title="Do you provide any of the above services or products?"
        description="Your next opportunity is here. Become a trusted supplier with us."
        primaryBtnText="Join now for free."
        onPrimaryClick={openContactModal}
        imageSrc="/extracted_assets/image15_14_197.jpeg"
        imageAlt="Warehouse Logistics Management Graphic"
        isWide={true}
      />

      <Testimonials />

      <Faq />

      {/* CTA Banner 3 */}
      <CtaBanner
        title="Ready to experience the future of E-Procurement?"
        description="Join early. Skip the line. Free onboarding + 6 months premium – on us."
        primaryBtnText="Get Early Access"
        onPrimaryClick={openContactModal}
        imageSrc="/extracted_assets/image4_14_197.png"
        imageAlt="E-Procurement Platform Concept Graphic"
      />

      <Contact />
      <Footer />

      {/* Contact Us Popup Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
      />
    </>
  );
}
