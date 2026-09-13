import React, { useState } from 'react';
import { GraduationCap, Award, BookOpen, Calendar, ArrowUpRight, Sparkles, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { EducationModal } from '../components/EducationModal';

export function EducationPage() {
  const { personal, education, achievements, publications } = portfolioData;
  const [selectedEdu, setSelectedEdu] = useState(null);

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
            <div
              key={idx}
              className="card education-card education-card-interactive"
              onClick={() => setSelectedEdu(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedEdu(item)}
            >
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
                  <div className="edu-arrow-badge" title="View key highlights and achievements">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>

              <p className="item-details">{item.details}</p>

              <div className="edu-card-footer">
                <div className="item-grade status-badge">{item.grade}</div>
                <div className="edu-view-proof-btn">
                  <Sparkles size={13} />
                  <span>View Key Highlights</span>
                  <ArrowUpRight size={13} className="hint-arrow" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Popup */}
        <EducationModal
          educationItem={selectedEdu}
          onClose={() => setSelectedEdu(null)}
        />

        {/* Achievements & Research Section */}
        <div className="achievements-section-wrapper">
          <div className="section-tag">
            <Award size={14} />
            <span>Honors, Awards & Publications</span>
          </div>

          <h3 className="sub-section-heading">Recognition & Applied AI Research</h3>
          <p className="section-subheading">
            Department project awards, industry internship certificates, and published research papers.{' '}
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
      </div>

      <style>{`
        .education-grid {
          margin-bottom: 4rem;
        }

        .education-card {
          display: flex;
          flex-direction: column;
        }

        .education-card-interactive {
          cursor: pointer;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.25s ease,
                      box-shadow 0.3s ease,
                      background 0.25s ease;
          position: relative;
        }

        .education-card-interactive:hover {
          transform: translateY(-4px);
          border-color: rgba(16, 185, 129, 0.45);
          background: linear-gradient(180deg, rgba(24, 24, 27, 0.95) 0%, rgba(18, 18, 21, 0.98) 100%);
          box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.7), 0 0 20px rgba(16, 185, 129, 0.15);
        }

        .edu-arrow-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: var(--bg-elevated);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
          margin-left: 0.75rem;
        }

        .education-card-interactive:hover .edu-arrow-badge {
          background: rgba(16, 185, 129, 0.15);
          border-color: rgba(16, 185, 129, 0.5);
          color: #10b981;
          transform: translate(2px, -2px) scale(1.08);
          box-shadow: 0 0 12px rgba(16, 185, 129, 0.35);
        }

        .edu-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 0.5rem;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .edu-view-proof-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--badge-green-text);
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid var(--badge-green-border);
          padding: 0.3rem 0.75rem;
          border-radius: 6px;
          transition: all 0.25s ease;
        }

        .education-card-interactive:hover .edu-view-proof-btn {
          background: rgba(16, 185, 129, 0.18);
          border-color: rgba(16, 185, 129, 0.6);
          box-shadow: 0 0 10px rgba(16, 185, 129, 0.2);
        }

        .hint-arrow {
          transition: transform 0.25s ease;
        }

        .education-card-interactive:hover .hint-arrow {
          transform: translate(2px, -2px);
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
    </div>
  );
}
