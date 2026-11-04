import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/legal.css';

const SECTIONS = [
  { id: 'section-1', title: '1. Introduction', titleAr: '١. المقدمة التمهيدية' },
  { id: 'section-2', title: '2. Data Controller', titleAr: '٢. الجهة المتحكمة بالبيانات' },
  { id: 'section-3', title: '3. Scope', titleAr: '٣. نطاق سريان السياسة' },
  { id: 'section-4', title: '4. Personal Data We Collect', titleAr: '٤. فئات البيانات الشخصية التي نجمعها' },
  { id: 'section-5', title: '5. How We Use Personal Data', titleAr: '٥. كيف نستخدم ونعالج البيانات' },
  { id: 'section-6', title: '6. Legal Basis for Processing', titleAr: '٦. الأساس القانوني للمعالجة' },
  { id: 'section-7', title: '7. How We Share Personal Data', titleAr: '٧. مشاركة البيانات مع أطراف ثالثة' },
  { id: 'section-8', title: '8. Cross-Border Transfers', titleAr: '٨. نقل البيانات خارج دولة قطر' },
  { id: 'section-9', title: '9. Data Retention', titleAr: '٩. فترات الاحتفاظ بالبيانات' },
  { id: 'section-10', title: '10. Data Security', titleAr: '١٠. تدابير أمن وحماية البيانات' },
  { id: 'section-11', title: '11. Your Rights', titleAr: '١١. حقوقك القانونية كصاحب بيانات' },
  { id: 'section-12', title: '12. Cookies & Tracking', titleAr: '١٢. ملفات تعريف الارتباط والتقنيات المشابهة' },
  { id: 'section-13', title: '13. Children’s Data', titleAr: '١٣. بيانات القُصّر والأطفال' },
  { id: 'section-14', title: '14. Data Breach Notification', titleAr: '١٤. الإشعار بانتهاك أمن البيانات' },
  { id: 'section-15', title: '15. Changes to This Policy', titleAr: '١٥. التحديثات والتعديلات على السياسة' },
  { id: 'section-16', title: '16. Contact Us', titleAr: '١٦. تفاصيل التواصل والاستفسارات' }
];

