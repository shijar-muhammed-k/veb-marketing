import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/legal.css';

const SECTIONS = [
  { id: 'section-1', title: '1. Introduction and Acceptance', titleAr: '١. المقدمة والموافقة' },
  { id: 'section-2', title: '2. Definitions', titleAr: '٢. التعريفات والمصطلحات' },
  { id: 'section-3', title: '3. Supplier Eligibility and Registration', titleAr: '٣. أهلية وتسجيل الموردين' },
  { id: 'section-4', title: '4. Compliance Verification and Ongoing Compliance', titleAr: '٤. التحقق من الامتثال والالتزام المستمر' },
  { id: 'section-5', title: '5. Supplier’s Status and Role of Platform', titleAr: '٥. الوضع القانوني للمورد ودور المنصة' },
  { id: 'section-6', title: '6. Quotations and Orders', titleAr: '٦. عروض الأسعار وأوامر التوريد' },
  { id: 'section-7', title: '7. Facilitation & Coordination (F&C) Fee', titleAr: '٧. رسوم التسهيل والتنسيق (F&C)' },
  { id: 'section-8', title: '8. Payment Milestones', titleAr: '٨. مراحل وإجراءات الدفع' },
  { id: 'section-9', title: '9. Performance Standards', titleAr: '٩. معايير ومستويات الأداء' },
  { id: 'section-10', title: '10. Scoring & Buyer Reliability Info', titleAr: '١٠. تقييم الأداء وموثوقية المشترين' },
  { id: 'section-11', title: '11. Disputes', titleAr: '١١. تسوية النزاعات' },
  { id: 'section-12', title: '12. Prohibited Conduct', titleAr: '١٢. السلوكيات المحظورة' },
  { id: 'section-13', title: '13. Confidentiality and Data Protection', titleAr: '١٣. السرية وحماية البيانات' },
  { id: 'section-14', title: '14. Intellectual Property and Content', titleAr: '١٤. الملكية الفكرية والمحتوى' },
  { id: 'section-15', title: '15. Disclaimers & Limitation of Liability', titleAr: '١٥. إخلاء وحدود المسؤولية' },
  { id: 'section-16', title: '16. Indemnification', titleAr: '١٦. التعويض وإبراء الذمة' },
  { id: 'section-17', title: '17. Suspension and Termination', titleAr: '١٧. التعليق وإنهاء الحساب' },
  { id: 'section-18', title: '18. Governing Law and Arbitration', titleAr: '١8. القانون الحاكم والتحكيم' },
  { id: 'section-19', title: '19. Amendments', titleAr: '١٩. التعديلات' },
  { id: 'section-20', title: '20. General Provisions', titleAr: '٢٠. أحكام عامة' },
  { id: 'section-21', title: '21. Contact', titleAr: '٢١. معلومات التواصل' }
];

