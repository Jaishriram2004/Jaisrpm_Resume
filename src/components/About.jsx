import React from 'react';
import { Database, BarChart3, Code2, Globe, Compass, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function About() {
  const { personal, principles } = portfolioData;

  const icons = [Database, BarChart3, Code2, Globe];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-tag hoverable-tag">
          <Compass size={14} className="tag-icon" />
          <span>01. What Drives Me</span>
        </div>

        <h2 className="section-heading">Vision & Direction</h2>
        <p className="section-subheading about-subheading">
          {personal.bio}
        </p>

        <div className="principles-grid">
          {principles.map((p, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div key={idx} className="card principle-card">
                <div className="principle-top-row">
                  <div className="principle-icon">
                    <Icon size={20} className="principle-icon-svg" />
                  </div>
                  <div className="principle-meta">
                    <span className="principle-index mono">0{idx + 1}</span>
                    <ArrowUpRight size={14} className="principle-arrow" />
                  </div>
                </div>
                <h3 className="principle-title">{p.title}</h3>
                <p className="principle-desc">{p.description}</p>
                <div className="principle-glow-bar" />
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .about-subheading {
          max-width: 840px;
          line-height: 1.6;
        }

        .hoverable-tag {
          transition: border-color var(--transition-fast), background-color var(--transition-fast), transform var(--transition-fast);
          cursor: default;
        }

        .hoverable-tag:hover {
          border-color: var(--badge-green-border);
          background: rgba(16, 185, 129, 0.08);
          transform: translateY(-1px);
        }

        .hoverable-tag:hover .tag-icon {
          transform: rotate(45deg);
          color: var(--badge-green-text);
        }

        .tag-icon {
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .principles-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .principle-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.3s ease,
                      box-shadow 0.35s ease,
                      background 0.3s ease;
          cursor: pointer;
        }

        .principle-card:hover {
          transform: translateY(-6px);
          border-color: rgba(16, 185, 129, 0.38);
          background: linear-gradient(180deg, rgba(24, 24, 27, 0.95) 0%, rgba(18, 18, 21, 0.98) 100%);
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.75), 0 0 24px -2px rgba(16, 185, 129, 0.18);
        }

        .principle-card::before {
          transition: width 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                      background 0.35s ease,
                      opacity 0.3s ease,
                      box-shadow 0.35s ease;
        }

        .principle-card:hover::before {
          width: 90px;
          background: linear-gradient(90deg, #10b981 0%, #06b6d4 70%, transparent 100%);
          opacity: 1;
          box-shadow: 0 0 14px rgba(16, 185, 129, 0.65);
        }

        .principle-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          margin-bottom: 1.25rem;
        }

        .principle-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 9px;
          background: var(--bg-elevated);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .principle-card:hover .principle-icon {
          background: rgba(16, 185, 129, 0.12);
          border-color: rgba(16, 185, 129, 0.45);
          color: #10b981;
          transform: scale(1.1) translateY(-2px);
          box-shadow: 0 0 16px rgba(16, 185, 129, 0.3);
        }

        .principle-icon-svg {
          transition: transform 0.35s ease;
        }

        .principle-card:hover .principle-icon-svg {
          transform: rotate(8deg) scale(1.05);
        }

        .principle-meta {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .principle-index {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
          opacity: 0.4;
          transition: all 0.3s ease;
        }

        .principle-arrow {
          color: var(--text-muted);
          opacity: 0;
          transform: translate(-4px, 4px);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .principle-card:hover .principle-index {
          opacity: 1;
          color: #10b981;
          text-shadow: 0 0 10px rgba(16, 185, 129, 0.4);
        }

        .principle-card:hover .principle-arrow {
          opacity: 1;
          color: #10b981;
          transform: translate(0, 0);
        }

        .principle-title {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          transition: color 0.25s ease, transform 0.25s ease;
        }

        .principle-card:hover .principle-title {
          color: #ffffff;
          transform: translateX(3px);
        }

        .principle-desc {
          font-size: 0.925rem;
          color: var(--text-secondary);
          line-height: 1.55;
          transition: color 0.25s ease;
        }

        .principle-card:hover .principle-desc {
          color: rgba(244, 244, 245, 0.92);
        }

        .principle-glow-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.7), rgba(6, 182, 212, 0.7), transparent);
          opacity: 0;
          transform: scaleX(0.3);
          transition: opacity 0.35s ease, transform 0.35s ease;
          pointer-events: none;
        }

        .principle-card:hover .principle-glow-bar {
          opacity: 1;
          transform: scaleX(1);
        }

        @media (max-width: 640px) {
          .principles-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
