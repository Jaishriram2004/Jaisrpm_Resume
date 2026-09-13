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
          Honors, industry awards, and published research papers.{' '}
          <a
            href="https://www.linkedin.com/in/jaishriram-pm/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-profile-link"
          >
            <span>Check out my profile for more details</span>
            <ExternalLink size={13} className="profile-link-arrow" />
          </a>
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
                  {pub.url && (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pub-click-link"
                    >
                      <span>Click here to view publication</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
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

        .pub-click-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--badge-green-text);
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid var(--badge-green-border);
          padding: 0.35rem 0.75rem;
          border-radius: 6px;
          margin-top: 0.75rem;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .pub-click-link:hover {
          background: rgba(16, 185, 129, 0.18);
          border-color: rgba(16, 185, 129, 0.6);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);
        }

        .inline-profile-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          color: var(--badge-green-text);
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          border-bottom: 1px dashed var(--badge-green-border);
          padding-bottom: 1px;
          transition: all 0.25s ease;
          margin-left: 0.25rem;
        }

        .inline-profile-link:hover {
          color: #ffffff;
          border-bottom-style: solid;
          border-bottom-color: var(--badge-green-text);
          text-shadow: 0 0 10px rgba(16, 185, 129, 0.4);
        }

        .profile-link-arrow {
          transition: transform 0.25s ease;
        }

        .inline-profile-link:hover .profile-link-arrow {
          transform: translate(2px, -2px);
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
