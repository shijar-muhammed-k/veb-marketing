import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage, getLanguageFromUrl } from './context/LanguageContext';
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

export function resolveRoute(pathname, hash) {
  let p = (pathname || '').toLowerCase().replace(/\/+$/, '') || '/';
  // Strip language prefix /en or /ar
  p = p.replace(/^\/(en|ar)(\/|$)/, '/').replace(/\/+$/, '') || '/';
  const h = (hash || '').toLowerCase().replace(/^#\/?/, '');

  if (p === '/terms' || p === '/terms-and-conditions' || h === 'terms' || h === 'terms-and-conditions') {
    return '/terms-and-conditions';
  }
  if (p === '/privacy' || p === '/privacy-policy' || h === 'privacy' || h === 'privacy-policy') {
    return '/privacy-policy';
  }
  return '/';
}

function MainApp() {
  const { lang, t, setLanguage } = useLanguage();

  const [currentRoute, setCurrentRoute] = useState(() =>
    resolveRoute(window.location.pathname, window.location.hash)
  );

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const handleNavigate = (path, hashTarget) => {
    const targetRoute = resolveRoute(path, hashTarget);
    const targetPath = `/${lang}${targetRoute === '/' ? '' : targetRoute}`;
    const targetUrl = targetPath + (hashTarget && targetRoute === '/' ? `#${hashTarget}` : '');

    const currentCleanPath = window.location.pathname.replace(/\/+$/, '') || '/';
    if (currentCleanPath !== targetPath || (targetRoute === '/' && hashTarget)) {
      window.history.pushState({ lang, route: targetRoute }, '', targetUrl);
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

      const urlLang = getLanguageFromUrl();
      if (urlLang && urlLang !== lang) {
        setLanguage(urlLang, false);
      }

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
  }, [lang, setLanguage]);

  useEffect(() => {
    if (currentRoute === '/terms-and-conditions') {
      document.title = t.meta.termsTitle;
    } else if (currentRoute === '/privacy-policy') {
      document.title = t.meta.privacyTitle;
    } else {
      document.title = t.meta.title;
    }

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t.meta.description);
    }
  }, [currentRoute, t]);

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
            title={t.ctaBanners.banner1.title}
            description={t.ctaBanners.banner1.description}
            primaryBtnText={t.ctaBanners.banner1.primaryBtn}
            onPrimaryClick={openContactModal}
            imageSrc="/extracted_assets/image4_14_197.png"
            imageAlt="E-Procurement Platform Concept Graphic"
          />

          <Features />
          <Solutions />

          {/* CTA Banner 2 */}
          <CtaBanner
            title={t.ctaBanners.banner2.title}
            description={t.ctaBanners.banner2.description}
            primaryBtnText={t.ctaBanners.banner2.primaryBtn}
            onPrimaryClick={openContactModal}
            imageSrc="/extracted_assets/image15_14_197.jpeg"
            imageAlt="Warehouse Logistics Management Graphic"
            isWide={true}
          />

          <Testimonials />

          <Faq />

          {/* CTA Banner 3 */}
          <CtaBanner
            title={t.ctaBanners.banner3.title}
            description={t.ctaBanners.banner3.description}
            primaryBtnText={t.ctaBanners.banner3.primaryBtn}
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

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
