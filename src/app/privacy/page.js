"use client";
import Image from "next/image";
import Link from "next/link";
import "../App.css";
import "./privacy.css";

export default function PrivacyPolicy() {
  const lastUpdated = "October 19, 2026";

  const sections = [
    {
      id: "overview",
      icon: "🔒",
      title: "Overview",
      content: `DriveDirect ("we", "us", "our") is a free, open-use tool that converts Google Drive shareable links into direct-access URLs. This Privacy Policy explains how we handle any information related to your use of the DriveDirect web application located at this domain.

We are committed to protecting your privacy. The short version: DriveDirect is a 100% client-side tool — we do not collect, store, transmit, or sell any personal data. No account is required and no data ever leaves your browser.`,
    },
    {
      id: "data-collected",
      icon: "📋",
      title: "Information We Collect",
      content: `DriveDirect does not collect any personally identifiable information (PII).

When you use DriveDirect:
• Your Google Drive links are processed entirely within your browser.
• The File ID is extracted locally from the URL you paste — it is never sent to our servers.
• No user accounts, sign-ins, or profiles are required or created.
• We do not use cookies for tracking or analytics purposes.

The only "data" that may be stored is:
• Standard server access logs (IP address, browser type, timestamp) retained by our hosting provider for security and uptime purposes. These logs are not linked to any personally identifiable information and are not used for marketing.`,
    },
    {
      id: "google-drive",
      icon: "☁️",
      title: "Google Drive & Third-Party Services",
      content: `DriveDirect generates URLs that point to resources hosted on Google Drive (drive.google.com and lh3.googleusercontent.com). When your browser loads a preview of your file, a direct request is made to Google's servers from your device.

Google's own Privacy Policy governs all interactions with their services. We have no control over how Google processes requests to their infrastructure. We strongly encourage you to review Google's Privacy Policy at https://policies.google.com/privacy.

DriveDirect does not integrate with any analytics platforms (e.g., Google Analytics), advertising networks, or third-party tracking services.`,
    },
    {
      id: "clipboard",
      icon: "📋",
      title: "Clipboard Access",
      content: `DriveDirect uses the browser's Clipboard API to:
• Read from your clipboard when you click the "Paste" button, so you can paste a Google Drive link without manually typing it.
• Write to your clipboard when you click any "Copy" button, to copy the generated URLs or code snippets.

Clipboard access is triggered only by explicit user action (button clicks). We do not read your clipboard passively or in the background. Clipboard content is never transmitted, logged, or stored outside your browser session.`,
    },
    {
      id: "data-sharing",
      icon: "🤝",
      title: "Data Sharing & Disclosure",
      content: `We do not sell, trade, rent, or share any user data with third parties because we do not collect user data in the first place.

We may disclose information only if required by law (e.g., a valid court order or governmental request), and only to the extent required by such law.`,
    },
    {
      id: "security",
      icon: "🛡️",
      title: "Security",
      content: `Since DriveDirect does not store any user data, there is no personal data at risk from a breach of our systems.

All traffic to DriveDirect is served over HTTPS (TLS encryption), which protects your connection from eavesdropping. The security of the Google Drive files you convert depends entirely on the permissions you set within Google Drive — DriveDirect cannot override or modify your file's permissions.`,
    },
    {
      id: "children",
      icon: "👨‍👩‍👧",
      title: "Children's Privacy",
      content: `DriveDirect is not directed to children under the age of 13, and we do not knowingly collect any personal information from children. Since we collect no personal information from anyone, this service is safe for general audiences. If you are a parent or guardian and believe we have inadvertently collected information from a child, please contact us and we will take appropriate steps.`,
    },
    {
      id: "changes",
      icon: "📝",
      title: "Changes to This Policy",
      content: `We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically. Continued use of DriveDirect after changes constitutes your acceptance of the updated policy.

If we ever begin collecting personal data in the future (e.g., for an optional account feature), we will update this policy with full transparency before doing so.`,
    },
    {
      id: "contact",
      icon: "✉️",
      title: "Contact Us",
      content: `If you have any questions, concerns, or feedback regarding this Privacy Policy or DriveDirect's data practices, please reach out to us:

📧 STAR Studio — available through the project's public repository or contact page.

We take privacy seriously and will respond to all legitimate inquiries within a reasonable timeframe.`,
    },
  ];

  return (
    <div className="privacy-page">
      {/* HEADER */}
      <header className="app-header">
        <div className="app-header__container">
          <div className="brand">
            <div className="brand__logo">
              <Image
                src="https://drive.google.com/thumbnail?id=1LSL8Xq1WRbruAMlS6rkufrPHrWPSyx4F"
                alt="DriveDirect logo"
                width={35}
                height={30}
              />
            </div>
            <div className="brand__info">
              <div className="brand__row">
                <span className="brand__name">DriveDirect</span>
              </div>
              <p className="brand__sub">Instant Direct View &amp; Download Generator</p>
            </div>
          </div>
          <div className="header-actions">
            <div className="header-actions__status">
              <span className="pulse-dot"></span>
              <span>v1.4.0 • Online</span>
            </div>
            <Link className="btn-icon-link" href="/">
              <span>← Back to App</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="privacy-main">
        {/* HERO */}
        <section className="privacy-hero">
          <div className="privacy-hero__badge">Legal Document</div>
          <h1 className="privacy-hero__title">Privacy Policy</h1>
          <p className="privacy-hero__sub">
            DriveDirect is built with privacy-first principles. We don't track you, we don't store
            your data, and we never will.
          </p>
          <div className="privacy-hero__meta">
            <span className="privacy-meta-pill privacy-meta-pill--green">
              ✅ No data collection
            </span>
            <span className="privacy-meta-pill">
              🗓 Last updated: {lastUpdated}
            </span>
          </div>
        </section>

        {/* CONTENT LAYOUT */}
        <div className="privacy-layout">
          {/* SIDEBAR TOC */}
          <aside className="privacy-toc">
            <div className="privacy-toc__inner">
              <p className="privacy-toc__heading">On this page</p>
              <nav>
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className="privacy-toc__link">
                    <span className="privacy-toc__icon">{s.icon}</span>
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="privacy-content">
            {/* SUMMARY CARD */}
            <div className="privacy-summary-card">
              <h2 className="privacy-summary-card__title">🔑 The Short Version</h2>
              <ul className="privacy-summary-list">
                <li>
                  <span className="check">✓</span>
                  <span>DriveDirect processes all data <strong>locally in your browser</strong> — nothing is sent to our servers.</span>
                </li>
                <li>
                  <span className="check">✓</span>
                  <span>We <strong>never</strong> collect, store, or sell personal information.</span>
                </li>
                <li>
                  <span className="check">✓</span>
                  <span>No cookies, no trackers, no analytics platforms.</span>
                </li>
                <li>
                  <span className="check">✓</span>
                  <span>Clipboard access only happens when <strong>you</strong> click Paste or Copy.</span>
                </li>
                <li>
                  <span className="check">✓</span>
                  <span>No account required — ever.</span>
                </li>
              </ul>
            </div>

            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="privacy-section"
              >
                <div className="privacy-section__header">
                  <span className="privacy-section__icon">{section.icon}</span>
                  <h2 className="privacy-section__title">{section.title}</h2>
                </div>
                <div className="privacy-section__body">
                  {section.content.split("\n").map((line, i) =>
                    line.trim() === "" ? (
                      <br key={i} />
                    ) : line.startsWith("•") ? (
                      <p key={i} className="privacy-bullet">{line}</p>
                    ) : line.startsWith("📧") ? (
                      <p key={i} className="privacy-contact-line">{line}</p>
                    ) : (
                      <p key={i}>{line}</p>
                    )
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="app-footer">
        <div className="app-footer__container">
          <div className="footer-info">
            <div className="footer-brand-dots">
              <Image
                src="https://drive.google.com/thumbnail?id=1T6vwQZzgyjDWzFD3IY1NE7hOnQDAUAII"
                alt="STAR Studio"
                width={100}
                height={50}
                style={{ borderRadius: "5px" }}
              />
            </div>
            <span>© 2026 STAR Studio. Building web, mobile, and desktop applications.</span>
          </div>
          <div className="footer-links">
            <Link href="/How">How to Use</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
