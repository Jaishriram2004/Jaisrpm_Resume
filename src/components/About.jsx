import React from 'react';
import { ShieldCheck, Zap, Layout, Server, Compass } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function About() {
  const { personal, principles } = portfolioData;

  const icons = [ShieldCheck, Zap, Layout, Server];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-tag">
          <Compass size={14} />
          <span>01. Engineering Philosophy</span>
        </div>

        <h2 className="section-heading">About & Focus</h2>
        <p className="section-subheading">
          {personal.bio}
        </p>

        <div className="principles-grid">
          {principles.map((p, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div key={idx} className="card principle-card">
                <div className="principle-icon">
                  <Icon size={20} />
                </div>
                <h3 className="principle-title">{p.title}</h3>
                <p className="principle-desc">{p.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .principles-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .principle-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .principle-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: var(--bg-elevated);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          margin-bottom: 1.25rem;
        }

        .principle-title {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .principle-desc {
          font-size: 0.925rem;
          color: var(--text-secondary);
          line-height: 1.55;
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
