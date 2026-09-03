import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin, FileText, Copy } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, PhoneIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import { ResumeCopyDrawer } from './ResumeCopyDrawer';

export function Hero() {
  const [copyDrawerOpen, setCopyDrawerOpen] = useState(false);
  const { personal, stats } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            {/* Status Badge */}
            <div className="hero-badge-wrapper">
              <span className="status-badge">
                <span className="status-dot pulse-dot"></span>
                {personal.availability}
              </span>
              <span className="hero-location">
                <MapPin size={14} />
                {personal.location}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="hero-title">
              {personal.name}
              <span className="hero-title-suffix">.</span>
            </h1>

            <h2 className="hero-subtitle">{personal.title}</h2>

            <p className="hero-bio">{personal.subtitle}</p>

            {/* Action CTAs */}
            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary">
                <span>View Projects</span>
                <ArrowUpRight size={16} />
              </Link>

              <Link to="/contact" className="btn btn-secondary">
                <Mail size={16} />
                <span>Contact Me</span>
              </Link>

              <button onClick={handlePrint} className="btn btn-secondary no-print">
                <FileText size={16} />
                <span>Download PDF</span>
              </button>

              <button onClick={() => setCopyDrawerOpen(true)} className="btn btn-secondary no-print">
                <Copy size={15} />
                <span>ATS Text</span>
              </button>
            </div>

            {/* Social Quick Links */}
            <div className="hero-socials">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="GitHub"
              >
                <GithubIcon size={18} />
                <span>GitHub</span>
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="LinkedIn"
              >
                <LinkedinIcon size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href={personal.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="LeetCode"
              >
                <LeetcodeIcon size={18} />
                <span>LeetCode</span>
              </a>
              <a href={`mailto:${personal.email}`} className="social-link" title="Email">
                <Mail size={18} />
                <span>{personal.email}</span>
              </a>
              <a href={`tel:${personal.phone}`} className="social-link" title="Phone">
                <PhoneIcon size={18} />
                <span>{personal.phone}</span>
              </a>
            </div>

            {/* Key Metrics Grid */}
            <div className="hero-stats-grid">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-card">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          .hero-section {
            padding-top: 8.5rem;
            padding-bottom: 4.5rem;
            border-bottom: 1px solid var(--border-subtle);
            position: relative;
          }

          .hero-content {
            max-width: 840px;
          }

          .hero-badge-wrapper {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1.5rem;
            flex-wrap: wrap;
          }

          .hero-location {
            display: flex;
            align-items: center;
            gap: 0.4rem;
            font-size: 0.85rem;
            color: var(--text-secondary);
          }

          .hero-title {
            font-size: 3.75rem;
            font-weight: 800;
            letter-spacing: -0.04em;
            margin-bottom: 0.25rem;
            color: var(--text-primary);
            line-height: 1.1;
          }

          .hero-title-suffix {
            color: var(--badge-green-text);
          }

          .hero-subtitle {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--text-secondary);
            margin-bottom: 1.25rem;
            letter-spacing: -0.02em;
          }

          .hero-bio {
            font-size: 1.15rem;
            color: var(--text-secondary);
            line-height: 1.6;
            margin-bottom: 2rem;
            max-width: 740px;
          }

          .hero-actions {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 2.25rem;
            flex-wrap: wrap;
          }

          .hero-socials {
            display: flex;
            align-items: center;
            gap: 1.25rem;
            margin-bottom: 3rem;
            flex-wrap: wrap;
          }

          .social-link {
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            color: var(--text-secondary);
            text-decoration: none;
            font-size: 0.85rem;
            font-weight: 500;
            transition: color var(--transition-fast);
          }

          .social-link:hover {
            color: var(--text-primary);
          }

          .hero-stats-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1rem;
          }

          .stat-card {
            background: var(--bg-surface);
            border: 1px solid var(--border-color);
            border-radius: 10px;
            padding: 1.25rem 0.85rem;
            text-align: center;
            transition: all var(--transition-fast);
          }

          .stat-card:hover {
            border-color: var(--border-hover);
            transform: translateY(-2px);
            box-shadow: var(--shadow-sm);
          }

          .stat-value {
            display: block;
            font-size: 1.85rem;
            font-weight: 800;
            color: var(--text-primary);
            letter-spacing: -0.03em;
            line-height: 1.2;
            font-family: var(--font-mono);
          }

          .stat-label {
            font-size: 0.75rem;
            color: var(--text-muted);
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.04em;
          }

          @media (max-width: 768px) {
            .hero-section {
              padding-top: 6.5rem;
              padding-bottom: 3rem;
            }
            .hero-title {
              font-size: 2.5rem;
            }
            .hero-subtitle {
              font-size: 1.2rem;
            }
            .hero-bio {
              font-size: 1rem;
            }
            .hero-stats-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 480px) {
            .hero-title {
              font-size: 2.15rem;
            }
            .hero-actions {
              display: grid;
              grid-template-columns: 1fr;
              width: 100%;
            }
            .hero-actions .btn {
              width: 100%;
            }
            .hero-stats-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 0.65rem;
            }
            .stat-card {
              padding: 0.9rem 0.5rem;
            }
            .stat-value {
              font-size: 1.4rem;
            }
            .stat-label {
              font-size: 0.7rem;
            }
          }
        `}</style>
      </section>

      {/* Resume ATS Text Copy Drawer */}
      <ResumeCopyDrawer
        isOpen={copyDrawerOpen}
        onClose={() => setCopyDrawerOpen(false)}
      />
    </>
  );
}


