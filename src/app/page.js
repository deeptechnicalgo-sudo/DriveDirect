"use client";
import Image from "next/image";
import Link from "next/link";
import "./App.css";
import React, { useState } from "react";
import Star from "./Star.png"



export default function Home() {
  const [inputDataConvert, setInput] = React.useState("")
  const [Id, setId] = React.useState("")
  const [convertedId, setConvertedId] = React.useState("")
  const [converted, setConverted] = React.useState(false)
  const [colore, setcolore] = React.useState("#1a73e8")
  const [checkId, setCheck] = React.useState("-- none detected --")
  const [outputid, setoutput] = React.useState("")
  const [outputLh3, setOutputLh3] = React.useState("")
  const [highlightOutput, setHighlightOutput] = React.useState(false)
  const [toastMessage, setToastMessage] = React.useState("")
  const [showToast, setShowToast] = React.useState(false)

  React.useEffect(() => {
    // Format 1: https://drive.google.com/file/d/<ID>/view
    let id = inputDataConvert?.split("/file/d/")[1]?.split("/")[0] ?? ""

    // Format 2: https://lh3.googleusercontent.com/d/<ID>=s...
    if (!id) {
      const lh3Match = inputDataConvert?.match(/lh3\.googleusercontent\.com\/d\/([^=?&\s]+)/)
      if (lh3Match) id = lh3Match[1]
    }

    setId(id)
    if (id !== "") {
      setCheck(id)
      setcolore("#1fbf7a")
    } else {
      setCheck("-- none detected --")
      setcolore("#1a73e8")
    }
  }, [inputDataConvert]);

  const highlightTimeoutRef = React.useRef(null);

  const removeHighlight = () => {
    if (highlightTimeoutRef.current) {
      clearTimeout(highlightTimeoutRef.current);
      highlightTimeoutRef.current = null;
    }
    setHighlightOutput(false);
  };

  const scrollToTarget = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleConvert = () => {
    if (Id !== "") {
      const generated = `https://drive.google.com/thumbnail?id=${Id}`;
      const generatedLh3 = `https://lh3.googleusercontent.com/d/${Id}`;
      setConvertedId(Id);
      setConverted(true);
      setoutput(generated);
      setOutputLh3(generatedLh3);
      if (highlightTimeoutRef.current) {
        clearTimeout(highlightTimeoutRef.current);
      }
      setHighlightOutput(true);
      highlightTimeoutRef.current = setTimeout(() => {
        setHighlightOutput(false);
      }, 6000);
      setToastMessage("Output generated below!");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      setTimeout(() => {
        document.getElementById("output-endpoints-card")?.scrollIntoView({
          behavior: "smooth",
          block: "nearest"
        });
      }, 100);
    }
  };

  const handleClear = () => {
    setInput("");
    setCheck("-- none detected --");
    setcolore("#1a73e8");
    setConvertedId("");
    setConverted(false);
    setoutput("");
    setOutputLh3("");
    removeHighlight();
  };

  const Which = {
    html: `<img src="https://drive.google.com/thumbnail?id=${convertedId}" alt="Project image" />`,

    Nexte: `<Image src="https://drive.google.com/thumbnail?id=${convertedId}" alt="Project image" width={500} height={300} />`,

    Markdown: `![Project image](https://drive.google.com/thumbnail?id=${convertedId})`,

    css: `.markdown-content img {
  width: 100%;
  max-width: 500px;
  height: auto;
  display: block;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 4px;
  background: #111;
  margin: 16px auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.markdown-content img:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
}`,

    reactim: `<img src="https://drive.google.com/thumbnail?id=${convertedId}" alt="Project image" />`,
  };

  const [Cat, setnewcat] = React.useState("html");

  async function copyText() {
    try {
      if (!outputid) return;
      removeHighlight();
      await navigator.clipboard.writeText(outputid);
      setToastMessage("Direct link copied to clipboard!");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  }

  async function copyLh3Text() {
    try {
      if (!outputLh3) return;
      removeHighlight();
      await navigator.clipboard.writeText(outputLh3);
      setToastMessage("lh3 link copied to clipboard!");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  }

  async function copySnippet() {
    try {
      if (!convertedId) return;
      await navigator.clipboard.writeText(Which[Cat]);
      setToastMessage("Snippet copied to clipboard!");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  }

  async function pasteText() {
    try {
      const text = await navigator.clipboard.readText();
      setInput(text)
    } catch (error) {
      console.error("Paste failed:", error);
    }
  }
  return (
    <div className="">
      <header className="app-header">
        <div className="app-header__container">
          <div className="brand">
            <div className="brand__logo">
              <Image src="https://drive.google.com/thumbnail?id=1LSL8Xq1WRbruAMlS6rkufrPHrWPSyx4F" alt="Project image" width={35} height={30} />

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
            <a className="btn-icon-link" href="/How" rel="noreferrer" target="_blank">
              <span className="material-symbols-outlined"></span>
              <span>How To Use</span>
            </a>
          </div>
        </div>
      </header>
      <main className="main-content">

        <div className="workbench-grid">
          <section className="pane">
            <div className="card">
              <div className="card__header">
                <label className="card__title" htmlFor="drive-url-input">
                  <span className="material-symbols-outlined" style={{ color: "var(--drive-blue)" }}><img src="https://img.icons8.com/?size=25&id=ShxmdGrBKyPw&format=png&color=1a73e8" ></img></span>
                  Google Drive Shareable Link
                </label>
                <span className={`status-pill ${converted ? "status-pill--valid" : Id ? "status-pill--valid" : ""}`} id="validation-pill">
                  {converted ? "CONVERTED" : Id ? "ID_DETECTED" : "WAITING_INPUT"}
                </span>
              </div>
              <div className="input-wrapper">
                <textarea className="input-textarea" id="drive-url-input"
                  placeholder="Paste link here... e.g. https://drive.google.com/file/d/1rdTlRZRejIy6Cqas6ou08-_TSM1iOPSL/view?usp=sharing"
                  rows="3" onChange={(e) => {
                    setInput(e.target.value)
                  }} value={inputDataConvert}></textarea>
                <button className="btn-paste-overlay" id="btn-paste" title="Paste from clipboard" type="button" onClick={pasteText}>
                  <span className="material-symbols-outlined"
                    style={{ color: "var(--drive-blue)", fontSize: "16px" }}><img src="https://img.icons8.com/?size=15&id=5415&format=png&color=1A1A1A" alt="Paste"></img></span>
                  <span>Paste</span>
                </button>
              </div>
              <div className="telemetry-row">
                <div style={{ display: "flex", alignItems: "center", gap: "8px", overflow: "hidden" }}>
                  <span className="telemetry-row__label">FILE_ID:</span>
                  <span className="telemetry-row__value" id="detected-id" style={{ color: `${colore}` }}> {checkId}</span>
                </div>

              </div>
              <div className="fixtures">


              </div>
              <div className="form-actions">
                <button className="btn-primary" id="btn-convert" type="button" onClick={handleConvert}
                  style={{ opacity: Id ? 1 : 0.5, cursor: Id ? "pointer" : "not-allowed" }}>
                  <span className="material-symbols-outlined" style={{ fontSize: "18px" }}><img src="https://img.icons8.com/?size=100&id=e7hTB8DPcGtB&format=png&color=FAB005" width={30} height={30} alt="Convert"></img></span>
                  <span>Convert URL</span>
                </button>
                <button className="btn-secondary" id="btn-clear" type="button" onClick={handleClear}>
                  <span className="material-symbols-outlined"
                    style={{ fontSize: "17px", color: "var(--color-text-sub)" }}><img src="https://img.icons8.com/?size=100&id=82732&format=png&color=000000" width={20} height={20} alt="Clear"></img></span>
                  <span>Clear</span>
                </button>
              </div>
              {converted && (
                <div className="output-notification-banner">
                  <div className="output-notification-header">
                    <span className="material-symbols-outlined" style={{ fontSize: "18px" }}><Image src="https://drive.google.com/thumbnail?id=1P7YvIbcb_34YaqQh88yq-lfctvJKVuRi" alt="Project image" width={30} height={30} /></span>
                    <span>Output Generated</span>
                  </div>
                  <p className="output-notification-text">
                    Direct access link and previews are ready below:
                  </p>
                  <div className="output-jump-links">
                    <button
                      type="button"
                      className="output-jump-btn"
                      onClick={() => {
                        scrollToTarget("output-endpoints-card");
                        removeHighlight();
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: "16px" }}><img src="https://img.icons8.com/?size=35&id=MxQ4e307CtvQ&format=png&color=000000" ></img></span>
                      <span>Direct URL </span>
                    </button>
                    <button
                      type="button"
                      className="output-jump-btn"
                      onClick={() => {
                        scrollToTarget("output-preview-card");
                        removeHighlight();
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: "16px" }}><img alt="Canvas" src="https://img.icons8.com/?size=20&amp;id=30M9wv1iFkcH&amp;format=png&amp;color=1A1A1A"></img></span>
                      <span>Live Preview →</span>
                    </button>
                    <button
                      type="button"
                      className="output-jump-btn"
                      onClick={() => {
                        scrollToTarget("output-snippet-card");
                        removeHighlight();
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: "16px" }}><img width="40" alt="Snippet" src="https://img.icons8.com/?size=100&amp;id=60qKeaC5TBND&amp;format=png&amp;color=1a73e8"></img></span>
                      <span>Code Snippets </span>
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="callout-warning">
              <div className="callout-warning__header">
                <span className="material-symbols-outlined"><img src="https://img.icons8.com/?size=100&id=10640&format=png&color=1A1A1A" width={30} height={30} alt="Warning"></img></span>
                <span>Google Drive Permissions Requirement</span>
              </div>
              <p className="callout-warning__text">
                Ensure file access is explicitly configured to <strong>"Anyone with the link"</strong> (Viewer). Restricted
                or internal company-only Drive files will return HTTP 403 / CORS denial when embedded into external HTML
                tags.
              </p>
            </div>
            <div className={`card ${highlightOutput ? "output-card-highlighted" : ""}`} id="output-endpoints-card" onClick={removeHighlight}>
              <div className="card__header" style={{ borderBottom: "1px solid var(--color-border-subtle)", paddingBottom: "12px" }}>
                <span className="card__title">
                  <span className="material-symbols-outlined" style={{ color: "var(--drive-green)" }}><img src="https://img.icons8.com/?size=100&id=36872&format=png&color=40C057" width={30} alt="Endpoints"></img></span>
                  Direct Access Endpoints
                </span>
                {converted && <span className="badge-output-ready">✨ Output Ready</span>}
              </div>
              <div className="endpoint-field">
                <div className="endpoint-field__meta">
                  <span className="endpoint-field__label">DIRECT VIEW URL (STREAM / EMBED)</span>
                  <span className="endpoint-field__hint">Recommended for &lt;img&gt; · drive.google.com/thumbnail</span>
                </div>
                <div className="endpoint-field__input-row">
                  <div className="endpoint-box endpoint-box--primary" onClick={removeHighlight} style={{ cursor: outputid ? "pointer" : "default" }}>
                    <span
                      id="output-direct-url"
                      onClick={removeHighlight}
                      style={{
                        color: outputid ? "var(--drive-blue)" : "var(--color-text-sub)",
                        fontStyle: outputid ? "normal" : "italic",
                        cursor: outputid ? "pointer" : "default"
                      }}>
                      {outputid || "Click 'Convert URL' to generate direct view link"}
                    </span>
                  </div>
                  <button className="btn-copy-action btn-copy-action--primary" id="btn-copy-direct" type="button" onClick={() => {
                    copyText();
                    removeHighlight();
                  }}>
                    <span>Copy</span>
                  </button>
                </div>
              </div>

              <div className="endpoint-field" style={{ marginTop: "12px" }}>
                <div className="endpoint-field__meta">
                  <span className="endpoint-field__label">ALTERNATIVE VIEW URL (LH3 / GOOGLEUSERCONTENT)</span>
                  <span className="endpoint-field__hint">lh3.googleusercontent.com/d/ format</span>
                </div>
                <div className="endpoint-field__input-row">
                  <div className="endpoint-box endpoint-box--primary" onClick={removeHighlight} style={{ cursor: outputLh3 ? "pointer" : "default" }}>
                    <span
                      id="output-lh3-url"
                      onClick={removeHighlight}
                      style={{
                        color: outputLh3 ? "var(--drive-blue)" : "var(--color-text-sub)",
                        fontStyle: outputLh3 ? "normal" : "italic",
                        cursor: outputLh3 ? "pointer" : "default"
                      }}>
                      {outputLh3 || "Click 'Convert URL' to generate lh3 link"}
                    </span>
                  </div>
                  <button className="btn-copy-action btn-copy-action--primary" id="btn-copy-lh3" type="button" onClick={() => {
                    copyLh3Text();
                    removeHighlight();
                  }}>
                    <span>Copy</span>
                  </button>
                </div>
              </div>

            </div>
          </section>
          <section className="pane">
            <div className={`card ${highlightOutput ? "output-card-highlighted" : ""}`} id="output-preview-card">
              <div className="card__header">
                <span className="card__title">
                  <span className="material-symbols-outlined" style={{ color: "var(--drive-blue)" }}><img src="https://img.icons8.com/?size=25&id=30M9wv1iFkcH&format=png&color=1A1A1A" alt="Canvas"></img></span>
                  Live Image Canvas
                </span>
                {converted && <span className="badge-output-ready">✨ Output Ready</span>}
              </div>
              <div className="preview-canvas-wrapper transparency-grid">

                <iframe
                  id="preview-img"
                  src={converted ? `https://drive.google.com/file/d/${convertedId}/preview` : "about:blank"}
                  title="Project preview"
                  width="500"
                  height="300"
                />

                <div className="preview-fallback" id="preview-fallback">
                  <span className="material-symbols-outlined">error_outline</span>
                  <span className="preview-fallback__title">Stream Blocked or Invalid ID</span>
                  <p className="preview-fallback__desc">
                    Ensure image permission is set to "Anyone with the link". Google blocks inline rendering on restricted
                    assets.
                  </p>
                </div>
                <div className="cors-badge">
                  <span className="pulse-dot" style={{ width: "7px", height: "7px" }}></span>
                  <span>CORS: Active</span>
                </div>
              </div>
              <div className="preview-footer">
                <span>Client check: Render active</span>
                <button className="btn-text-action" id="btn-reload-preview" type="button">
                  <span className="material-symbols-outlined" style={{ fontSize: "15px" }}>sync</span>
                  <span>Test Refresh</span>
                </button>
              </div>
            </div>
            <div className={`card ${highlightOutput ? "output-card-highlighted" : ""}`} id="output-snippet-card">
              <div className="card__header">
                <span className="card__title">
                  <span className="material-symbols-outlined" style={{ color: "var(--drive-blue)" }}><img src="https://img.icons8.com/?size=100&id=60qKeaC5TBND&format=png&color=1a73e8" width={40} alt="Snippet"></img></span>
                  Production Snippet
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  {converted && <span className="badge-output-ready">✨ Output Ready</span>}
                  <button className="btn-copy-action btn-copy-action--secondary" id="btn-copy-snippet"
                    style={{ padding: "6px 10px", fontSize: "11px" }} type="button" onClick={copySnippet}>
                    <span className="material-symbols-outlined"
                      style={{ color: "var(--drive-blue)", fontSize: "14px" }}><img src="https://img.icons8.com/?size=100&id=AGLXTiVVflkt&format=png&color=1A1A1A" width={20} alt="Copy"></img></span>
                    <span id="copy-snippet-text">Copy Snippet</span>
                  </button>
                </div>
              </div>
              <div className="snippet-tabs">
                <button className={`snippet-tab ${Cat === "html" ? "active" : ""}`} data-lang="html" type="button" onClick={() => {
                  setnewcat("html")
                }}>HTML</button>
                <button className={`snippet-tab ${Cat === "reactim" ? "active" : ""}`} data-lang="jsx" type="button" onClick={() => {
                  setnewcat("reactim")
                }}>React/JSX</button>
                <button className={`snippet-tab ${Cat === "Nexte" ? "active" : ""}`} data-lang="next" type="button" onClick={() => {
                  setnewcat("Nexte")
                }}>Next.js</button>
                <button className={`snippet-tab ${Cat === "Markdown" ? "active" : ""}`} data-lang="markdown" type="button" onClick={() => {
                  setnewcat("Markdown")
                }}>Markdown</button>
                <button className={`snippet-tab ${Cat === "css" ? "active" : ""}`} data-lang="css" type="button" onClick={() => {
                  setnewcat("css")
                }}>CSS</button>
              </div>

              <div className="code-box">
                <pre><code id="code-snippet-display">{Which[Cat]}</code></pre>
              </div>
            </div>


          </section>
        </div>
      </main >

      <footer className="app-footer">
        <div className="app-footer__container">
          <div className="footer-info">
            <div className="footer-brand-dots">
              <a href="https://studio-star.vercel.app"> <Image src="https://drive.google.com/thumbnail?id=1T6vwQZzgyjDWzFD3IY1NE7hOnQDAUAII" alt="Project image" width={100} height={50} style={{ borderRadius: "5px" }} /></a>
            </div>
            <a href="https://studio-star.vercel.app"><span>© 2026 STAR Studio. Building web, mobile, and desktop applications.</span></a>
          </div>
          <div className="footer-links">
            <Link href="/How">How to Use</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </footer>

      <div className={`toast ${showToast ? "show" : ""}`} id="toast">
        <span className="material-symbols-outlined">check_circle</span>
        <span id="toast-message">{toastMessage}</span>
      </div>



    </div >
  );
}