export default function PrivacyPolicy({ onNavigate }) {
  const { lang, t, isRTL } = useLanguage();
  const [activeSection, setActiveSection] = useState('section-1');

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTocClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="legal-page">
      {/* Hero Header */}
      <div className="legal-hero">
        <div className="wrap">
          <div className="legal-breadcrumbs">
            <a
              href={`/${lang}`}
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('/');
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              {t.legalCommon.home}
            </a>
            <span className="legal-breadcrumbs-separator">/</span>
            <span>{t.legalCommon.privacyTitle}</span>
          </div>

          <div className="pill">{isRTL ? 'حماية البيانات' : 'Data Protection'}</div>
          <h1 className="legal-hero-title">{t.legalCommon.privacyTitle}</h1>
          <p className="legal-hero-subtitle">
            {isRTL
              ? 'كيف تقوم منصة فيب بجمع واستخدام وحماية البيانات الشخصية — شركة فيب لخدمات التجارة الرقمية ذ.م.م المشغلة لسوق إدارة المرافق والمشتريات الإلكترونية B2B.'
              : 'How VEB Collects, Uses, and Protects Personal Data — VEB For Digital Trade Services W.L.L. Operating the business-to-business facilities management & MRO e-procurement marketplace.'}
          </p>

          <div className="legal-meta-bar">
            <div className="legal-meta-item">
              <span>{isRTL ? 'التشريع المنظم:' : 'Regulation:'}</span>
              <strong>{isRTL ? 'قانون قطر رقم (13) لسنة 2016' : 'Qatar Law No. 13 of 2016 (PDPPL)'}</strong>
            </div>
            <div className="legal-meta-item">
              <span>{isRTL ? 'الجهة:' : 'Entity:'}</span>
              <strong>{isRTL ? 'شركة فيب لخدمات التجارة الرقمية ذ.م.م (س.ت: 247533)' : 'VEB For Digital Trade Services W.L.L. (CR: 247533)'}</strong>
            </div>
            <div className="legal-meta-item">
              <span>{isRTL ? 'الإصدار:' : 'Version:'}</span>
              <span className="legal-meta-badge">{isRTL ? 'مسودة 1.0' : 'Draft 1.0'}</span>
            </div>
            <div className="legal-meta-item">
              <span>{isRTL ? 'تاريخ السريان:' : 'Effective Date:'}</span>
              <strong>{isRTL ? 'أكتوبر 2026' : 'October 2026'}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="legal-body">
        <div className="wrap">
          <div className="legal-layout">
            {/* Sticky Navigation Sidebar */}
            <aside className="legal-sidebar">
              <div className="legal-sidebar-header">
                <span>{t.legalCommon.tableOfContents}</span>
                <span className="legal-meta-badge">{SECTIONS.length} {isRTL ? 'بنداً' : 'Sections'}</span>
              </div>
              <ul className="legal-toc-list">
                {SECTIONS.map((sec) => (
                  <li
                    key={sec.id}
                    className={`legal-toc-item ${activeSection === sec.id ? 'active' : ''}`}
                  >
                    <a
                      href={`#${sec.id}`}
                      onClick={(e) => handleTocClick(e, sec.id)}
                    >
                      {isRTL ? sec.titleAr : sec.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="legal-sidebar-switch">
                <div className="legal-sidebar-switch-title">{t.legalCommon.switchToTerms}</div>
                <a
                  href={`/${lang}/terms-and-conditions`}
                  className="legal-sidebar-switch-link"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) onNavigate('/terms-and-conditions');
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                  </svg>
                  {t.legalCommon.switchToTermsLink} &rarr;
                </a>
              </div>
            </aside>

            {/* Document Content */}
            <main className="legal-main">
              {/* Compliance Highlight Box */}
              <div className="legal-highlight-box">
                <p>
                  <strong>Regulatory Statement:</strong> This Privacy Policy is issued with reference to Qatar&rsquo;s <strong>Law No. 13 of 2016 on the Protection of Personal Data Privacy (&ldquo;PDPPL&rdquo;)</strong> and guidance issued by the Compliance and Data Protection Department (CDPD) of the Ministry of Communications and Information Technology (MCIT).
                </p>
              </div>

              {/* Section 1 */}
              <section id="section-1" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">01</span>
                  <h2 className="legal-section-title">Introduction</h2>
                </div>
                <p className="legal-p">
                  This Privacy Policy explains how <strong>VEB For Digital Trade Services W.L.L.</strong> (&ldquo;VEB,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) collects, uses, discloses, and protects personal data when Buyers, Suppliers, and other individuals (&ldquo;you&rdquo;) interact with VEB. This Policy should be read together with our Terms and Conditions and is issued with reference to Qatar&rsquo;s Law No. 13 of 2016 on the Protection of Personal Data Privacy (&ldquo;PDPPL&rdquo;) and applicable guidance issued by the Compliance and Data Protection Department (CDPD) of the Ministry of Communications and Information Technology (MCIT).
                </p>
              </section>

              {/* Section 2 */}
              <section id="section-2" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">02</span>
                  <h2 className="legal-section-title">Data Controller</h2>
                </div>
                <p className="legal-p">
                  <strong>VEB For Digital Trade Services W.L.L.</strong>, with its registered office at Al Matar Center, 1st Floor, Office 107, Doha, Qatar (Commercial Registration No. 247533), is the data controller responsible for personal data processed through the Platform, unless stated otherwise for a specific service.
                </p>
              </section>

              {/* Section 3 */}
              <section id="section-3" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">03</span>
                  <h2 className="legal-section-title">Scope</h2>
                </div>
                <p className="legal-p">
                  This Policy applies to personal data collected through the Platform applications and website, account registration, RFQ and Order activity, customer support interactions, and related communications. It does not apply to third-party websites or services linked from the Platform.
                </p>
              </section>

              {/* Section 4 */}
              <section id="section-4" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">04</span>
                  <h2 className="legal-section-title">Personal Data We Collect</h2>
                </div>
                <p className="legal-p">We collect the following categories of personal data:</p>
                <div className="legal-def-list">
                  <div className="legal-def-item">
                    <span className="legal-def-term">4.1 Account and Registration Data</span>
                    <p className="legal-def-desc">
                      Name, job title, company name, business email, phone number, company registration details, and account credentials, for both Buyer and Supplier representatives.
                    </p>
                  </div>
                  <div className="legal-def-item">
                    <span className="legal-def-term">4.2 Compliance and Verification Data</span>
                    <p className="legal-def-desc">
                      Trade licenses, insurance documents, and regulatory certifications submitted by Suppliers (which may reference Kahramaa, Qatar Civil Defence, MOPH, or PSSLD registrations) as part of Compliance Verification.
                    </p>
                  </div>
                  <div className="legal-def-item">
                    <span className="legal-def-term">4.3 Transaction Data</span>
                    <p className="legal-def-desc">
                      RFQs, quotations, Orders, invoices, payment confirmations, and related communications between Users.
                    </p>
                  </div>
                  <div className="legal-def-item">
                    <span className="legal-def-term">4.4 Performance Data</span>
                    <p className="legal-def-desc">
                      Information used to generate Supplier performance scores and Buyer reliability scores, such as delivery timeliness, order fulfilment, and payment history.
                    </p>
                  </div>
                  <div className="legal-def-item">
                    <span className="legal-def-term">4.5 Technical and Usage Data</span>
                    <p className="legal-def-desc">
                      IP address, device and browser information, log data, and cookie identifiers (see Section 12).
                    </p>
                  </div>
                  <div className="legal-def-item">
                    <span className="legal-def-term">4.6 Communications</span>
                    <p className="legal-def-desc">
                      Correspondence with our support team, and information you choose to provide in surveys, discovery interviews, or feedback forms.
                    </p>
                  </div>
                </div>
                <p className="legal-p" style={{ marginTop: '16px', color: '#64748b', fontStyle: 'italic' }}>
                  We do not intentionally collect sensitive personal data (such as health or biometric data) and ask that you do not submit such data through the Platform unless specifically required for a defined purpose and with an appropriate legal basis.
                </p>
              </section>

              {/* Section 5 */}
              <section id="section-5" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">05</span>
                  <h2 className="legal-section-title">How We Use Personal Data</h2>
                </div>
                <p className="legal-p">
                  We use personal data to create and administer accounts; operate the Compliance Verification process; facilitate RFQs, quotations, and Orders between Buyers and Suppliers; generate and display Supplier performance and Buyer reliability scores; process payments and administer the Escrow Service; provide customer support; send Platform notifications and, where you have consented, marketing communications; detect and prevent fraud, abuse, and violations of our Terms; comply with legal and regulatory obligations; and improve and develop the Platform, including matchmaking and supplier taxonomy.
                </p>
              </section>

              {/* Section 6 */}
              <section id="section-6" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">06</span>
                  <h2 className="legal-section-title">Legal Basis for Processing</h2>
                </div>
                <p className="legal-p">
                  We process personal data on the basis of your consent (for example, at registration or for marketing communications), performance of the contract between you and VEB under our Terms, our legitimate interests in operating, securing, and improving a trustworthy marketplace, and compliance with legal obligations under Qatari law.
                </p>
              </section>

              {/* Section 7 */}
              <section id="section-7" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">07</span>
                  <h2 className="legal-section-title">How We Share Personal Data</h2>
                </div>
                <p className="legal-p">
                  <strong>7.1 With other Users:</strong> To facilitate the marketplace, certain information is shared between Buyers and Suppliers as necessary to process an RFQ or Order &mdash; for example, a Supplier&rsquo;s compliance status and company details are visible to Buyers evaluating quotations, and a Buyer&rsquo;s RFQ and relevant reliability information are visible to Suppliers who receive that RFQ. Buyer reliability scores are never made visible publicly or to other Buyers.
                </p>
                <p className="legal-p">
                  <strong>7.2 With service providers:</strong> We share data with vendors who support our operations, such as hosting providers, payment processors, and the Escrow Service partner, under confidentiality and data protection obligations.
                </p>
                <p className="legal-p">
                  <strong>7.3 With regulators and authorities:</strong> We may disclose data where required by Qatari law, in response to a valid legal request, or to relevant sector regulators (such as Kahramaa, Qatar Civil Defence, MOPH, or PSSLD) in connection with a Supplier&rsquo;s compliance status.
                </p>
                <p className="legal-p">
                  <strong>7.4 Business transfers:</strong> Data may be transferred in connection with a merger, acquisition, financing, or sale of assets, subject to appropriate safeguards.
                </p>
                <p className="legal-p">
                  <strong>7.5 No sale of personal data:</strong> We do not sell personal data to third parties.
                </p>
              </section>

              {/* Section 8 */}
              <section id="section-8" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">08</span>
                  <h2 className="legal-section-title">Cross-Border Data Transfers</h2>
                </div>
                <p className="legal-p">
                  Where personal data is transferred outside Qatar (for example, to a cloud hosting provider), we take steps consistent with PDPPL requirements to ensure the data receives an adequate level of protection, including contractual safeguards with recipients.
                </p>
              </section>

              {/* Section 9 */}
              <section id="section-9" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">09</span>
                  <h2 className="legal-section-title">Data Retention</h2>
                </div>
                <p className="legal-p">
                  We retain personal data for as long as your account is active and for a reasonable period afterward to comply with legal, tax, and regulatory recordkeeping obligations, resolve disputes, and enforce our agreements. Compliance Verification documents are retained for the period required to demonstrate a Supplier&rsquo;s historical certification status. We delete or anonymize data once it is no longer needed for these purposes.
                </p>
              </section>

              {/* Section 10 */}
              <section id="section-10" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">10</span>
                  <h2 className="legal-section-title">Data Security</h2>
                </div>
                <p className="legal-p">
                  We implement administrative, technical, and physical safeguards designed to protect personal data against unauthorized access, loss, misuse, or alteration, including access controls tied to our account identification system, encryption of data in transit, and restricted internal access to compliance documents. No system is completely secure, and we encourage Users to safeguard their own account credentials.
                </p>
              </section>

              {/* Section 11 */}
              <section id="section-11" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">11</span>
                  <h2 className="legal-section-title">Your Rights</h2>
                </div>
                <p className="legal-p">
                  Subject to the PDPPL, you have the right to access the personal data we hold about you, request correction of inaccurate or incomplete data, request deletion of your data (subject to our legitimate retention needs), object to certain processing including direct marketing, and request that we restrict processing in certain circumstances. To exercise these rights, contact us at <a href="mailto:info@vebqatar.com" style={{ color: 'var(--teal-hover)', textDecoration: 'underline' }}>info@vebqatar.com</a>. We will respond within the timeframe required by applicable law.
                </p>
              </section>

              {/* Section 12 */}
              <section id="section-12" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">12</span>
                  <h2 className="legal-section-title">Cookies and Tracking Technologies</h2>
                </div>
                <p className="legal-p">
                  We use cookies and similar technologies to operate the Platform, remember preferences, and understand usage patterns. You can control cookies through your browser settings; disabling certain cookies may affect Platform functionality. Where required, we will request your consent before setting non-essential cookies.
                </p>
              </section>

              {/* Section 13 */}
              <section id="section-13" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">13</span>
                  <h2 className="legal-section-title">Children’s Data</h2>
                </div>
                <p className="legal-p">
                  The Platform is a business-to-business service intended for use by company representatives acting in a professional capacity and is not directed at, or intended for use by, individuals under 18. We do not knowingly collect personal data from children.
                </p>
              </section>

              {/* Section 14 */}
              <section id="section-14" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">14</span>
                  <h2 className="legal-section-title">Data Breach Notification</h2>
                </div>
                <p className="legal-p">
                  In the event of a personal data breach that poses a risk to your rights, we will notify the Compliance and Data Protection Department and affected Users in accordance with the timelines and thresholds required under the PDPPL.
                </p>
              </section>

              {/* Section 15 */}
              <section id="section-15" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">15</span>
                  <h2 className="legal-section-title">Changes to This Policy</h2>
                </div>
                <p className="legal-p">
                  We may update this Policy from time to time. Material changes will be notified through the Platform or by email at least 14 days before taking effect. The &ldquo;Effective Date&rdquo; on the cover page indicates when it was last revised.
                </p>
              </section>

              {/* Section 16 */}
              <section id="section-16" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">16</span>
                  <h2 className="legal-section-title">Contact Us</h2>
                </div>
                <p className="legal-p">
                  For questions about this Privacy Policy or to exercise your data protection rights, please contact our Data Protection Office:
                </p>
                <div className="legal-contact-card">
                  <div className="legal-contact-company">VEB For Digital Trade Services W.L.L.</div>
                  <div className="legal-contact-grid">
                    <div className="legal-contact-detail">
                      <strong>Office Address</strong>
                      Al Matar Center<br />
                      Building 272, 1st Floor<br />
                      Office 107 - AL 02<br />
                      Matar Qadeem, Doha, Qatar
                    </div>
                    <div className="legal-contact-detail">
                      <strong>Commercial Registration</strong>
                      CR No.: 247533<br />
                      State of Qatar
                    </div>
                    <div className="legal-contact-detail">
                      <strong>Data Protection Contact</strong>
                      <a href="mailto:info@vebqatar.com">info@vebqatar.com</a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Switch Banner */}
              <div className="legal-switch-banner">
                <div className="legal-switch-banner-text">
                  <h4>Looking for our Terms and Conditions?</h4>
                  <p>Review the marketplace rules, eligibility, scoring systems, and commercial commitments.</p>
                </div>
                <button
                  type="button"
                  className="btn btn-teal"
                  onClick={() => {
                    if (onNavigate) onNavigate('/terms-and-conditions');
                  }}
                >
                  View Terms &amp; Conditions &rarr;
                </button>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
