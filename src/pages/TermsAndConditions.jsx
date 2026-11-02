import React, { useState, useEffect } from 'react';
import '../styles/legal.css';

const SECTIONS = [
  { id: 'section-1', title: '1. Introduction and Acceptance' },
  { id: 'section-2', title: '2. Definitions' },
  { id: 'section-3', title: '3. Eligibility and Registration' },
  { id: 'section-4', title: '4. Role of the Platform' },
  { id: 'section-5', title: '5. Buyer and Supplier Obligations' },
  { id: 'section-6', title: '6. Prohibited Conduct' },
  { id: 'section-7', title: '7. RFQ, Quotation, and Order Process' },
  { id: 'section-8', title: '8. Scoring Systems' },
  { id: 'section-9', title: '9. Fees and Payment' },
  { id: 'section-10', title: '10. Escrow Service' },
  { id: 'section-11', title: '11. Dispute Resolution Between Users' },
  { id: 'section-12', title: '12. Intellectual Property' },
  { id: 'section-13', title: '13. Confidentiality' },
  { id: 'section-14', title: '14. Disclaimers' },
  { id: 'section-15', title: '15. Limitation of Liability' },
  { id: 'section-16', title: '16. Indemnification' },
  { id: 'section-17', title: '17. Suspension and Termination' },
  { id: 'section-18', title: '18. Governing Law & Arbitration' },
  { id: 'section-19', title: '19. Data Protection' },
  { id: 'section-20', title: '20. Force Majeure' },
  { id: 'section-21', title: '21. Amendments' },
  { id: 'section-22', title: '22. General Provisions' },
  { id: 'section-23', title: '23. Contact Details' }
];