export default function SupplierTermsAndConditions({ onNavigate }) {
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
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              {t.legalCommon.home}
            </a>
            <span className="legal-breadcrumbs-separator">/</span>
            <span>{isRTL ? 'شروط وأحكام الموردين' : 'Supplier Terms and Conditions'}</span>
          </div>

          <div className="pill">{isRTL ? 'شروط الموردين الرسمية' : 'Supplier Agreement'}</div>
          <h1 className="legal-hero-title">
            {isRTL ? 'شروط وأحكام تسجيل ومشاركة الموردين' : 'Supplier Terms and Conditions'}
          </h1>
          <p className="legal-hero-subtitle">
            {isRTL
              ? 'شروط التسجيل والمشاركة للموردين في نظام فيب للمشتريات الإلكترونية B2B — إدارة المرافق، الصيانة والتشغيل (MRO) — شركة فيب لخدمات التجارة الرقمية ذ.م.م.'
              : 'Terms of Registration and Participation for Suppliers — VEB B2B E-Procurement System (Facilities Management & MRO) operated by VEB For Digital Trade Services W.L.L.'}
          </p>

          <div className="legal-meta-bar">
            <div className="legal-meta-item">
              <span>{isRTL ? 'المنصة:' : 'Platform:'}</span>
              <strong>www.vebqatar.com</strong>
            </div>
            <div className="legal-meta-item">
              <span>{isRTL ? 'الجهة المشغلة:' : 'Entity:'}</span>
              <strong>{isRTL ? 'شركة فيب لخدمات التجارة الرقمية ذ.م.م (س.ت: 247533)' : 'VEB For Digital Trade Services W.L.L. (CR: 247533)'}</strong>
            </div>
            <div className="legal-meta-item">
              <span>{isRTL ? 'الإصدار:' : 'Version:'}</span>
              <span className="legal-meta-badge">{isRTL ? 'مسودة 1.0' : 'Draft 1.0'}</span>
            </div>
            <div className="legal-meta-item">
              <span>{isRTL ? 'تاريخ السريان:' : 'Effective Date:'}</span>
              <strong>[Effective Date]</strong>
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
                <div className="legal-sidebar-switch-title">
                  {isRTL ? 'روابط قانونية ذات صلة:' : 'Related Legal Documents:'}
                </div>
                <a
                  href={`/${lang}/terms-and-conditions`}
                  className="legal-sidebar-switch-link"
                  style={{ marginBottom: '8px' }}
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) onNavigate('/terms-and-conditions');
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  {isRTL ? 'الشروط والأحكام العامة' : 'General Terms & Conditions'} &rarr;
                </a>
                <a
                  href={`/${lang}/privacy-policy`}
                  className="legal-sidebar-switch-link"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) onNavigate('/privacy-policy');
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  {t.legalCommon.switchToPrivacyLink} &rarr;
                </a>
              </div>
            </aside>

            {/* Document Content */}
            <main className="legal-main">
              {/* Draft Notice Box */}
              <div className="legal-notice-box">
                <svg className="legal-notice-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <div>
                  <div className="legal-notice-title">Draft 1.0 — Terms of Registration and Participation for Suppliers</div>
                  <div className="legal-notice-text">
                    This document governs the registration and participation of suppliers on the VEB B2B E-Procurement System. These Supplier Terms apply together with the general VEB Terms and Conditions and the Privacy Policy. If there is a conflict between the general Terms and Conditions and these Supplier Terms on a matter relating to suppliers, these Supplier Terms prevail.
                  </div>
                </div>
              </div>

              {/* Section 1 */}
              <section id="section-1" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">01</span>
                  <h2 className="legal-section-title">Introduction and Acceptance</h2>
                </div>
                <p className="legal-p">
                  These Supplier Terms and Conditions (&ldquo;Supplier Terms&rdquo;) govern the registration and participation of suppliers on the VEB business-to-business e-procurement System operated by <strong>VEB For Digital Trade Services W.L.L.</strong> (&ldquo;VEB,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) at <a href="https://www.vebqatar.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--teal-hover)', fontWeight: 600 }}>www.vebqatar.com</a> and through related applications and services (the &ldquo;Platform&rdquo;). The Platform connects compliance-verified suppliers with buyers in Qatar&rsquo;s facilities management (FM) and maintenance, repair and operations (MRO) sector.
                </p>
                <p className="legal-p">
                  By registering as a supplier, ticking the acceptance box, or using the Platform to submit a quotation or perform an Order, the company or entity you represent (&ldquo;Supplier,&rdquo; &ldquo;you&rdquo;) agrees to be bound by these Supplier Terms. You confirm that the individual completing registration has authority to bind the Supplier.
                </p>
                <p className="legal-p">
                  These Supplier Terms apply together with the VEB Terms and Conditions and the Privacy Policy, each of which is incorporated by reference. If there is a conflict between the Terms and Conditions and these Supplier Terms on a matter relating to suppliers, these Supplier Terms prevail.
                </p>
              </section>

              {/* Section 2 */}
              <section id="section-2" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">02</span>
                  <h2 className="legal-section-title">Definitions</h2>
                </div>
                <div className="legal-def-list">
                  <div className="legal-def-item">
                    <span className="legal-def-term">Buyer</span>
                    <p className="legal-def-desc">
                      A registered user that posts RFQs and procures goods or services through the Platform.
                    </p>
                  </div>
                  <div className="legal-def-item">
                    <span className="legal-def-term">RFQ</span>
                    <p className="legal-def-desc">
                      A Request for Quotation submitted by a Buyer describing the goods or services sought.
                    </p>
                  </div>
                  <div className="legal-def-item">
                    <span className="legal-def-term">Order</span>
                    <p className="legal-def-desc">
                      A binding commercial agreement formed between a Buyer and a Supplier when the Buyer accepts the Supplier&rsquo;s quotation through the Platform.
                    </p>
                  </div>
                  <div className="legal-def-item">
                    <span className="legal-def-term">Project</span>
                    <p className="legal-def-desc">
                      The supply of goods, performance of services, or combination of both under an Order.
                    </p>
                  </div>
                  <div className="legal-def-item">
                    <span className="legal-def-term">Project Value</span>
                    <p className="legal-def-desc">
                      The total agreed price of a Project in Qatari Riyals (QAR) as stated in the accepted Order, including any variation approved through the Platform, [and exclusive of applicable taxes].
                    </p>
                  </div>
                  <div className="legal-def-item">
                    <span className="legal-def-term">F&C Fee</span>
                    <p className="legal-def-desc">
                      The Facilitation and Coordination Fee payable to VEB under Section 7.
                    </p>
                  </div>
                  <div className="legal-def-item">
                    <span className="legal-def-term">Payment Milestone</span>
                    <p className="legal-def-desc">
                      A stage at which part of the Project Value becomes payable, as set out in Section 8.
                    </p>
                  </div>
                  <div className="legal-def-item">
                    <span className="legal-def-term">Escrow Service</span>
                    <p className="legal-def-desc">
                      The payment-holding arrangement administered by Escrow Partner under which funds for a Payment Milestone may be held and released on the conditions in these Supplier Terms.
                    </p>
                  </div>
                  <div className="legal-def-item">
                    <span className="legal-def-term">Compliance Verification</span>
                    <p className="legal-def-desc">
                      VEB&rsquo;s review of a Supplier&rsquo;s trade licenses, insurance, and regulatory approvals and certifications (which may include Kahramaa, Qatar Civil Defence, Ministry of Public Health (MOPH), and PSSLD registrations, as relevant to the Supplier&rsquo;s scope of work).
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section id="section-3" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">03</span>
                  <h2 className="legal-section-title">Supplier Eligibility and Registration</h2>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">3.1 Licensing and Sector Limitation:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    Only entities duly licensed and registered in Qatar to carry out the business activities they offer on the Platform may register as Suppliers. The Platform is limited to FM and MRO procurement; VEB does not support, and may reject or remove, Projects relating to any other sector.
                  </p>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">3.2 Accurate Information:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    You must provide accurate, current, and complete information at registration, including your Commercial Registration, trade license, tax and contact details, authorized representatives, and declared scope of work, and must update it promptly when it changes.
                  </p>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">3.3 Account Identification & Confidentiality:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    On approval, you will receive a unique Supplier account identifier. You are responsible for all activity under your account and for keeping credentials confidential. Notify VEB immediately of any suspected unauthorized use.
                  </p>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">3.4 Free Onboarding & Discretion:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    Registration and onboarding are free of charge. VEB may accept or reject any application at its discretion and is not required to give reasons.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section id="section-4" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">04</span>
                  <h2 className="legal-section-title">Compliance Verification and Ongoing Compliance</h2>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">4.1 Verification Prerequisite:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    Your account will be activated to receive RFQs and fulfil Orders only after you submit the documents required for your declared scope of work and pass Compliance Verification.
                  </p>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">4.2 Supplier Responsibility for Validity:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    You are solely responsible for the accuracy, validity, and timely renewal of every license, permit, insurance, and certification you hold or display on the Platform. You must notify VEB immediately if any of them is suspended, revoked, restricted, or expires, and you must not accept or perform any Order requiring a certification you do not currently hold.
                  </p>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">4.3 Nature of Verification:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    Compliance Verification confirms only that the required documents were submitted and appeared valid when reviewed. It is not a warranty by VEB of your ongoing standing, quality, or performance. VEB may request updated documents or re-verify you at any time and may suspend your account while it does so.
                  </p>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">4.4 Material Breach:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    Submitting false, forged, or expired documents, or misrepresenting your licensing, certifications, or capacity, is a material breach of these Supplier Terms.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section id="section-5" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">05</span>
                  <h2 className="legal-section-title">Supplier’s Status and the Role of the Platform</h2>
                </div>
                <p className="legal-p">
                  The Supplier acts as an independent business. Nothing in these Supplier Terms creates a partnership, joint venture, agency, or employment relationship between VEB and the Supplier.
                </p>
                <div className="legal-highlight-box">
                  <p>
                    VEB facilitates introductions and coordination between Buyers and Suppliers and administers the payment arrangements described below, but it is not a party to any Order, does not supply, inspect, or insure the goods or services, and does not guarantee a Buyer&rsquo;s payment or a Supplier&rsquo;s performance except as expressly stated in these Supplier Terms.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section id="section-6" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">06</span>
                  <h2 className="legal-section-title">Quotations and Orders</h2>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">6.1 Quotation as Offer:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    A quotation you submit is an offer to the Buyer and remains open for the validity period stated in it [or, if none is stated, [14] days]. When the Buyer accepts it through the Platform, a binding Order is formed between the Buyer and you.
                  </p>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">6.2 Quotation Pricing & Content:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    Each quotation must state accurate pricing in QAR, scope, specifications, delivery or completion timeline, warranty terms, and any assumptions or exclusions. You are solely responsible for taking the F&C Fee and all your other costs into account when pricing.
                  </p>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">6.3 Performance Capability:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    You must not accept an Order you cannot perform in accordance with its specifications, timeline, and applicable compliance requirements.
                  </p>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">6.4 Variations and Changes:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    Any change to scope, price, or timeline must be agreed with the Buyer and recorded through the Platform. An approved change that alters the price is a variation and adjusts the Project Value.
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section id="section-7" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">07</span>
                  <h2 className="legal-section-title">Facilitation and Coordination (F&C) Fee</h2>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">7.1 Purpose:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    The F&C Fee compensates VEB for introducing the Buyer and Supplier, verifying and onboarding the Supplier, coordinating the Order process, and operating the Platform and payment arrangements in respect of each Project.
                  </p>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">7.2 Fee Schedule:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    The F&C Fee is calculated by applying the rates below to the portions of the Project Value that fall within each band:
                  </p>

                  <div className="legal-table-caption">
                    <span className="legal-table-caption-badge">Table 1</span>
                    F&C Fee Bands (applied marginally)
                  </div>
                  <div className="legal-table-container">
                    <table className="legal-table">
                      <thead>
                        <tr>
                          <th>Portion of Project Value</th>
                          <th>F&C Fee Rate on That Portion</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><strong>The first QAR 25,000</strong></td>
                          <td><span className="legal-meta-badge">5%</span></td>
                        </tr>
                        <tr>
                          <td><strong>The next QAR 75,000</strong> (above QAR 25,000 up to QAR 100,000)</td>
                          <td><span className="legal-meta-badge">4%</span></td>
                        </tr>
                        <tr>
                          <td><strong>The next QAR 400,000</strong> (above QAR 100,000 up to QAR 500,000)</td>
                          <td><span className="legal-meta-badge">3%</span></td>
                        </tr>
                        <tr>
                          <td><strong>Any portion above QAR 500,000</strong></td>
                          <td><span className="legal-meta-badge">2%</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="legal-clause">
                  <strong className="legal-clause-title">7.3 Marginal Calculation:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    The bands are applied marginally: each rate applies only to the portion of the Project Value that falls within its band, and the F&C Fee is the sum of the amounts calculated for each band. For example, for a Project Value of QAR 150,000, the first QAR 25,000 is charged at 5% (QAR 1,250), the next QAR 75,000 at 4% (QAR 3,000), and the remaining QAR 50,000 at 3% (QAR 1,500), giving an F&C Fee of QAR 5,750. The F&C Fee divided by the Project Value is the effective rate for that Project.
                  </p>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">7.4 Who Pays:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    The F&C Fee is payable by the Supplier. The Buyer pays the Project Value and is not charged the F&C Fee in addition.
                  </p>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">7.5 Deduction at Source:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    VEB will deduct the F&C Fee from the Project payments before releasing them to the Supplier, in proportion to each Payment Milestone. Each deduction equals the F&C Fee multiplied by that Payment Milestone&rsquo;s share of the Project Value. A worked example appears in Table 3 in Section 8.
                  </p>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">7.6 Payments Outside Platform Arrangements:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    If a Buyer pays any part of the Project Value to you directly, with VEB&rsquo;s written approval or otherwise, you must pay the corresponding part of the F&C Fee to VEB within [seven (7)] days of receipt, without set-off or deduction. VEB may recover unpaid fees from any other amounts it holds or releases to you.
                  </p>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">7.7 Variations:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    If the Project Value changes through an approved variation, the F&C Fee is recalculated on the final Project Value by applying the bands in Table 1 to that amount. Any difference is settled with the next payment released to you or, if none remains, within [seven (7)] days of VEB&rsquo;s invoice.
                  </p>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">7.8 Cancelled or Terminated Projects:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    If a Project is cancelled or terminated before completion, the F&C Fee is payable on the amounts actually paid or released for that Project, at the effective rate (see Section 7.3) that applied to the originally agreed Project Value. Amounts never paid attract no F&C Fee.
                  </p>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">7.9 No Circumvention:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    You must not use an introduction, RFQ, or quotation made through the Platform to conclude a Project with that Buyer outside the Platform to avoid the F&C Fee. If you do, the F&C Fee is still payable as if the Project had been concluded through the Platform, including for repeat or follow-on work with that Buyer within [twelve (12)] months of the first introduction, and VEB may suspend or terminate your account under Section 17.
                  </p>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">7.10 Changes to the Fee:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    VEB may revise the F&C Fee schedule on at least [thirty (30)] days&rsquo; notice through the Platform or by email. A revision does not affect Orders accepted before it takes effect.
                  </p>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">7.11 Taxes and Statements:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    The F&C Fee is stated exclusive of any applicable taxes, which are payable in addition where applicable. VEB will make a statement of each F&C Fee deduction available to you on the Platform.
                  </p>
                </div>
              </section>

              {/* Section 8 */}
              <section id="section-8" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">08</span>
                  <h2 className="legal-section-title">Payment Milestones</h2>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">8.1 Standard Schedule:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    Payment of the Project Value follows the schedule below, according to the Project Value. The schedule applies by default to every Order.
                  </p>

                  <div className="legal-table-caption">
                    <span className="legal-table-caption-badge">Table 2</span>
                    Payment Milestones by Project Value
                  </div>
                  <div className="legal-table-container">
                    <table className="legal-table">
                      <thead>
                        <tr>
                          <th>Project Value</th>
                          <th>Payment Milestones</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><strong>Less than QAR 10,000</strong></td>
                          <td>Single payment at the end (100% on completion)</td>
                        </tr>
                        <tr>
                          <td><strong>QAR 10,000 up to and including QAR 25,000</strong></td>
                          <td>50% advance; 50% on completion</td>
                        </tr>
                        <tr>
                          <td><strong>More than QAR 25,000</strong></td>
                          <td>30% advance; 40% on mid-progress; 30% on completion</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="legal-clause">
                  <strong className="legal-clause-title">8.2 Milestone Triggers:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>Unless the Order states otherwise:</p>
                  <ul className="legal-list">
                    <li className="legal-list-item">
                      <span className="legal-list-bullet"></span>
                      <span><strong>Advance:</strong> Payable after the Order is accepted and released to the Supplier once the Supplier confirms that it has commenced the Project.</span>
                    </li>
                    <li className="legal-list-item">
                      <span className="legal-list-bullet"></span>
                      <span><strong>Mid-progress:</strong> Released when the Supplier notifies the Buyer that the mid-point of the Project has been reached (as defined in the Order by scope delivered, work completed, or timeline) and the Buyer confirms it, or it is deemed confirmed under Section 8.4.</span>
                    </li>
                    <li className="legal-list-item">
                      <span className="legal-list-bullet"></span>
                      <span><strong>Completion:</strong> Released when the Project is delivered or completed and the Buyer accepts it, evidenced by a Certificate of Completion issued through the Platform, or deemed accepted under Section 8.4.</span>
                    </li>
                  </ul>
                </div>

                <div className="legal-clause">
                  <strong className="legal-clause-title">8.3 Payment Handling:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    Where the Escrow Service applies to a Project, the Buyer funds each Payment Milestone through the Platform&rsquo;s payment arrangements, funds are held by the escrow partner, and VEB instructs their release to the Supplier, net of the F&C Fee, when the conditions in this Section are met. VEB does not guarantee delivery, quality, or performance of the Project.
                  </p>
                </div>

                <div className="legal-clause">
                  <strong className="legal-clause-title">8.4 Confirmation and Deemed Acceptance:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    After you notify completion of a Payment Milestone, the Buyer has [five (5)] business days to confirm it or to raise a dispute with written reasons through the Platform. If the Buyer does neither, the Payment Milestone is deemed confirmed and the corresponding funds will be released to you.
                  </p>
                </div>

                <div className="legal-clause">
                  <strong className="legal-clause-title">8.5 Disputed Milestones:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    If a Payment Milestone is disputed, VEB may hold the disputed amount under Section 11 and release the undisputed balance.
                  </p>
                </div>

                <div className="legal-clause">
                  <strong className="legal-clause-title">8.6 Advance Protection:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    If you fail to commence the Project within [ten (10)] days of the agreed start date, or abandon it, VEB may return any advance held to the Buyer and you must refund any advance already released to you, less the value of work properly performed and accepted.
                  </p>
                </div>

                <div className="legal-clause">
                  <strong className="legal-clause-title">8.7 Varying the Schedule:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    The Payment Milestones in Table 2 may be varied for a particular Order only by written agreement of the Buyer and Supplier, recorded and approved through the Platform. A variation of the schedule does not change the F&C Fee.
                  </p>
                </div>

                <div className="legal-clause">
                  <strong className="legal-clause-title">8.8 Invoicing:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    You must issue to the Buyer the invoices and tax documents required by law for each Payment Milestone.
                  </p>
                </div>

                <div className="legal-clause">
                  <strong className="legal-clause-title">8.9 Worked Example:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    For a Project Value of QAR 40,000, the Payment Milestones are 30% / 40% / 30% because the Project Value exceeds QAR 25,000, and the F&C Fee is QAR 1,850, being 5% on the first QAR 25,000 (QAR 1,250) plus 4% on the remaining QAR 15,000 (QAR 600):
                  </p>

                  <div className="legal-table-caption">
                    <span className="legal-table-caption-badge">Table 3</span>
                    Illustration: QAR 40,000 Project Breakdown
                  </div>
                  <div className="legal-table-container">
                    <table className="legal-table">
                      <thead>
                        <tr>
                          <th>Milestone</th>
                          <th>Share</th>
                          <th>Payment (QAR)</th>
                          <th>F&C Deduction (QAR)</th>
                          <th>Net to Supplier (QAR)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><strong>Advance</strong></td>
                          <td>30%</td>
                          <td>12,000</td>
                          <td>555</td>
                          <td><strong>11,445</strong></td>
                        </tr>
                        <tr>
                          <td><strong>Mid-progress</strong></td>
                          <td>40%</td>
                          <td>16,000</td>
                          <td>740</td>
                          <td><strong>15,260</strong></td>
                        </tr>
                        <tr>
                          <td><strong>Completion</strong></td>
                          <td>30%</td>
                          <td>12,000</td>
                          <td>555</td>
                          <td><strong>11,445</strong></td>
                        </tr>
                        <tr className="legal-table-row-highlight">
                          <td><strong>Total</strong></td>
                          <td><strong>100%</strong></td>
                          <td><strong>40,000</strong></td>
                          <td><strong>1,850</strong></td>
                          <td><strong>38,150</strong></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="legal-p" style={{ fontSize: '13px', color: '#64748b', fontStyle: 'italic' }}>
                    The figures above are illustrative only and do not form part of any Order.
                  </p>
                </div>
              </section>

              {/* Section 9 */}
              <section id="section-9" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">09</span>
                  <h2 className="legal-section-title">Performance Standards</h2>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">9.1 Due Skill and Compliance:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    You must perform each Order with due skill, care, and diligence, in accordance with the agreed specifications, quantities, timeline, and applicable Qatari law and regulations, including health, safety, and environmental requirements and the standards of any regulator relevant to your scope of work.
                  </p>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">9.2 Goods Quality & Qualified Personnel:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    Goods must be new, genuine, of satisfactory quality, free from third-party claims, and fit for the purpose stated in the Order. Services must be performed by suitably qualified and licensed personnel.
                  </p>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">9.3 Insurance Coverage:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    You must maintain insurance appropriate to your scope of work and the Order, and provide evidence on request.
                  </p>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">9.4 Subcontracting:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    You must not subcontract all or any material part of an Order without the Buyer&rsquo;s prior consent through the Platform, and you remain fully responsible for any subcontractor.
                  </p>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">9.5 Defect Remediation:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    You must remedy, at your own cost, any defect or non-conformity notified within the warranty period stated in the Order, or if none is stated, within [twelve (12)] months of acceptance.
                  </p>
                </div>
              </section>

              {/* Section 10 */}
              <section id="section-10" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">10</span>
                  <h2 className="legal-section-title">Performance Scoring and Buyer Reliability Information</h2>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">10.1 Supplier Scoring System:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    VEB maintains a Supplier performance scoring system (ranging from Platinum to Flagged tiers) based on factors such as delivery reliability, quality, responsiveness, and compliance standing. Your score and tier may be shown to Buyers to inform their sourcing decisions.
                  </p>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">10.2 Confidential Buyer Reliability Data:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    VEB also maintains Buyer reliability information, which may be shown to you only for RFQs you have received from that Buyer. You must treat it as confidential, use it only to decide whether to quote, and not disclose it publicly or to any other person.
                  </p>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">10.3 Non-Warranty & Anti-Manipulation:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    Scores are provided for information. VEB does not guarantee their completeness or accuracy. You may request a review of your own score by contacting VEB at <a href="mailto:info@vebqatar.com" style={{ color: 'var(--teal-hover)', fontWeight: 600 }}>info@vebqatar.com</a>. You must not manipulate, or attempt to manipulate, any score, including through false reviews, fictitious Orders, or collusion.
                  </p>
                </div>
              </section>

              {/* Section 11 */}
              <section id="section-11" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">11</span>
                  <h2 className="legal-section-title">Disputes</h2>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">11.1 Amicable Negotiation & VEB Resolution Service:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    You should first try to resolve any dispute with a Buyer directly. If you cannot, either party may refer the dispute to VEB&rsquo;s structured resolution process, which may include review of Platform records, a hold on disputed funds, and a recommended resolution.
                  </p>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">11.2 Legal Nature of VEB Support:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    VEB&rsquo;s role in resolving disputes is a Platform service. It is not arbitration, adjudication, or legal advice, and it does not limit your right to pursue any other remedy available under Qatari law.
                  </p>
                </div>
              </section>

              {/* Section 12 */}
              <section id="section-12" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">12</span>
                  <h2 className="legal-section-title">Prohibited Conduct</h2>
                </div>
                <p className="legal-p">In connection with the Platform, you must not:</p>
                <ul className="legal-list">
                  <li className="legal-list-item">
                    <span className="legal-list-bullet"></span>
                    <span><strong>Circumvent the Platform:</strong> Circumvent the Platform or avoid the F&C Fee as described in Section 7.9;</span>
                  </li>
                  <li className="legal-list-item">
                    <span className="legal-list-bullet"></span>
                    <span><strong>False or Forged Documentation:</strong> Submit false, forged, misleading, or expired documents or information;</span>
                  </li>
                  <li className="legal-list-item">
                    <span className="legal-list-bullet"></span>
                    <span><strong>Bribery, Collusion & Bid-Rigging:</strong> Offer, give, request, or accept any bribe, kickback, or improper advantage, or engage in bid-rigging, price-fixing, or collusion with any other Supplier or Buyer;</span>
                  </li>
                  <li className="legal-list-item">
                    <span className="legal-list-bullet"></span>
                    <span><strong>Conflicts of Interest:</strong> Conceal a conflict of interest with a Buyer or its personnel;</span>
                  </li>
                  <li className="legal-list-item">
                    <span className="legal-list-bullet"></span>
                    <span><strong>Unsolicited Communications:</strong> Contact a Buyer&rsquo;s users or other Platform users for purposes unrelated to the Order or to send unsolicited commercial communications;</span>
                  </li>
                  <li className="legal-list-item">
                    <span className="legal-list-bullet"></span>
                    <span><strong>Security Interference:</strong> Interfere with the security or operation of the Platform or access another user&rsquo;s account or data without authorization; or</span>
                  </li>
                  <li className="legal-list-item">
                    <span className="legal-list-bullet"></span>
                    <span><strong>Unlawful Activities:</strong> Use the Platform for any unlawful purpose or in breach of the rules of any relevant regulator.</span>
                  </li>
                </ul>
                <p className="legal-p" style={{ marginTop: '16px' }}>
                  VEB may investigate suspected breaches and may warn, suspend, or terminate your account, withhold or reverse scoring benefits, and report matters to the relevant authorities.
                </p>
              </section>

              {/* Section 13 */}
              <section id="section-13" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">13</span>
                  <h2 className="legal-section-title">Confidentiality and Data Protection</h2>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">13.1 Confidentiality:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    You must keep confidential, and use only to evaluate or perform the relevant RFQ or Order, any non-public information disclosed to you through the Platform by a Buyer or by VEB, including specifications, site details, pricing, and Buyer reliability information.
                  </p>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">13.2 Data Protection (Qatar Law No. 13 of 2016):</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    Personal data is processed under the Privacy Policy and Qatar&rsquo;s Law No. 13 of 2016 on the Protection of Personal Data Privacy. Where you receive personal data of Buyer personnel, you must use it only for the Order and protect it appropriately.
                  </p>
                </div>
              </section>

              {/* Section 14 */}
              <section id="section-14" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">14</span>
                  <h2 className="legal-section-title">Intellectual Property and Content</h2>
                </div>
                <p className="legal-p">
                  The Platform, its software, design, trademarks, taxonomy, and scoring methodology belong to VEB or its licensors. You retain ownership of the content you submit (such as company profiles, product listings, quotations, and compliance documents) and grant VEB a non-exclusive, worldwide license to host, display, and use it as needed to operate, improve, and promote the Platform, including for taxonomy, matchmaking, and scoring. You confirm that your content does not infringe any third party&rsquo;s rights.
                </p>
              </section>

              {/* Section 15 */}
              <section id="section-15" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">15</span>
                  <h2 className="legal-section-title">Disclaimers and Limitation of Liability</h2>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">15.1 Platform Disclaimers:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    The Platform is provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo; To the maximum extent permitted by Qatari law, VEB disclaims all warranties regarding the Platform, and does not warrant that it will be uninterrupted or error-free, that any Buyer will pay, or that any RFQ will result in an Order.
                  </p>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">15.2 Limitation of Liability:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    To the maximum extent permitted by Qatari law, VEB&rsquo;s total liability to you arising out of or relating to these Supplier Terms or the Platform is limited to the F&C Fees you paid to VEB in the twelve (12) months before the event giving rise to the claim. VEB is not liable for indirect, incidental, special, or consequential loss, loss of profit or business, or for any loss arising from a Buyer&rsquo;s non-payment or from any dispute or non-performance between a Buyer and a Supplier, except for funds VEB holds in escrow and fails to release in accordance with these Supplier Terms.
                  </p>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">15.3 Statutory Exceptions:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    Nothing in these Supplier Terms limits any liability that cannot lawfully be limited or excluded under the laws of Qatar, including for fraud or wilful misconduct.
                  </p>
                </div>
              </section>

              {/* Section 16 */}
              <section id="section-16" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">16</span>
                  <h2 className="legal-section-title">Indemnification</h2>
                </div>
                <p className="legal-p">
                  You agree to indemnify and hold harmless VEB, its officers, employees, and partners from any claims, losses, or liabilities (including reasonable legal fees) arising from your breach of these Supplier Terms, your content, your violation of law or of a third party&rsquo;s rights, the goods or services you supply, or any dispute between you and a Buyer or a third party, except to the extent caused by VEB&rsquo;s own wilful misconduct.
                </p>
              </section>

              {/* Section 17 */}
              <section id="section-17" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">17</span>
                  <h2 className="legal-section-title">Suspension and Termination</h2>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">17.1 Voluntary Termination:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    You may close your account by written notice, once all open Orders are completed or otherwise resolved and all fees owed to VEB are settled.
                  </p>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">17.2 Termination or Suspension by VEB:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    VEB may suspend or terminate your account, with notice where practicable, for breach of these Supplier Terms, failed or lapsed Compliance Verification, suspected fraud or circumvention, repeated poor performance, or as required by law or by a regulator.
                  </p>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">17.3 Impact on Accepted Orders:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    On suspension or termination, Orders already accepted remain governed by these Supplier Terms until completed or resolved, unless VEB and the Buyer agree otherwise, and funds held for them will be dealt with under Sections 8 and 11.
                  </p>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">17.4 Survival:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    Sections 7 and 8 (as to fees and payments accrued), 12 to 16, 18, and any other provision intended to survive, survive termination.
                  </p>
                </div>
              </section>

              {/* Section 18 */}
              <section id="section-18" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">18</span>
                  <h2 className="legal-section-title">Governing Law and Arbitration</h2>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">18.1 Applicable Law:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    These Supplier Terms are governed by the laws of the State of Qatar.
                  </p>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">18.2 Dispute Arbitration (QICCA):</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    Any dispute arising out of or in connection with these Supplier Terms that cannot be resolved amicably shall be finally resolved by arbitration administered by the Qatar International Center for Conciliation and Arbitration (QICCA) under its rules, seated in Doha, Qatar, in the English language, by one arbitrator. Either party may seek interim or injunctive relief from a competent Qatari court.
                  </p>
                </div>
              </section>

              {/* Section 19 */}
              <section id="section-19" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">19</span>
                  <h2 className="legal-section-title">Amendments</h2>
                </div>
                <p className="legal-p">
                  VEB may amend these Supplier Terms from time to time. Material changes will be notified through the Platform or by email at least thirty (30) days before taking effect, except for changes to the F&C Fee schedule, which are governed by Section 7.10. Continued use of the Platform after the effective date is acceptance of the amended Supplier Terms.
                </p>
              </section>

              {/* Section 20 */}
              <section id="section-20" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">20</span>
                  <h2 className="legal-section-title">General Provisions</h2>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">20.1 Entire Agreement:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    These Supplier Terms, the Terms and Conditions, the Privacy Policy, and any Order-specific or escrow terms are the entire agreement between you and VEB on their subject matter.
                  </p>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">20.2 Severability:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    If a provision is held unenforceable, the rest remains in force.
                  </p>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">20.3 Assignment:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    You may not assign these Supplier Terms without VEB&rsquo;s written consent. VEB may assign them in connection with a merger, acquisition, or sale of assets.
                  </p>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">20.4 No Waiver:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    A failure to enforce a provision is not a waiver of the right to enforce it later.
                  </p>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">20.5 Force Majeure:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    Neither party is liable for delay or failure caused by events beyond its reasonable control, but this does not excuse a payment obligation that has already accrued.
                  </p>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">20.6 Language:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    [These Supplier Terms are made in English. Any Arabic translation is for convenience only / The Arabic version prevails in case of conflict &mdash; to be confirmed by counsel.]
                  </p>
                </div>
              </section>

              {/* Section 21 */}
              <section id="section-21" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">21</span>
                  <h2 className="legal-section-title">Contact</h2>
                </div>
                <p className="legal-p">
                  For questions or notices regarding these Supplier Terms and Conditions, please contact:
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
                      <strong>Electronic Mail</strong>
                      <a href="mailto:support@vebqatar.com">support@vebqatar.com</a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Cross-Navigation Banner */}
              <div className="legal-switch-banner">
                <div className="legal-switch-banner-text">
                  <h4>Looking for General Platform Terms?</h4>
                  <p>Read the comprehensive Terms and Conditions governing all buyers and suppliers on the VEB platform.</p>
                </div>
                <button
                  type="button"
                  className="btn btn-teal"
                  onClick={() => {
                    if (onNavigate) onNavigate('/terms-and-conditions');
                  }}
                >
                  View Terms & Conditions &rarr;
                </button>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

