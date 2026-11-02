import React, { useState, useEffect } from 'react';
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
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';

function resolveRoute(pathname, hash) {
  const p = (pathname || '').toLowerCase().replace(/\/+$/, '') || '/';
  const h = (hash || '').toLowerCase().replace(/^#\/?/, '');

  if (p === '/terms' || p === '/terms-and-conditions' || h === 'terms' || h === 'terms-and-conditions') {
    return '/terms-and-conditions';
  }
  if (p === '/privacy' || p === '/privacy-policy' || h === 'privacy' || h === 'privacy-policy') {
    return '/privacy-policy';
  }
  return '/';
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(() =>
    resolveRoute(window.location.pathname, window.location.hash)
  );

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const handleNavigate = (path, hashTarget) => {
    const targetRoute = resolveRoute(path, hashTarget);
    const targetUrl = targetRoute + (hashTarget && targetRoute === '/' ? `#${hashTarget}` : '');

    if (window.location.pathname !== targetRoute || (targetRoute === '/' && hashTarget)) {
      window.history.pushState({}, '', targetUrl);
    }

    setCurrentRoute(targetRoute);

    if (hashTarget) {
      setTimeout(() => {
        const el = document.getElementById(hashTarget);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      const nextRoute = resolveRoute(window.location.pathname, window.location.hash);
      setCurrentRoute(nextRoute);

      const hash = window.location.hash.replace(/^#/, '');
      if (hash && nextRoute === '/') {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  useEffect(() => {
    if (currentRoute === '/terms-and-conditions') {
      document.title = 'Terms & Conditions | VEB - Enterprise Procurement & Facility Management';
    } else if (currentRoute === '/privacy-policy') {
      document.title = 'Privacy Policy | VEB - Enterprise Procurement & Facility Management';
    } else {
      document.title = 'VEB – Enterprise Procurement & Facility Management Platform';
    }
  }, [currentRoute]);

  return (
    <>
      <Navbar
        onContactClick={openContactModal}
        onNavigate={handleNavigate}
        currentRoute={currentRoute}
      />

      {currentRoute === '/terms-and-conditions' ? (
        <TermsAndConditions
          onNavigate={handleNavigate}
          onContactClick={openContactModal}
        />
      ) : currentRoute === '/privacy-policy' ? (
        <PrivacyPolicy
          onNavigate={handleNavigate}
          onContactClick={openContactModal}
        />
      ) : (
        <main>
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
        </main>
      )}

      <Footer onNavigate={handleNavigate} />

      {/* Contact Us Popup Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
      />
    </>
  );
}