export default function TermsAndConditions({ onNavigate }) {
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
              href="/"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('/');
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              Home
            </a>
            <span className="legal-breadcrumbs-separator">/</span>
            <span>Terms and Conditions</span>
          </div>

          <div className="pill">Legal Terms</div>
          <h1 className="legal-hero-title">Terms and Conditions</h1>
          <p className="legal-hero-subtitle">
            Terms of Use for Buyers and Suppliers — VEB For Digital Trade Services W.L.L.
            Operating the business-to-business facilities management &amp; MRO e-procurement marketplace.
          </p>

          <div className="legal-meta-bar">
            <div className="legal-meta-item">
              <span>Jurisdiction:</span>
              <strong>State of Qatar</strong>
            </div>
            <div className="legal-meta-item">
              <span>Entity:</span>
              <strong>VEB For Digital Trade Services W.L.L. (CR: 247533)</strong>
            </div>
            <div className="legal-meta-item">
              <span>Version:</span>
              <span className="legal-meta-badge">Draft 1.0</span>
            </div>
            <div className="legal-meta-item">
              <span>Effective Date:</span>
              <strong>October 2026</strong>
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
                <span>Table of Contents</span>
                <span className="legal-meta-badge">23 Sections</span>
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
                      {sec.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="legal-sidebar-switch">
                <div className="legal-sidebar-switch-title">Related Policies</div>
                <a
                  href="/privacy-policy"
                  className="legal-sidebar-switch-link"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) onNavigate('/privacy-policy');
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  Privacy Policy &rarr;
                </a>
              </div>
            </aside>

            {/* Document Content */}
            <main className="legal-main">
              {/* Draft Notice Box */}
              <div className="legal-notice-box">
                <svg className="legal-notice-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
                  <line x1="12" y1="9" x2="12" y2="13"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
                <div>
                  <div className="legal-notice-title">Draft for Legal Review</div>
                  <div className="legal-notice-text">
                    This document is a working template prepared to accelerate the drafting process. It is not a substitute for advice from a Qatar-licensed lawyer. All bracketed placeholders, the arbitration/venue clause, fee references, and data-protection provisions are aligned with current Qatari law (including Law No. 13 of 2016 and MOCI/MCIT guidance).
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
                  Welcome to VEB, the business-to-business e-procurement marketplace operated by <strong>VEB For Digital Trade Services W.L.L.</strong> (&ldquo;VEB,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or the &ldquo;Platform&rdquo;), connecting compliance-verified suppliers with buyers operating in Qatar&rsquo;s facilities management (FM) and maintenance, repair, and operations (MRO) sector. These Terms and Conditions (&ldquo;Terms&rdquo;) govern access to and use of the Platform, including the website, mobile applications, and related services (collectively, the &ldquo;Services&rdquo;).
                </p>
                <p className="legal-p">
                  By creating an account, accessing, or using the Services, you (&ldquo;User,&rdquo; &ldquo;you&rdquo;) agree to be bound by these Terms and by our Privacy Policy, which is incorporated by reference. If you are registering on behalf of a company or other legal entity, you represent that you have authority to bind that entity, and &ldquo;you&rdquo; refers to that entity.
                </p>
                <p className="legal-p">
                  If you do not agree to these Terms, you must not register for or use the Services.
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
                      A registered User who posts Requests for Quotation (RFQs), places Orders, and procures goods or services through the Platform.
                    </p>
                  </div>
                  <div className="legal-def-item">
                    <span className="legal-def-term">Supplier</span>
                    <p className="legal-def-desc">
                      A registered User who has completed the applicable Compliance Verification and offers goods or services for sale through the Platform.
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
                      A binding commercial agreement formed between a Buyer and a Supplier through the Platform following an accepted quotation.
                    </p>
                  </div>
                  <div className="legal-def-item">
                    <span className="legal-def-term">Compliance Verification</span>
                    <p className="legal-def-desc">
                      The process by which VEB reviews a Supplier&rsquo;s trade licenses, certifications, and regulatory approvals &mdash; which may include Kahramaa, Qatar Civil Defence, Ministry of Public Health (MOPH), and PSSLD registrations, as applicable to the Supplier&rsquo;s scope of work &mdash; prior to activation on the Platform.
                    </p>
                  </div>
                  <div className="legal-def-item">
                    <span className="legal-def-term">Escrow Service</span>
                    <p className="legal-def-desc">
                      The optional payment-holding mechanism described in Section 10, administered by licensed payment institutions and escrow partners, through which Order funds may be held and released upon satisfaction of agreed milestones.
                    </p>
                  </div>
                  <div className="legal-def-item">
                    <span className="legal-def-term">Content</span>
                    <p className="legal-def-desc">
                      Any information, data, documents, or materials submitted to the Platform by a User.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section id="section-3" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">03</span>
                  <h2 className="legal-section-title">Eligibility and Registration</h2>
                </div>
                <div className="legal-clause">
                  <p className="legal-p">
                    <strong className="legal-clause-title">3.1 Eligibility.</strong>
                    The Services are available only to businesses and professionals acting in a commercial capacity; the Platform is not directed at consumers or at individuals under 18. By registering, you confirm you are legally capable of entering binding commercial agreements under the laws of Qatar and that any entity you represent is duly licensed to conduct its stated business activity.
                  </p>
                </div>
                <div className="legal-clause">
                  <p className="legal-p">
                    <strong className="legal-clause-title">3.2 Registration.</strong>
                    Each User must complete registration and receive a unique account identifier issued by the Platform. You agree to provide accurate, current, and complete information and to promptly update it if it changes. VEB may verify submitted information and reject, suspend, or request additional documentation at its discretion.
                  </p>
                </div>
                <div className="legal-clause">
                  <p className="legal-p">
                    <strong className="legal-clause-title">3.3 Sector Scope.</strong>
                    The Platform is limited to facilities management and MRO procurement activity. VEB does not support, and reserves the right to reject or remove, RFQs, Orders, or accounts relating to the construction sector.
                  </p>
                </div>
                <div className="legal-clause">
                  <p className="legal-p">
                    <strong className="legal-clause-title">3.4 Supplier Compliance Verification.</strong>
                    Before a Supplier account is activated to receive RFQs or fulfil Orders, the Supplier must submit trade licenses, insurance, and the compliance certifications applicable to its declared scope of work, and pass Compliance Verification. Suppliers are solely responsible for maintaining the accuracy, validity, and renewal of all licenses and certifications for as long as they remain active on the Platform, and must notify VEB immediately if any certification is suspended, revoked, or expires.
                  </p>
                </div>
                <div className="legal-clause">
                  <p className="legal-p">
                    <strong className="legal-clause-title">3.5 Account Security.</strong>
                    You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account. Notify VEB immediately of any unauthorized use.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section id="section-4" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">04</span>
                  <h2 className="legal-section-title">Role of the Platform</h2>
                </div>
                <p className="legal-p">
                  VEB operates a marketplace that facilitates the discovery, quotation, and ordering process between independent Buyers and Suppliers. VEB is not a party to, and does not guarantee the performance of, any Order or transaction formed between a Buyer and a Supplier. Except where VEB expressly acts as an escrow administrator under Section 10, VEB is not a seller, buyer, carrier, or insurer of any goods or services exchanged through the Platform.
                </p>
                <p className="legal-p">
                  VEB does not manufacture, inspect, or control the goods or services offered by Suppliers. Compliance Verification confirms that a Supplier has submitted the required licenses and certifications current as of the review date; it is not a warranty or guarantee of a Supplier&rsquo;s ongoing performance, quality, or continued regulatory standing.
                </p>
              </section>

              {/* Section 5 */}
              <section id="section-5" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">05</span>
                  <h2 className="legal-section-title">Buyer and Supplier Obligations</h2>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">5.1 Buyer Obligations:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    Buyers agree to submit RFQs that accurately describe required goods or services, evaluate quotations and respond in good faith, honor accepted Orders and pay amounts due within agreed payment terms, and provide accurate delivery, site access, and specification information needed for Supplier performance.
                  </p>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">5.2 Supplier Obligations:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    Suppliers agree to maintain accurate Compliance Verification records, submit quotations that reflect genuine pricing and availability, fulfil accepted Orders in accordance with the agreed specification, quantity, and timeline, and maintain the qualifications represented in their Platform profile.
                  </p>
                </div>
                <div className="legal-clause">
                  <strong className="legal-clause-title">5.3 Platform-First Dealing:</strong>
                  <p className="legal-p" style={{ marginTop: '6px' }}>
                    Both parties agree to conduct communications, quotations, and payments relating to a Platform-originated RFQ or Order through the Platform, except as expressly permitted under Section 6.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section id="section-6" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">06</span>
                  <h2 className="legal-section-title">Prohibited Conduct</h2>
                </div>
                <p className="legal-p">You must not, in connection with the Platform:</p>
                <ul className="legal-list">
                  <li className="legal-list-item">
                    <span className="legal-list-bullet"></span>
                    <span><strong>Circumvent the Platform:</strong> Using an RFQ, quotation, or introduction made through VEB to negotiate or complete a transaction off-platform for the purpose of avoiding applicable fees;</span>
                  </li>
                  <li className="legal-list-item">
                    <span className="legal-list-bullet"></span>
                    <span><strong>False or Misleading Documentation:</strong> Submitting false, misleading, or expired compliance documentation, or misrepresenting licensing, certification, pricing, or capacity;</span>
                  </li>
                  <li className="legal-list-item">
                    <span className="legal-list-bullet"></span>
                    <span><strong>Scoring Manipulation:</strong> Manipulating or attempting to manipulate the Supplier performance scoring or Buyer reliability scoring described in Section 8;</span>
                  </li>
                  <li className="legal-list-item">
                    <span className="legal-list-bullet"></span>
                    <span><strong>Off-Target Solicitations:</strong> Using the Platform to solicit Users for purposes unrelated to FM/MRO procurement, or sending unsolicited commercial communications;</span>
                  </li>
                  <li className="legal-list-item">
                    <span className="legal-list-bullet"></span>
                    <span><strong>Security Interference:</strong> Interfering with the security or proper functioning of the Platform, or attempting to access another User&rsquo;s account or data without authorization;</span>
                  </li>
                  <li className="legal-list-item">
                    <span className="legal-list-bullet"></span>
                    <span><strong>Regulatory Violations:</strong> Using the Platform for any unlawful purpose or in violation of Qatari law or the rules of a relevant regulator (including Kahramaa, Qatar Civil Defence, MOPH, or PSSLD).</span>
                  </li>
                </ul>
                <p className="legal-p" style={{ marginTop: '16px' }}>
                  VEB may investigate suspected violations and take action including warning, suspension, termination, or reporting to relevant authorities.
                </p>
              </section>

              {/* Section 7 */}
              <section id="section-7" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">07</span>
                  <h2 className="legal-section-title">RFQ, Quotation, and Order Process</h2>
                </div>
                <p className="legal-p">
                  <strong>7.1</strong> A Buyer&rsquo;s RFQ is an invitation to Suppliers to submit quotations and does not itself form a binding Order.
                </p>
                <p className="legal-p">
                  <strong>7.2</strong> A binding Order is formed when a Buyer accepts a Supplier&rsquo;s quotation through the Platform, subject to any Order-specific terms exchanged between the parties (e.g., delivery schedule, acceptance criteria, warranty).
                </p>
                <p className="legal-p">
                  <strong>7.3</strong> Each Order is a separate commercial contract between the Buyer and Supplier concerned. VEB&rsquo;s role is limited to facilitating formation of the Order and, where applicable, administering the Escrow Service and the dispute-resolution process described below.
                </p>
                <p className="legal-p">
                  <strong>7.4</strong> VEB may provide standard documentation (such as purchase order and completion certificate templates) to support the Order process; use of such templates does not make VEB a party to the underlying Order.
                </p>
              </section>

              {/* Section 8 */}
              <section id="section-8" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">08</span>
                  <h2 className="legal-section-title">Supplier Performance and Buyer Reliability Scoring</h2>
                </div>
                <p className="legal-p">
                  <strong>8.1</strong> VEB maintains a Supplier performance scoring system (ranging from Platinum to Flagged tiers) based on factors including delivery reliability, quality, responsiveness, and compliance standing. Supplier scores and tier status may be visible to Buyers to inform sourcing decisions.
                </p>
                <p className="legal-p">
                  <strong>8.2</strong> VEB maintains a corresponding Buyer reliability score reflecting factors including payment timeliness and order-fulfilment conduct. Buyer reliability scores are shown only to Suppliers who have received an RFQ from that Buyer and are never displayed publicly or to other Buyers.
                </p>
                <p className="legal-p">
                  <strong>8.3</strong> Scores are generated from Platform transaction data and provided for informational purposes; VEB does not guarantee their completeness or accuracy and is not liable for sourcing or commercial decisions made in reliance on them. Users may request a review of their own score by contacting VEB at <a href="mailto:info@vebqatar.com" style={{ color: 'var(--teal-hover)', textDecoration: 'underline' }}>info@vebqatar.com</a>.
                </p>
              </section>

              {/* Section 9 */}
              <section id="section-9" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">09</span>
                  <h2 className="legal-section-title">Fees and Payment</h2>
                </div>
                <p className="legal-p">
                  <strong>9.1</strong> Certain Services are provided free of charge (including standard onboarding), while others are subject to fees set out in the applicable fee schedule made available on the Platform or at registration (&ldquo;Fee Schedule&rdquo;). Fees may include transaction-based fees, subscription fees for premium features, and charges for optional services such as verified-supplier badges or the Escrow Service.
                </p>
                <p className="legal-p">
                  <strong>9.2</strong> VEB may update the Fee Schedule from time to time with reasonable prior notice; continued use of the Services after fees take effect constitutes acceptance.
                </p>
                <p className="legal-p">
                  <strong>9.3</strong> All fees are exclusive of applicable taxes unless stated otherwise. Payment obligations between Buyers and Suppliers under an Order are separate from, and in addition to, any Platform fees owed to VEB.
                </p>
              </section>

              {/* Section 10 */}
              <section id="section-10" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">10</span>
                  <h2 className="legal-section-title">Escrow Service</h2>
                </div>
                <p className="legal-p">
                  <strong>10.1</strong> Where selected by the parties to an Order, Order funds may be held by an Escrow Partner / Licensed Payment Institution and released to the Supplier upon confirmation of agreed milestones (such as delivery or a signed completion certificate) or upon joint instruction of the Buyer and Supplier.
                </p>
                <p className="legal-p">
                  <strong>10.2</strong> The Escrow Service is intended to reduce payment-timing risk and is offered on the terms of a separate escrow agreement made available at the time of use, which forms part of these Terms by reference. VEB&rsquo;s role in the Escrow Service is limited to administering release instructions in accordance with that agreement; VEB does not guarantee delivery, quality, or performance of the underlying Order.
                </p>
              </section>

              {/* Section 11 */}
              <section id="section-11" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">11</span>
                  <h2 className="legal-section-title">Dispute Resolution Between Users</h2>
                </div>
                <p className="legal-p">
                  <strong>11.1</strong> Buyers and Suppliers should first attempt to resolve disputes relating to an Order directly. Where resolution cannot be reached, either party may refer the matter to VEB&rsquo;s structured resolution process, which may include review of Platform records, an escrow-fund hold pending resolution, and a recommended resolution.
                </p>
                <p className="legal-p">
                  <strong>11.2</strong> VEB&rsquo;s involvement in resolving a dispute between Users is offered as a platform service and does not constitute arbitration, adjudication, or legal advice, and does not affect either party&rsquo;s rights to pursue other remedies available under Qatari law.
                </p>
              </section>

              {/* Section 12 */}
              <section id="section-12" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">12</span>
                  <h2 className="legal-section-title">Intellectual Property</h2>
                </div>
                <p className="legal-p">
                  The Platform, including its software, design, trademarks, taxonomy, and scoring methodology, is owned by VEB W.L.L. or its licensors and is protected by applicable intellectual property laws. Nothing in these Terms transfers ownership of any Platform intellectual property to Users.
                </p>
                <p className="legal-p">
                  Users retain ownership of Content they submit (such as RFQ details, product listings, and compliance documents) and grant VEB a non-exclusive, worldwide license to host, display, and use that Content as needed to operate and improve the Services, including for supplier taxonomy, matchmaking, and scoring purposes.
                </p>
              </section>

              {/* Section 13 */}
              <section id="section-13" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">13</span>
                  <h2 className="legal-section-title">Confidentiality</h2>
                </div>
                <p className="legal-p">
                  Each User agrees to keep confidential any non-public information disclosed by another User through the Platform in connection with an RFQ or Order (such as pricing, specifications, or site details), and to use it solely for the purpose of evaluating or fulfilling that RFQ or Order.
                </p>
              </section>

              {/* Section 14 */}
              <section id="section-14" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">14</span>
                  <h2 className="legal-section-title">Disclaimers</h2>
                </div>
                <p className="legal-p">
                  <strong>14.1</strong> The Services are provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo; To the maximum extent permitted by Qatari law, VEB disclaims all warranties, express or implied, regarding the Services, including as to merchantability, fitness for a particular purpose, and non-infringement.
                </p>
                <p className="legal-p">
                  <strong>14.2</strong> VEB does not warrant that the Platform will be uninterrupted or error-free, or that any Supplier&rsquo;s goods or services will meet a Buyer&rsquo;s requirements. Compliance Verification reflects the status of submitted documentation at the time of review and is not a guarantee of a Supplier&rsquo;s ongoing legal or regulatory standing.
                </p>
              </section>

              {/* Section 15 */}
              <section id="section-15" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">15</span>
                  <h2 className="legal-section-title">Limitation of Liability</h2>
                </div>
                <p className="legal-p">
                  <strong>15.1</strong> To the maximum extent permitted by Qatari law, VEB&rsquo;s aggregate liability arising out of or relating to these Terms or the Services shall not exceed the total Platform fees paid by the affected User to VEB in the twelve (12) months preceding the event giving rise to the claim.
                </p>
                <p className="legal-p">
                  <strong>15.2</strong> VEB shall not be liable for indirect, incidental, special, consequential, or punitive damages, or for any loss arising from a transaction, dispute, or non-performance between a Buyer and a Supplier.
                </p>
                <p className="legal-p">
                  <strong>15.3</strong> Nothing in these Terms limits any liability that cannot lawfully be limited or excluded under the laws of Qatar, including liability for fraud or wilful misconduct.
                </p>
              </section>

              {/* Section 16 */}
              <section id="section-16" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">16</span>
                  <h2 className="legal-section-title">Indemnification</h2>
                </div>
                <p className="legal-p">
                  You agree to indemnify and hold VEB, its officers, employees, and the local partner harmless from any claims, losses, or liabilities (including reasonable legal fees) arising from your breach of these Terms, your Content, your violation of applicable law or a third party&rsquo;s rights, or any Order or dispute between you and another User, except to the extent caused by VEB&rsquo;s own wilful misconduct.
                </p>
              </section>

              {/* Section 17 */}
              <section id="section-17" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">17</span>
                  <h2 className="legal-section-title">Suspension and Termination</h2>
                </div>
                <p className="legal-p">
                  <strong>17.1</strong> You may close your account at any time by written request, subject to settlement of any outstanding fees or Orders.
                </p>
                <p className="legal-p">
                  <strong>17.2</strong> VEB may suspend or terminate an account for breach of these Terms, failed or lapsed Compliance Verification, suspected fraud, or as required by law or regulator direction, with notice where practicable.
                </p>
                <p className="legal-p">
                  <strong>17.3</strong> Provisions relating to fees owed, intellectual property, confidentiality, disclaimers, limitation of liability, and dispute resolution survive termination.
                </p>
              </section>

              {/* Section 18 */}
              <section id="section-18" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">18</span>
                  <h2 className="legal-section-title">Governing Law and Dispute Resolution</h2>
                </div>
                <p className="legal-p">
                  <strong>18.1</strong> These Terms are governed by the laws of the State of Qatar.
                </p>
                <p className="legal-p">
                  <strong>18.2</strong> Any dispute arising out of or in connection with these Terms that cannot be resolved amicably shall be referred to and finally resolved by arbitration administered by the Qatar International Center for Conciliation and Arbitration (QICCA) in accordance with its rules, seated in Doha, Qatar, in the English language, by three arbitrators. Nothing in this clause prevents either party from seeking interim or injunctive relief before a competent Qatari court.
                </p>
              </section>

              {/* Section 19 */}
              <section id="section-19" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">19</span>
                  <h2 className="legal-section-title">Data Protection</h2>
                </div>
                <p className="legal-p">
                  Personal data submitted through the Platform is processed in accordance with our Privacy Policy and Qatar&rsquo;s Law No. 13 of 2016 on the Protection of Personal Data Privacy.
                </p>
              </section>

              {/* Section 20 */}
              <section id="section-20" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">20</span>
                  <h2 className="legal-section-title">Force Majeure</h2>
                </div>
                <p className="legal-p">
                  VEB shall not be liable for any delay or failure to perform resulting from causes beyond its reasonable control, including natural disasters, government action, network or utility failures, or public health emergencies.
                </p>
              </section>

              {/* Section 21 */}
              <section id="section-21" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">21</span>
                  <h2 className="legal-section-title">Amendments</h2>
                </div>
                <p className="legal-p">
                  VEB may amend these Terms from time to time. Material changes will be notified through the Platform or by email at least 14 days before taking effect. Continued use of the Services after the effective date constitutes acceptance of the amended Terms.
                </p>
              </section>

              {/* Section 22 */}
              <section id="section-22" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">22</span>
                  <h2 className="legal-section-title">General Provisions</h2>
                </div>
                <p className="legal-p">
                  <strong>22.1 Entire Agreement:</strong> These Terms, together with the Privacy Policy, the Fee Schedule, and any Order-specific or escrow terms, constitute the entire agreement between you and VEB regarding the Services.
                </p>
                <p className="legal-p">
                  <strong>22.2 Severability:</strong> If any provision is held unenforceable, the remaining provisions remain in full force.
                </p>
                <p className="legal-p">
                  <strong>22.3 Assignment:</strong> You may not assign these Terms without VEB&rsquo;s prior written consent; VEB may assign these Terms in connection with a merger, acquisition, or sale of assets.
                </p>
                <p className="legal-p">
                  <strong>22.4 No Waiver:</strong> VEB&rsquo;s failure to enforce a provision is not a waiver of its right to do so later.
                </p>
                <p className="legal-p">
                  <strong>22.5 Notices:</strong> Notices to VEB should be sent to the contact details in Section 23.
                </p>
              </section>

              {/* Section 23 */}
              <section id="section-23" className="legal-section">
                <div className="legal-section-header">
                  <span className="legal-section-number">23</span>
                  <h2 className="legal-section-title">Contact</h2>
                </div>
                <p className="legal-p">
                  If you have questions or concerns regarding these Terms and Conditions, please contact us:
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
                      <a href="mailto:info@vebqatar.com">info@vebqatar.com</a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Switch Banner */}
              <div className="legal-switch-banner">
                <div className="legal-switch-banner-text">
                  <h4>Looking for our Privacy Policy?</h4>
                  <p>Read how VEB collects, uses, and safeguards personal data under Qatar&rsquo;s Law No. 13 of 2016.</p>
                </div>
                <button
                  type="button"
                  className="btn btn-teal"
                  onClick={() => {
                    if (onNavigate) onNavigate('/privacy-policy');
                  }}
                >
                  View Privacy Policy &rarr;
                </button>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
