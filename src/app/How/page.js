"use client";
import Image from "next/image";
import Link from "next/link";
import "../App.css";
import "./how.css";

export default function HowToUse() {
  const steps = [
    {
      number: "01",
      icon: "https://img.icons8.com/?size=100&id=ShxmdGrBKyPw&format=png&color=1a73e8",
      title: "Open Your Google Drive File",
      description:
        "Navigate to Google Drive and locate the image or file you want to embed or share directly. Right-click the file and select \"Share\" to manage its access settings.",
      tip: "Works with images, PDFs, videos, and most file types hosted on Google Drive.",
    },
    {
      number: "02",
      icon: "https://img.icons8.com/?size=100&id=85186&format=png&color=1e8e3e",
      title: 'Set Permissions to "Anyone with the Link"',
      description:
        "In the Share dialog, click \"Change\" under the General Access section. Select \"Anyone with the link\" and set the role to \"Viewer\". Click \"Done\" to save.",
      tip: "This is required — restricted or company-only files will fail with a 403 error when embedded externally.",
      isWarning: true,
    },
    {
      number: "03",
      icon: "https://img.icons8.com/?size=100&id=3243&format=png&color=f9ab00",
      title: "Copy the Shareable Link",
      description:
        "After setting permissions, click \"Copy link\" to copy the shareable URL to your clipboard. It will look like: https://drive.google.com/file/d/YOUR_FILE_ID/view",
      tip: "DriveDirect also supports lh3.googleusercontent.com links — paste either format.",
    },
    {
      number: "04",
      icon: "https://img.icons8.com/?size=100&id=5415&format=png&color=1A1A1A",
      title: "Paste the Link into DriveDirect",
      description:
        "Go back to the DriveDirect homepage. Paste your copied link into the input field, or click the \"Paste\" button to auto-paste from your clipboard. The File ID will be detected instantly.",
      tip: "The FILE_ID indicator turns green when a valid ID is successfully extracted from your link.",
    },
    {
      number: "05",
      icon: "https://img.icons8.com/?size=100&id=e7hTB8DPcGtB&format=png&color=FAB005",
      title: 'Click "Convert URL"',
      description:
        "Hit the \"Convert URL\" button to generate your direct access links. Two endpoints are produced: a thumbnail/stream URL and an lh3 alternative URL — both are ready to use immediately.",
      tip: "The button is disabled until a valid Google Drive link is detected.",
    },
    {
      number: "06",
      icon: "https://img.icons8.com/?size=100&id=AGLXTiVVflkt&format=png&color=1A1A1A",
      title: "Copy & Use Your Direct Link",
      description:
        "Use the \"Copy\" buttons to grab either direct URL. Switch between the Production Snippet tabs (HTML, React/JSX, Next.js, Markdown, CSS) to get ready-to-use code for your project.",
      tip: "The Live Image Canvas shows a real-time preview of your file to confirm it loads correctly.",
    },
  ];

  const faqs = [
    {
      q: "Why does my image show a broken link or 403 error?",
      a: "Your file's Google Drive permission is not set to \"Anyone with the link\". Go back to your Drive, open the Share settings, and change the access from Restricted to Anyone with the link (Viewer).",
    },
    {
      q: "What's the difference between the two generated URLs?",
      a: "The 'Direct View URL' uses drive.google.com/thumbnail which is optimized for embedding in <img> tags and most use cases. The 'Alternative lh3 URL' uses lh3.googleusercontent.com and can sometimes bypass rendering issues in certain environments.",
    },
    {
      q: "Does DriveDirect store or process my files?",
      a: "No. DriveDirect is a 100% client-side tool. It only reads the File ID from your pasted URL — no data is ever uploaded, stored, or sent to any server. Your files remain entirely on Google Drive.",
    },
    {
      q: "Which file types are supported?",
      a: "DriveDirect works best with image files (JPG, PNG, GIF, WebP, SVG). It can also generate direct links for PDFs and videos, though the preview canvas is optimized for images.",
    },
    {
      q: "Can I use this with Next.js Image component?",
      a: "Yes! Switch to the \"Next.js\" tab in the Production Snippet section to get the correct Next.js Image tag. You'll also need to add drive.google.com to your next.config.mjs remotePatterns.",
    },
    {
      q: "Is there a limit to how many links I can convert?",
      a: "No. You can convert as many links as you want — the tool is completely free and unlimited. Just clear the input and paste a new link to convert another file.",
    },
  ];

  return (
    <div className="how-page">
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

      <main className="how-main">
        {/* HERO */}
        <section className="how-hero">
          <div className="how-hero__badge">Step-by-Step Guide</div>
          <h1 className="how-hero__title">How to Use DriveDirect</h1>
          <p className="how-hero__sub">
            Convert any Google Drive shareable link into a direct-access URL in seconds.
            Follow the steps below to get started.
          </p>
          <div className="how-hero__stats">
            <div className="how-stat">
              <span className="how-stat__num">6</span>
              <span className="how-stat__label">Simple Steps</span>
            </div>
            <div className="how-stat-divider" />
            <div className="how-stat">
              <span className="how-stat__num">&lt;30s</span>
              <span className="how-stat__label">Time to Convert</span>
            </div>
            <div className="how-stat-divider" />
            <div className="how-stat">
              <span className="how-stat__num">Free</span>
              <span className="how-stat__label">No Account Needed</span>
            </div>
          </div>
        </section>

        {/* STEPS */}
        <section className="how-steps">
          <div className="how-steps__grid">
            {steps.map((step, i) => (
              <div
                className={`how-step-card ${step.isWarning ? "how-step-card--warning" : ""}`}
                key={i}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="how-step-card__top">
                  <span className="how-step-num">{step.number}</span>
                  <img src={step.icon} alt={step.title} className="how-step-icon" />
                </div>
                <h2 className="how-step-card__title">{step.title}</h2>
                <p className="how-step-card__desc">{step.description}</p>
                <div className={`how-step-tip ${step.isWarning ? "how-step-tip--warning" : ""}`}>
                  <span className="how-step-tip__label">
                    {step.isWarning ? "⚠ Required" : "💡 Tip"}
                  </span>
                  <span>{step.tip}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SNIPPET QUICK REF */}
        <section className="how-section">
          <div className="how-section__header">
            <h2 className="how-section__title">Production Snippet Reference</h2>
            <p className="how-section__sub">
              Once converted, grab the right code snippet for your stack.
            </p>
          </div>
          <div className="how-snippet-table-wrap">
            <table className="how-snippet-table">
              <thead>
                <tr>
                  <th>Tab</th>
                  <th>Generated Code</th>
                  <th>Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span className="snippet-tag snippet-tag--html">HTML</span></td>
                  <td><code>{`<img src="https://drive.google.com/thumbnail?id=FILE_ID" />`}</code></td>
                  <td>Standard web pages</td>
                </tr>
                <tr>
                  <td><span className="snippet-tag snippet-tag--react">React/JSX</span></td>
                  <td><code>{`<img src="https://drive.google.com/thumbnail?id=FILE_ID" />`}</code></td>
                  <td>React apps with standard img tag</td>
                </tr>
                <tr>
                  <td><span className="snippet-tag snippet-tag--next">Next.js</span></td>
                  <td><code>{`<Image src="..." width={500} height={300} />`}</code></td>
                  <td>Next.js with image optimization</td>
                </tr>
                <tr>
                  <td><span className="snippet-tag snippet-tag--md">Markdown</span></td>
                  <td><code>{`![alt](https://drive.google.com/thumbnail?id=FILE_ID)`}</code></td>
                  <td>README files, GitHub, Notion</td>
                </tr>
                <tr>
                  <td><span className="snippet-tag snippet-tag--css">CSS</span></td>
                  <td><code>{`.markdown-content img { ... }`}</code></td>
                  <td>Styling embedded Drive images</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="how-section how-faq">
          <div className="how-section__header">
            <h2 className="how-section__title">Frequently Asked Questions</h2>
            <p className="how-section__sub">Quick answers to common questions.</p>
          </div>
          <div className="how-faq__grid">
            {faqs.map((faq, i) => (
              <div className="how-faq-card" key={i}>
                <h3 className="how-faq-card__q">{faq.q}</h3>
                <p className="how-faq-card__a">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="how-cta">
          <div className="how-cta__inner">
            <h2 className="how-cta__title">Ready to Convert?</h2>
            <p className="how-cta__sub">Go back to the app and paste your first Google Drive link.</p>
            <Link href="/" className="how-cta__btn">
              Open DriveDirect →
            </Link>
          </div>
        </section>
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
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
