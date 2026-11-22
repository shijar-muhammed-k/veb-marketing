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
import SupplierTermsAndConditions from './pages/SupplierTermsAndConditions';

export function resolveRoute(pathname, hash) {
  let p = (pathname || '').toLowerCase().replace(/\/+$/, '') || '/';
  // Strip language prefix /en or /ar
  p = p.replace(/^\/(en|ar)(\/|$)/, '/').replace(/\/+$/, '') || '/';
  const decodedP = decodeURIComponent(p);
  const normalizedP = decodedP.replace(/%20/g, '-').replace(/\s+/g, '-');

  const rawHash = (hash || '').toLowerCase().replace(/^#\/?/, '');
  const decodedHash = decodeURIComponent(rawHash);
  const normalizedHash = decodedHash.replace(/%20/g, '-').replace(/\s+/g, '-');

  if (normalizedP === '/terms' || normalizedP === '/terms-and-conditions' || normalizedHash === 'terms' || normalizedHash === 'terms-and-conditions') {
    return '/terms-and-conditions';
  }
  if (normalizedP === '/privacy' || normalizedP === '/privacy-policy' || normalizedHash === 'privacy' || normalizedHash === 'privacy-policy') {
    return '/privacy-policy';
  }
  if (
    normalizedP === '/supplier-terms' ||
    normalizedP === '/supplier-terms-and-conditions' ||
    normalizedP === '/supplier-terms-and-condtions' ||
    normalizedP === '/supplierterms' ||
    normalizedP === '/suppliertermsandconditions' ||
    normalizedHash === 'supplier-terms' ||
    normalizedHash === 'supplier-terms-and-conditions' ||
    normalizedHash === 'supplier-terms-and-condtions'
  ) {
    return '/supplier-terms-and-conditions';
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
    const siteUrl = 'https://vebqatar.com/';
    const pathname = window.location.pathname.replace(/\/+$/, '') || '/';

    // Only the base URL should be indexed
    const shouldIndex = pathname === '/';

    // Page title
    if (currentRoute === '/terms-and-conditions') {
      document.title = t.meta.termsTitle;
    } else if (currentRoute === '/privacy-policy') {
      document.title = t.meta.privacyTitle;
    } else if (currentRoute === '/supplier-terms-and-conditions') {
      document.title = t.meta.supplierTermsTitle;
    } else {
      document.title = t.meta.title;
    }

    // Meta description
    let description = document.querySelector('meta[name="description"]');

    if (!description) {
      description = document.createElement('meta');
      description.name = 'description';
      document.head.appendChild(description);
    }

    description.content = t.meta.description;

    // Robots indexing control
    let robots = document.querySelector('meta[name="robots"]');

    if (!robots) {
      robots = document.createElement('meta');
      robots.name = 'robots';
      document.head.appendChild(robots);
    }

    robots.content = shouldIndex
      ? 'index, follow'
      : 'noindex, follow';

    // Canonical URL for homepage only
    let canonical = document.querySelector('link[rel="canonical"]');

    if (shouldIndex) {
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }

      canonical.href = siteUrl;
    } else {
      canonical?.remove();
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
      ) : currentRoute === '/supplier-terms-and-conditions' ? (
        <SupplierTermsAndConditions
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
