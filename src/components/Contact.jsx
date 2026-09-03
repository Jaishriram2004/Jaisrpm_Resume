import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MapPin, RefreshCw, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, PhoneIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { personal } = portfolioData;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTemplateClick = (templateText) => {
    setFormState((prev) => ({
      ...prev,
      message: templateText
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const quickTemplates = [
    { label: "Data Pipeline Discussion", text: "Hi Jaishriram, I'd like to discuss an opportunity regarding ETL data pipelines and PostgreSQL architecture." },
    { label: "Schedule Interview", text: "Hi Jaishriram, we're impressed by your experience at Genpact & Amazon. Let me know when you're available for a call." },
    { label: "General Inquiry", text: "Hi Jaishriram, I came across your Data Engineering portfolio and wanted to reach out!" }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-tag">
          <Mail size={14} />
          <span>06. Initiate Contact</span>
        </div>

        <h2 className="section-heading">Get in Touch</h2>
        <p className="section-subheading">
          Whether you're discussing Data Engineering pipelines, Software Engineering opportunities, or analytical solutions, my inbox is open.
        </p>

        <div className="contact-grid">
          {/* Direct Info Card */}
          <div className="card contact-info-card">
            <h3 className="contact-card-title">Direct Connection</h3>
            <p className="contact-card-text">
              Reach out directly via email or phone, or connect through LinkedIn, GitHub, and LeetCode.
            </p>

            {/* Email Copy Bar */}
            <div className="email-copy-box">
              <div className="email-details">
                <Mail size={16} className="email-icon" />
                <span className="email-address mono">{personal.email}</span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="copy-btn"
                title="Copy Email to Clipboard"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="contact-meta-list">
              <div className="meta-row">
                <PhoneIcon size={16} />
                <span>{personal.phone}</span>
              </div>
              <div className="meta-row">
                <MapPin size={16} />
                <span>{personal.location}</span>
              </div>
              <div className="meta-row">
                <span className="status-dot pulse-dot"></span>
                <span>{personal.availability}</span>
              </div>
            </div>

            {/* Social Network Buttons */}
            <div className="social-button-grid">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <GithubIcon size={15} />
                <span>GitHub</span>
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <LinkedinIcon size={15} />
                <span>LinkedIn</span>
              </a>
              <a
                href={personal.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <LeetcodeIcon size={15} />
                <span>LeetCode</span>
              </a>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="card contact-form-card no-print">
            {submitted ? (
              <div className="form-success-state">
                <div className="success-icon">
                  <Check size={28} />
                </div>
                <h3>Message Received</h3>
                <p>Thank you for reaching out, {formState.name}. I will respond to your message promptly.</p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: '', email: '', message: '' });
                  }}
                  className="btn btn-secondary btn-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3 className="contact-card-title">Send a Direct Message</h3>

                {/* Quick Templates */}
                <div className="templates-wrapper">
                  <span className="templates-title mono"><MessageSquare size={12} /> Quick Templates:</span>
                  <div className="templates-pills">
                    {quickTemplates.map((t, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleTemplateClick(t.text)}
                        className="template-pill-btn"
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message Summary
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Briefly describe your project or opportunity..."
                    className="form-input form-textarea"
                  ></textarea>
                </div>

                <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full">
                  {isSubmitting ? <RefreshCw size={15} className="spin" /> : <Send size={15} />}
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .contact-card-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }

        .contact-card-text {
          font-size: 0.925rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 1.5rem;
        }

        .email-copy-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--bg-elevated);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 0.75rem 1rem;
          margin-bottom: 1.5rem;
        }

        .email-details {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          overflow: hidden;
        }

        .email-icon {
          color: var(--text-secondary);
        }

        .email-address {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .copy-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 0.35rem 0.7rem;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .copy-btn:hover {
          border-color: var(--border-hover);
        }

        .contact-meta-list {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          margin-bottom: 1.75rem;
        }

        .meta-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .social-button-grid {
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
        }

        .templates-wrapper {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          margin-bottom: 0.5rem;
        }

        .templates-title {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.725rem;
          color: var(--text-muted);
        }

        .templates-pills {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
        }

        .template-pill-btn {
          font-size: 0.75rem;
          padding: 0.25rem 0.65rem;
          border-radius: 6px;
          background: var(--bg-elevated);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .template-pill-btn:hover {
          background: var(--bg-surface);
          border-color: var(--border-hover);
          color: var(--text-primary);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-label {
          font-size: 0.825rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .form-input {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          padding: 0.65rem 0.85rem;
          border-radius: 8px;
          background: var(--bg-input);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          outline: none;
          transition: border-color var(--transition-fast);
        }

        .form-input:focus {
          border-color: var(--border-hover);
        }

        .form-textarea {
          resize: vertical;
        }

        .form-success-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2.5rem 1rem;
        }

        .success-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: var(--badge-green-bg);
          color: var(--badge-green-text);
          margin-bottom: 1.25rem;
        }

        .form-success-state h3 {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
        }

        .form-success-state p {
          font-size: 0.925rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

