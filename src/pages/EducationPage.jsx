import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function EducationPage() {
  const { education, achievements, publications } = portfolioData;

  return (
    <div className="page-wrapper section">
      <div className="container">
        {/* Education Section */}
        <div className="section-tag">
          <GraduationCap size={14} />
          <span>03. Education & Credentials</span>
        </div>

        <h2 className="section-heading">Education & Academic Record</h2>
        <p className="section-subheading">
          Academic foundation in Information Technology, Software Systems, and Deep Learning at PSG College of Technology.
        </p>

        <div className="education-grid">
          {education.map((item, idx) => (
            <div key={idx} className="card education-card">
              <div className="timeline-header">
                <div>
                  <h3 className="item-role">{item.degree}</h3>
                  <div className="item-institution">{item.institution}</div>
                </div>
                <div className="item-meta">
                  <span className="meta-info mono">
                    <Calendar size={14} />
                    {item.period}
                  </span>
                </div>
              </div>

              <p className="item-details">{item.details}</p>
              <div className="item-grade status-badge">{item.grade}</div>
            </div>
          ))}
        </div>

        {/* Achievements & Research Section */}
        <div className="achievements-section-wrapper">
          <div className="section-tag">
            <Award size={14} />
            <span>Honors, Awards & Publications</span>
          </div>

          <h3 className="sub-section-heading">Recognition & Applied AI Research</h3>
          <p className="section-subheading">
            Department project awards, industry internship certificates, and published research papers.
          </p>

          <div className="achievements-grid">
            {/* Awards Column */}
            <div className="achievements-column">
              <h4 className="column-title">
                <Award size={18} />
                <span>Honors & Awards</span>
              </h4>

              <div className="column-cards">
                {achievements.map((item, idx) => (
                  <div key={idx} className="card achievement-card">
                    <span className="badge award-badge">Award</span>
                    <h5 className="achievement-title">{item.title}</h5>
                    <div className="achievement-org mono">{item.organization}</div>
                    <p className="achievement-desc">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Publications Column */}
            <div className="achievements-column">
              <h4 className="column-title">
                <BookOpen size={18} />
                <span>Research Publications</span>
              </h4>

              <div className="column-cards">
                {publications.map((pub, idx) => (
                  <div key={idx} className="card achievement-card">
                    <span className="badge pub-badge mono">{pub.date}</span>
                    <h5 className="achievement-title">{pub.title}</h5>
                    <div className="achievement-org mono">{pub.publisher}</div>
                    <p className="achievement-desc">{pub.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .education-grid {
          margin-bottom: 4rem;
        }

        .education-card {
          display: flex;
          flex-direction: column;
        }

        .item-institution {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-top: 0.2rem;
        }

        .item-details {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-top: 1rem;
          margin-bottom: 1.25rem;
          line-height: 1.6;
        }

        .item-grade {
          align-self: flex-start;
        }

        .achievements-section-wrapper {
          border-top: 1px solid var(--border-subtle);
          padding-top: 3.5rem;
        }

        .sub-section-heading {
          font-size: 1.65rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

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
          font-size: 0.85rem;
          color: var(--text-muted);
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
    </div>
  );
}
