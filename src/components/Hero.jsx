import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, PhoneIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export function Hero() {
  const { personal, stats } = portfolioData;

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
              <Link to="/projects" className="btn btn-primary btn-hero-primary">
                <span>View Projects</span>
                <ArrowUpRight size={16} className="btn-icon-arrow" />
              </Link>

              <Link to="/contact" className="btn btn-secondary btn-hero-secondary">
                <Mail size={16} className="btn-icon-mail" />
                <span>Contact Me</span>
              </Link>
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
              {stats.map((stat, idx) => {
                const CardInner = (
                  <>
                    <div className="stat-card-top">
                      <span className="stat-value">{stat.value}</span>
                      {stat.link && (
                        <span className="stat-arrow-badge" aria-hidden="true">
                          <ArrowUpRight size={14} />
                        </span>
                      )}
                    </div>
                    <span className="stat-label">{stat.label}</span>
                    {stat.detail && <span className="stat-detail">{stat.detail}</span>}
                  </>
                );

                const isExternal = stat.link && stat.link.startsWith('http');

                return isExternal ? (
                  <a
                    key={idx}
                    href={stat.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="stat-card stat-card-link"
                  >
                    {CardInner}
                  </a>
                ) : stat.link ? (
                  <Link key={idx} to={stat.link} className="stat-card stat-card-link">
                    {CardInner}
                  </Link>
                ) : (
                  <div key={idx} className="stat-card">
                    {CardInner}
                  </div>
                );
              })}
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
            max-width: 100%;
          }

          .hero-actions {
            display: flex;
            align-items: center;
            gap: 0.85rem;
            margin-bottom: 2.25rem;
            flex-wrap: wrap;
          }

          /* Global Hero Button Polish */
          .hero-actions .btn {
            position: relative;
            overflow: hidden;
            font-weight: 600;
            border-radius: 9px;
            padding: 0.65rem 1.25rem;
            font-size: 0.9rem;
            letter-spacing: -0.01em;
            transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
          }

          .hero-actions .btn:active {
            transform: scale(0.96) translateY(0) !important;
          }

          /* 1. Primary "View Projects" Button — Luminous Sheen & Kinetic Arrow */
          .btn-hero-primary {
            background: var(--accent-primary);
            color: var(--bg-primary) !important;
            border: 1px solid var(--accent-primary);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
          }

          .btn-hero-primary::before {
            content: '';
            position: absolute;
            top: 0;
            left: -130%;
            width: 70%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent 0%,
              rgba(255, 255, 255, 0.45) 50%,
              transparent 100%
            );
            transform: skewX(-22deg);
            pointer-events: none;
            transition: none;
          }

          .btn-hero-primary:hover {
            transform: translateY(-2.5px);
            box-shadow: 0 8px 24px -4px rgba(255, 255, 255, 0.25), 0 2px 8px rgba(0, 0, 0, 0.3);
            filter: brightness(1.04);
          }

          .btn-hero-primary:hover::before {
            left: 150%;
            transition: left 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .btn-hero-primary .btn-icon-arrow {
            transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .btn-hero-primary:hover .btn-icon-arrow {
            transform: translate(3px, -3px);
          }

          /* 2. Secondary Buttons System — Frosted Glass with Specular Edge & Glow */
          .btn-hero-secondary {
            background: var(--bg-surface);
            color: var(--text-primary);
            border: 1px solid var(--border-color);
            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06), 0 2px 8px rgba(0, 0, 0, 0.2);
          }

          .btn-hero-secondary::after {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 8px;
            background: radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.08), transparent 70%);
            opacity: 0;
            transition: opacity 0.25s ease;
            pointer-events: none;
          }

          .btn-hero-secondary:hover {
            transform: translateY(-2.5px);
            background: var(--bg-elevated);
            border-color: var(--border-hover);
            color: var(--text-primary);
            box-shadow: 0 8px 20px -4px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.12), 0 0 12px rgba(16, 185, 129, 0.12);
          }

          .btn-hero-secondary:hover::after {
            opacity: 1;
          }

          /* 3. Micro-Interactions on Icons */
          .btn-icon-mail,
          .btn-icon-pdf,
          .btn-icon-copy {
            transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), color 0.25s ease;
          }

          .btn-hero-secondary:hover .btn-icon-mail {
            transform: rotate(-12deg) scale(1.18);
            color: var(--badge-green-text);
          }

          .btn-hero-secondary:hover .btn-icon-pdf {
            transform: translateY(-2px) scale(1.12);
            color: var(--badge-green-text);
          }

          .btn-hero-secondary:hover .btn-icon-copy {
            transform: scale(1.22) rotate(6deg);
            color: var(--badge-green-text);
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
            grid-template-columns: repeat(3, 1fr);
            gap: 1.15rem;
          }

          .stat-card {
            background: var(--bg-surface);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 1.25rem 1.15rem;
            text-align: left;
            transition: all var(--transition-fast);
            display: flex;
            flex-direction: column;
            text-decoration: none;
            position: relative;
            box-shadow: var(--shadow-sm);
          }

          .stat-card-link {
            cursor: pointer;
          }

          .stat-card-link:hover {
            border-color: var(--border-hover);
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
            background: var(--bg-elevated);
          }

          .stat-card-top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 0.35rem;
          }

          .stat-value {
            display: block;
            font-size: 2rem;
            font-weight: 800;
            color: var(--text-primary);
            letter-spacing: -0.03em;
            line-height: 1.1;
            font-family: var(--font-mono);
          }

          .stat-arrow-badge {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
            border-radius: 6px;
            background: var(--accent-subtle);
            color: var(--text-muted);
            transition: all var(--transition-fast);
          }

          .stat-card-link:hover .stat-arrow-badge {
            background: var(--text-primary);
            color: var(--bg-primary);
            transform: translate(2px, -2px);
          }

          .stat-label {
            font-size: 0.78rem;
            color: var(--text-primary);
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          .stat-detail {
            font-size: 0.78rem;
            color: var(--text-muted);
            font-family: var(--font-mono);
            margin-top: 0.35rem;
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
              grid-template-columns: repeat(3, 1fr);
              gap: 0.75rem;
            }
            .stat-card {
              padding: 1rem 0.85rem;
            }
            .stat-value {
              font-size: 1.6rem;
            }
          }

          @media (max-width: 600px) {
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
              grid-template-columns: 1fr;
              gap: 0.75rem;
            }
            .stat-card {
              padding: 1rem 1rem;
            }
            .stat-value {
              font-size: 1.75rem;
            }
          }
        `}</style>
      </section>
    </>
  );
}


