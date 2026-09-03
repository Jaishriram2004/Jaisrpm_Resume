import React from 'react';
import { Award, BookOpen, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function Achievements() {
  const { achievements, publications } = portfolioData;

  return (
    <section id="achievements" className="section">
      <div className="container">
        <div className="section-tag">
          <Award size={14} />
          <span>04. Recognition & Research</span>
        </div>

        <h2 className="section-heading">Achievements & Publications</h2>
        <p className="section-subheading">
          Honors, industry awards, and published research papers.
        </p>

        <div className="achievements-grid">
          {/* Awards Column */}
          <div className="achievements-column">
            <h3 className="column-title">
              <Award size={18} />
              <span>Honors & Awards</span>
            </h3>

            <div className="column-cards">
              {achievements.map((item, idx) => (
                <div key={idx} className="card achievement-card">
                  <span className="badge award-badge">Award</span>
                  <h4 className="achievement-title">{item.title}</h4>
                  <div className="achievement-org">{item.organization}</div>
                  <p className="achievement-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Publications Column */}
          <div className="achievements-column">
            <h3 className="column-title">
              <BookOpen size={18} />
              <span>Research Publications</span>
            </h3>

            <div className="column-cards">
              {publications.map((pub, idx) => (
                <div key={idx} className="card achievement-card">
                  <span className="badge pub-badge">{pub.date}</span>
                  <h4 className="achievement-title">{pub.title}</h4>
                  <div className="achievement-org">{pub.publisher}</div>
                  <p className="achievement-desc">{pub.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .achievements-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .achievements-column {
          display: flex;
          flex-direction: column;
        }

        .column-title {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 1.25rem;
          color: var(--text-primary);
        }

        .column-cards {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .achievement-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .award-badge, .pub-badge {
          margin-bottom: 0.75rem;
        }

        .achievement-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 0.35rem;
          line-height: 1.35;
        }

        .achievement-org {
          font-size: 0.875rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          margin-bottom: 0.6rem;
        }

        .achievement-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .achievements-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
